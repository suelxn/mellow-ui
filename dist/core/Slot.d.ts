import * as React from 'react';
type SlotProps = {
    children?: React.ReactNode;
    ref?: React.Ref<HTMLElement>;
} & Record<string, unknown>;
declare function Slot({ children, ref, ...slotProps }: SlotProps): React.ReactElement<unknown, string | React.JSXElementConstructor<any>>;
export { Slot };
export type { SlotProps };
//# sourceMappingURL=Slot.d.ts.map