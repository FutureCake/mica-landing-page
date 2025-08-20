import { useContext } from "react";
import { ColorThemeContext } from "./context";

export default function useColorTheme() {
    return useContext(ColorThemeContext);
}