type PossibleEvent = {
    defaultPrevented: boolean;
};
declare function composeEventHandlers<E extends PossibleEvent>(originalHandler?: (event: E) => void, ourHandler?: (event: E) => void): (event: E) => void;
export { composeEventHandlers };
//# sourceMappingURL=composeEventHandlers.d.ts.map