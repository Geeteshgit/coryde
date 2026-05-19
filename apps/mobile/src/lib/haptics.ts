import * as Haptics from "expo-haptics";

export const haptics = {
  soft: () =>
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft),
  
  light: () =>
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),

  medium: () =>
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium),

  heavy: () =>
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy),

  success: () =>
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success),

  error: () =>
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error),
};