import { createContext } from "react";

export type ColorTheme = {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    border: string;
}

export const ColorThemeContext = createContext<ColorTheme>({
    primary: "#000",
    secondary: "#fff",
    background: "#f0f0f0",
    text: "#333",
    border: "#ccc"
});