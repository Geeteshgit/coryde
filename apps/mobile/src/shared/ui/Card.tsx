import React from "react";
import {
  View,
  StyleSheet,
  ViewProps,
  type StyleProp,
  ViewStyle,
} from "react-native";
import { useTheme } from "@/src/hooks/useTheme";
import { radius, spacing } from "@coryde/design-tokens";

type CardProps = ViewProps & {
  children: React.ReactNode;
  size?: "default" | "sm";
  style?: StyleProp<ViewStyle>;
};

const Card = ({ children, size = "default", style, ...props }: CardProps) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.card, borderColor: colors.border },
        size === "default" ? styles.default : styles.sm,
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: radius.xl,
  },

  default: {
    padding: spacing.md,
    gap: spacing.md,
  },

  sm: {
    padding: spacing.sm,
    gap: spacing.sm,
  },
});
