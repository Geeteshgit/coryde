import { IonIconName } from "../types/icons.types";

type Tab = {
  name: string;
  title: string;
  activeIcon: IonIconName;
  inactiveIcon: IonIconName;
};

export const TABS: Tab[] = [
  {
    name: "index",
    title: "Home",
    activeIcon: "home",
    inactiveIcon: "home-outline",
  },
  {
    name: "my-rides",
    title: "My Rides",
    activeIcon: "car-sport",
    inactiveIcon: "car-sport-outline",
  },
  {
    name: "chats",
    title: "Chats",
    activeIcon: "chatbubbles",
    inactiveIcon: "chatbubbles-outline",
  },
  {
    name: "profile",
    title: "Profile",
    activeIcon: "person",
    inactiveIcon: "person-outline",
  },
];
