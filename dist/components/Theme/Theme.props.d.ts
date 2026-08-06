import { radii } from '../../props/radius.prop';
type ThemeRadius = (typeof radii)[number];
declare const appearances: readonly ["inherit", "light", "dark"];
declare const panelBackgrounds: readonly ["solid", "translucent"];
declare const themePropDefs: {
    appearance: {
        type: "enum";
        values: readonly ["inherit", "light", "dark"];
        default: "inherit";
    };
    accentColor: {
        type: "enum";
        values: readonly ["blue", "coral", "green", "mint", "pink", "red", "sky", "yellow"];
        default: "pink";
    };
    grayColor: {
        type: "enum";
        values: readonly ["auto", "neutral", "slate"];
        default: "neutral";
    };
    panelBackground: {
        type: "enum";
        values: readonly ["solid", "translucent"];
        default: "translucent";
    };
    radius: {
        type: "enum";
        values: readonly ["none", "small", "medium", "large", "full"];
        default: "medium";
    };
    scaling: {
        type: "enum";
        values: readonly ["90%", "95%", "100%", "105%", "110%"];
        default: "100%";
    };
    hasBackground: {
        type: "boolean";
        default: true;
    };
};
export { themePropDefs, appearances, panelBackgrounds };
export type { ThemeRadius };
//# sourceMappingURL=Theme.props.d.ts.map