import { useColorScheme } from "react-native";
import { useThemeStore } from "../store/theme.store";
import { colors } from "@coryde/design-tokens";

export const useTheme = () => {
  const preferenceTheme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const systemTheme = useColorScheme();
  const resolvedTheme =
    preferenceTheme === "system" ? (systemTheme ?? "light") : preferenceTheme;

  return {
    theme: resolvedTheme,
    preferenceTheme,
    setTheme,
    colors: colors[resolvedTheme],
  };
};
