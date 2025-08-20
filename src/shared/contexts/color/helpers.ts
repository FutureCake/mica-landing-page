import type { Theme } from "./types";

export function getSystemTheme(): Theme {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

}