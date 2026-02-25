import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FD7F5C",
        tabBarInactiveTintColor: "#D4A5A2",
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#3D242E",
          borderTopWidth: 0,
          height: Platform.OS === "ios" ? 88 : 70,
          paddingBottom: Platform.OS === "ios" ? 30 : 12,
          paddingTop: 12,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="calendar" options={{ headerShown: false }} />
      <Tabs.Screen name="chat" options={{ headerShown: false }} />
    </Tabs>
  );
}
