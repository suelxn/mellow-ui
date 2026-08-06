declare const accentColors: readonly ["blue", "coral", "green", "mint", "pink", "red", "sky", "yellow"];
declare const grayColors: readonly ["auto", "neutral", "slate"];
declare const colorPropDef: {
    color: {
        type: "enum";
        values: readonly ["blue", "coral", "green", "mint", "pink", "red", "sky", "yellow"];
        default: (typeof accentColors)[number] | undefined;
    };
};
declare const accentColorPropDef: {
    color: {
        type: "enum";
        values: readonly ["blue", "coral", "green", "mint", "pink", "red", "sky", "yellow"];
        default: (typeof accentColors)[number];
    };
};
export { accentColorPropDef, colorPropDef, accentColors, grayColors, };
//# sourceMappingURL=color.prop.d.ts.map