import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { Colors } from "../../constants/Theme";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.tabBar.active,
        tabBarInactiveTintColor: Colors.tabBar.inactive,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.tabBar.background,
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
        tabBarItemStyle: {
          flex: 1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="calendar"
        options={{
          headerShown: false,
          title: "Calendar",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-clear-outline" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          headerShown: false,
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubble-outline" size={28} color={color} />
          ),
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: "#FD7F5C",
            color: "white",
          },
        }}
      />

      <Tabs.Screen
        name="extra-pages/[id]"
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarItemStyle: { display: "none" }, // fully removes it from layout
        }}
      />
    </Tabs>
  );
}
