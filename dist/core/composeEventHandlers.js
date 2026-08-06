/*
  Encadeia dois event handlers para a mesma prop (ex.: onClick vindo do componente e onClick
  vindo do elemento filho no asChild), respeitando event.preventDefault() chamado pelo primeiro.
*/
function composeEventHandlers(originalHandler, ourHandler) {
    return (event) => {
        originalHandler?.(event);
        if (!event.defaultPrevented) {
            ourHandler?.(event);
        }
    };
}
export { composeEventHandlers };
