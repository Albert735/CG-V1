import { Drawer } from "expo-router/drawer";
import { LogBox } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";



LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
      </Drawer>
    </GestureHandlerRootView>

  );
}
