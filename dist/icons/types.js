/*
  Define os tokens de dimensão, tipos TypeScript e a interface de propriedades para o componente de Ícone.
  Mapeia a escala fixa de tamanhos (ICON_SIZES: xs a xl), extrai dinamicamente as chaves válidas de ícones
  do @phosphor-icons/react (IconName) e tipa as propriedades aceitas pelo componente (IconProps),
  garantindo consistência e suporte a sobrescritas numéricas.
*/
// Map de tokens
export const ICON_SIZES = {
    xs: 16,
    sm: 20,
    md: 24, // Tamanho padrão
    lg: 32,
    xl: 40,
};
