import { useTheme } from "@/src/hooks/useTheme";
import { spacing, typography } from "@coryde/design-tokens";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
} from "react-native";

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
};

export function Input({ label, error, editable = true, ...props }: InputProps) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, { color: colors.foreground }]}>
          {label}
        </Text>
      )}

      <TextInput
        editable={editable}
        placeholderTextColor={colors.mutedForeground}
        style={[
          styles.input,
          {
            backgroundColor: colors.input,
            color: colors.foreground,
            borderColor: colors.ring,
          },
          error && styles.inputError,
          !editable && styles.disabledInput,
        ]}
        {...props}
      />

      {error && (
        <Text style={[styles.errorText, { color: colors.destructive }]}>
          {error}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },

  label: {
    fontSize: typography.sm,
    fontWeight: "500",
  },

  input: {
    height: 48,
    width: "100%",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
  },

  inputError: {
    borderColor: "#EF4444",
  },

  disabledInput: {
    backgroundColor: "#F3F4F6",
    opacity: 0.5,
  },

  errorText: {
    fontSize: 12,
  },
});
