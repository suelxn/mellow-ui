/*
  Função central de resolução de props do Design System. Cruza as props recebidas com uma ou
  mais prop defs, aplica os valores padrão, gera o `className` e o `style` inline
  correspondentes e devolve as props "limpas", sem as chaves já convertidas em className/style.
*/

import { clsx as classNames } from 'clsx';

import { getResponsiveClassNames, getResponsiveStyles } from './get-responsive-styles.js';
import { hasOwnProperty } from './has-own-property.js';
import { isResponsiveObject } from './is-responsive-object.js';
import { mergeStyles } from './merge-styles.js';
import { breakpoints } from '../props/prop-def.js';

import type * as React from 'react';
import type { PropDef } from '../props/prop-def.js';

type PropDefsWithClassName<T> =
  T extends Record<string, PropDef>
    ? { [K in keyof T]: T[K] extends { className: string } ? K : never }[keyof T]
    : never;

function mergePropDefs<T extends Record<string, PropDef>[]>(
  ...args: T
): Record<string, PropDef<string>> {
  return Object.assign({}, ...args);
}

/**
* Recebe props, verifica-as em relação às prop defs que possuem um `className`,
* adiciona as classes CSS e estilos inline necessários e retorna as props sem
* as prop defs correspondentes que foram usadas para formular os novos valores de `className`
* e `style`. Também aplica os valores padrão das prop defs a cada prop.
*/
function extractProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- bolsa de props heterogênea, chaves só são conhecidas em runtime via propDefs
  P extends { className?: string; style?: React.CSSProperties; [key: string]: any },
  T extends Record<string, PropDef>[],
>(
  props: P,
  ...propDefs: T
): Omit<P & { className?: string; style?: React.CSSProperties }, PropDefsWithClassName<T[number]>> {
  let className: string | undefined;
  let style: ReturnType<typeof mergeStyles>;
  const extractedProps = { ...props };
  const allPropDefs = mergePropDefs(...propDefs);

  for (const key in allPropDefs) {
    let value = extractedProps[key];
    const propDef = allPropDefs[key];

    // Aplicar valores padrão de definição de propriedade
    if (propDef.default !== undefined && value === undefined) {
      value = propDef.default;
    }

     // Aplica o valor padrão se o valor não for um valor de enumeração válido.
    if (propDef.type === 'enum') {
      const values = [propDef.default, ...propDef.values];

      if (!values.includes(value) && !isResponsiveObject(value)) {
        value = propDef.default;
      }
    }

    //Aplica o valor com padrões
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- mesma bolsa de props heterogênea de P acima
    (extractedProps as Record<string, any>)[key] = value;

    if ('className' in propDef && propDef.className) {
      delete extractedProps[key];

      const isResponsivePropDef = 'responsive' in propDef;
        // Certifique-se de não estarmos percorrendo valores responsivos para definições de propriedades não responsivas
      if (!value || (isResponsiveObject(value) && !isResponsivePropDef)) {
        continue;
      }

      if (isResponsiveObject(value)) {
        // Clona o objeto responsivo antes de preencher defaults nele: "extractedProps" é um
        // spread raso de "props" (linha 45), então "value" ainda é a MESMA referência do objeto
        // passado pelo consumidor. Sem essa cópia, as escritas abaixo mutariam esse objeto
        // original — ex.: quebra com TypeError se o consumidor reutilizar uma config
        // Object.freeze()ada entre instâncias (o projeto é 100% ESM, portanto sempre modo estrito).
        value = { ...value };

        // Aplicar os valores padrão da propriedade ao ponto de interrupção `initial`
        if (propDef.default !== undefined && value.initial === undefined) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any -- isResponsiveObject tipa o objeto como Record<Breakpoint, string>, mas propDef.default pode ser boolean (BooleanPropDef) além de string
          (value as Record<string, any>).initial = propDef.default;
        }

        // Aplica o valor padrão ao ponto de interrupção `initial` quando ele não for um valor de enumeração válido.
        if (propDef.type === 'enum') {
          const values = [propDef.default, ...propDef.values];

          if (propDef.default !== undefined && !values.includes(value.initial)) {
            value.initial = propDef.default;
          }
        }
      }

      if (propDef.type === 'enum') {
        const propClassName = getResponsiveClassNames({
          allowArbitraryValues: false,
          value,
          className: propDef.className,
          propValues: propDef.values,
          parseValue: propDef.parseValue,
        });

        className = classNames(className, propClassName);
        continue;
      }

      if (propDef.type === 'string' || propDef.type === 'enum | string') {
        const propDefValues = propDef.type === 'string' ? [] : propDef.values;

        const [propClassNames, propCustomProperties] = getResponsiveStyles({
          className: propDef.className,
          customProperties: propDef.customProperties,
          propValues: propDefValues,
          parseValue: propDef.parseValue,
          value,
        });

        style = mergeStyles(style, propCustomProperties);
        className = classNames(className, propClassNames);
        continue;
      }

      if (propDef.type === 'boolean' && value) {
        if (isResponsiveObject(value)) {
          const responsiveClassNames: string[] = [];

          for (const bp in value) {
            if (!hasOwnProperty(value, bp) || !breakpoints.has(bp)) {
              continue;
            }

            if (value[bp]) {
              responsiveClassNames.push(bp === 'initial' ? propDef.className : `${bp}:${propDef.className}`);
            }
          }

          className = classNames(className, responsiveClassNames.join(' '));
          continue;
        }

        className = classNames(className, propDef.className);
        continue;
      }
    }
  }

  extractedProps.className = classNames(className, props.className);
  extractedProps.style = mergeStyles(style, props.style);
  return extractedProps;
}

export { extractProps };
