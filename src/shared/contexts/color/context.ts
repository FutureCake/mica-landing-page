import { createContext } from "react";
import type { ColorScheme } from "./types";


export const ColorThemeContext = createContext<ColorScheme>({
    primary: "",
    primaryShy: "",
    background: "",
    text: "",
    border: ""
});