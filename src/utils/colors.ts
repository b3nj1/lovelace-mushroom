import { css } from "lit";
import * as Color from "color";

export const COLORS = [
    "red",
    "pink",
    "purple",
    "deep-purple",
    "indigo",
    "blue",
    "light-blue",
    "cyan",
    "teal",
    "green",
    "light-green",
    "lime",
    "yellow",
    "amber",
    "orange",
    "deep-orange",
    "brown",
    "grey",
    "blue-grey",
    "black",
    "white",
    "disabled",
];

export function computeRgbColor(color: string): string {
    if (COLORS.includes(color)) {
        return `var(--rgb-${color})`;
    } else if (color.startsWith("#")) {
        try {
            return Color.rgb(color).rgb().array().join(", ");
        } catch (err) {
            return "";
        }
    } else if (color.startsWith("var(")) {
      return `${color}`;
    }
    return color;
}

export function computeColorName(color: string): string {
    return color
        .split("-")
        .map((s) => capitalizeFirstLetter(s))
        .join(" ");
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const defaultColorCss = css`
    --default-red: 244, 67, 54;
    --default-pink: 233, 30, 99;
    --default-purple: 156, 39, 176;
    --default-deep-purple: 103, 58, 183;
    --default-indigo: 63, 81, 181;
    --default-blue: 33, 150, 243;
    --default-light-blue: 3, 169, 244;
    --default-cyan: 0, 188, 212;
    --default-teal: 0, 150, 136;
    --default-green: 76, 175, 80;
    --default-light-green: 139, 195, 74;
    --default-lime: 205, 220, 57;
    --default-yellow: 255, 235, 59;
    --default-amber: 255, 193, 7;
    --default-orange: 255, 152, 0;
    --default-deep-orange: 255, 87, 34;
    --default-brown: 121, 85, 72;
    --default-grey: 158, 158, 158;
    --default-blue-grey: 96, 125, 139;
    --default-black: 0, 0, 0;
    --default-white: 255, 255, 255;
    --default-disabled: 189, 189, 189;
`;

export const defaultDarkColorCss = css`
    --default-disabled: 111, 111, 111;
`;
