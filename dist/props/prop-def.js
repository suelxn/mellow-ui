/*
  Define os tipos fundamentais, utilitários de inferência e a estrutura de especificação de props do Design System (prop-def).
  Estabelece o sistema de breakpoints responsivos (Responsive), o utilitário de autocomplete para union de tipos (Union),
  as variantes de definição de propriedades (PropDef) e os tipos utilitários GetPropDefType e GetPropDefTypes
  para inferência e extração automática de propriedades responsivas nos componentes.
*/
const breakpointsArray = ['initial', 'xs', 'sm', 'md', 'lg', 'xl'];
const breakpoints = new Set(breakpointsArray);
export { breakpointsArray, breakpoints };
