import { useEffect, useState, type PropsWithChildren } from "react";
import { darkScheme, lightScheme, primaryDarkColors, primaryLightColors } from "./constants";
import { ColorThemeContext } from "./context";
import { getSystemTheme } from "./helpers";
import type { Theme } from "./types";

export function ColorThemeProvider(props: PropsWithChildren) {

    const [theme, setTheme] = useState<Theme>(getSystemTheme);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handler = (event: MediaQueryListEvent) => {
            setTheme(event.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    const colors = theme === "dark" ? darkScheme : lightScheme;
    colors.primary = theme === "dark" ? primaryDarkColors[Math.round(Math.random() * primaryDarkColors.length - 1)] : primaryLightColors[Math.round(Math.random() * primaryLightColors.length - 1)];

    return (
        <ColorThemeContext.Provider value={colors}>
            {props.children}
        </ColorThemeContext.Provider>
    );
}