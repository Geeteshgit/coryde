import type { IonIconName } from "../types/icons.types";

export type ProfileMenuItem = {
  title: string;
  icon: IonIconName;
  details: boolean;
  content?: string;
  route?: string;
};

export const DETAILS_ITEMS: ProfileMenuItem[] = [
  {
    title: "Name",
    icon: "person-outline",
    details: true,
    content: "John Doe",
  },
  {
    title: "Email",
    icon: "mail-outline",
    details: true,
    content: "john.doe@example.com",
  },
  {
    title: "Phone",
    icon: "call-outline",
    details: true,
    content: "123-456-7890",
  },
  {
    title: "Date of Birth",
    icon: "person-outline",
    details: true,
  },
  {
    title: "Bio",
    icon: "document-text-outline",
    details: true,
  },
];

export const SETTINGS_ITEMS: ProfileMenuItem[] = [
  {
    title: "Theme",
    icon: "color-palette-outline",
    details: false,
    route: "/profile/theme",
  },
  {
    title: "Notifications",
    icon: "notifications-outline",
    details: false,
    route: "/profile/notifications",
  },
];

export const INFO_ITEMS: ProfileMenuItem[] = [
  {
    title: "Privacy Policy",
    icon: "shield-checkmark-outline",
    details: false,
    route: "/profile/privacy",
  },
  {
    title: "Help & Support",
    icon: "help-circle-outline",
    details: false,
    route: "/profile/help",
  },
  {
    title: "About",
    icon: "information-circle-outline",
    details: false,
    route: "/profile/about",
  },
];
