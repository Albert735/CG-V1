import { Drawer } from "expo-router/drawer";
import { LogBox } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

import { Colors } from "../constants/Theme";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: Colors.background,
          },
          drawerActiveTintColor: Colors.primary,
          drawerInactiveTintColor: Colors.text,
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{ headerShown: false, drawerLabel: "Home", title: "Home" }}
        />
        <Drawer.Screen
          name="(no-tabs)/anniversary-page"
          options={{
            headerShown: false,
            drawerLabel: "Anniversary Page",
            title: "Anniversary Page",
          }}
        />
        <Drawer.Screen
          name="(no-tabs)/memory-archive/[id]"
          options={{
            headerShown: false,
            drawerLabel: "Memory Archive",
            title: "Memory Archive",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
