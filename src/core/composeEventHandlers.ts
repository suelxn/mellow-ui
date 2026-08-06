/*
  Encadeia dois event handlers para a mesma prop (ex.: onClick vindo do componente e onClick
  vindo do elemento filho no asChild), respeitando event.preventDefault() chamado pelo primeiro.
*/

type PossibleEvent = { defaultPrevented: boolean };

function composeEventHandlers<E extends PossibleEvent>(
  originalHandler?: (event: E) => void,
  ourHandler?: (event: E) => void
) {
  return (event: E) => {
    originalHandler?.(event);
    if (!event.defaultPrevented) {
      ourHandler?.(event);
    }
  };
}

export { composeEventHandlers };
