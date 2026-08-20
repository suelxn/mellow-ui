/*
  Listas de atributos nativos de `<input>` (gerais, textuais e de rádio), usadas para tipar com
  precisão quais props HTML cada variante de input do Design System deve aceitar.
*/

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes

type InputAttributes =
  | 'accept'
  | 'alt'
  | 'autocapitalize'
  | 'autocomplete'
  | 'capture'
  | 'checked'
  | 'defaultChecked'
  | 'defaultValue'
  | 'disabled'
  | 'form'
  | 'formaction'
  | 'formenctype'
  | 'formmethod'
  | 'formnovalidate'
  | 'formtarget'
  | 'height'
  | 'list'
  | 'max'
  | 'maxlength'
  | 'min'
  | 'minlength'
  | 'multiple'
  | 'name'
  | 'pattern'
  | 'placeholder'
  | 'popovertarget'
  | 'popovertargetaction'
  | 'readonly'
  | 'required'
  | 'size'
  | 'src'
  | 'step'
  | 'type'
  | 'value'
  | 'width';

// Inclui todas as entradas do tipo texto, por exemplo, texto, e-mail, senha, número, data, etc.
type InputTextualAttributes =
  | 'autoCapitalize'
  | 'autoComplete'
  | 'defaultValue'
  | 'disabled'
  | 'form'
  | 'list'
  | 'maxLength'
  | 'minLength'
  | 'min'
  | 'multiple'
  | 'max'
  | 'name'
  | 'pattern'
  | 'placeholder'
  | 'readOnly'
  | 'required'
  | 'size'
  | 'step'
  | 'type'
  | 'value';

type InputRadioAttributes =
  | 'checked'
  | 'defaultChecked'
  | 'defaultValue'
  | 'disabled'
  | 'form'
  | 'name'
  | 'required'
  | 'value';

type NotInputRadioAttributes = Exclude<InputAttributes, InputRadioAttributes>;
type NotInputTextualAttributes = Exclude<InputAttributes, InputTextualAttributes>;

export type {
  InputAttributes,
  InputRadioAttributes,
  InputTextualAttributes,
  NotInputRadioAttributes,
  NotInputTextualAttributes,
};
