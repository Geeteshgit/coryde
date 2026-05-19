import React from "react";
import {
  Pressable,
  Text,
  ActivityIndicator,
  StyleSheet,
  PressableProps,
  ViewStyle,
  TextStyle,
  View,
  GestureResponderEvent,
} from "react-native";
import { spacing, radius, typography, type Theme } from "@coryde/design-tokens";
import { useTheme } from "@/src/hooks/useTheme";
import { haptics } from "@/src/lib/haptics";

type ButtonVariant =
  | "default"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive"
  | "link";
type ButtonSize = "sm" | "md";
type ButtonHaptic =
  | "soft"
  | "light"
  | "medium"
  | "heavy"
  | "success"
  | "error"
  | "none";

type ButtonProps = PressableProps & {
  title?: string;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  haptic?: ButtonHaptic;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
};

const Button = ({
  title,
  children,
  variant = "default",
  size = "md",
  loading = false,
  haptic: hapticType = "light",
  disabled,
  style,
  textStyle,
  onPress,
  ...props
}: ButtonProps) => {
  const { colors } = useTheme();

  const variantStyles = getVariantStyles(variant, colors);
  const sizeStyles = getSizeStyles(size);

  const handlePress = (e: GestureResponderEvent) => {
    if (hapticType !== "none") {
      haptics[hapticType]?.();
    }
    onPress?.(e);
  };

  return (
    <Pressable
      disabled={disabled || loading}
      onPress={handlePress}
      style={({ pressed }) => [
        styles.base,
        sizeStyles.container,
        {
          backgroundColor: variantStyles.background,
          borderColor: variantStyles.border,
          opacity: disabled ? 0.5 : pressed ? 0.7 : 1,
        },
        style,
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={variantStyles.text} />
      ) : (
        <View style={styles.content}>
          {title ? (
            <Text
              style={[
                styles.text,
                sizeStyles.text,
                { color: variantStyles.text },
                textStyle,
              ]}
            >
              {title}
            </Text>
          ) : (
            children
          )}
        </View>
      )}
    </Pressable>
  );
};

const getVariantStyles = (variant: ButtonVariant, colors: Theme) => {
  switch (variant) {
    case "default":
      return {
        background: colors.primary,
        border: colors.primary,
        text: colors.primaryForeground,
      };
    case "secondary":
      return {
        background: colors.secondary,
        border: colors.secondary,
        text: colors.secondaryForeground,
      };
    case "outline":
      return {
        background: "transparent",
        border: colors.input,
        text: colors.foreground,
      };
    case "ghost":
      return {
        background: "transparent",
        border: "transparent",
        text: colors.foreground,
      };
    case "destructive":
      return {
        background: colors.destructive,
        border: colors.destructive,
        text: colors.destructiveForeground,
      };
    case "link":
      return {
        background: "transparent",
        border: "transparent",
        text: colors.primary,
      };
  }
};

/* ---------------- SIZES ---------------- */

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case "sm":
      return {
        container: {
          paddingVertical: spacing.xs,
          paddingHorizontal: spacing.sm,
          borderRadius: radius.md,
        },
        text: {
          fontSize: typography.base,
        },
      };

    default:
      return {
        container: {
          paddingVertical: spacing.sm,
          paddingHorizontal: spacing.md,
          borderRadius: radius.lg,
        },
        text: {
          fontSize: typography.lg,
        },
      };
  }
};

/* ---------------- BASE ---------------- */

const styles = StyleSheet.create({
  base: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "500",
  },
});

export default Button;
