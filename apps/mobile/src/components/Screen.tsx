import React from "react";
import { StyleSheet, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacing } from "@/src/theme";
import { useTheme } from "@/src/hooks/useTheme";
import ScreenHeader from "./ScreenHeader";

type ScreenProps = ViewProps & {
  children: React.ReactNode;
  title?: string;
};

const Screen = ({
  children,
  style,
  title,
}: ScreenProps) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
        style,
      ]}
    >
      {title && <ScreenHeader title={title} />}
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.md,
  },
});

export default Screen;
