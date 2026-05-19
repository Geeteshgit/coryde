import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { spacing, typography } from "@/src/theme";
import { useTheme } from "@/src/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { haptics } from "../lib/haptics";

type ScreenHeaderProps = {
  title: string;
};

const ScreenHeader = ({ title }: ScreenHeaderProps) => {
  const { colors } = useTheme();
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          router.canGoBack() && router.back();
          haptics.light();
        }}
      >
        <Ionicons name="chevron-back" size={24} color={colors.foreground} />
      </Pressable>
      <Text style={[styles.title, { color: colors.foreground }]}>{title}</Text>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },
  title: {
    position: "absolute",
    left: 56,
    right: 56,
    textAlign: "center",
    fontSize: typography.lg,
    fontWeight: "500",
  },
});
