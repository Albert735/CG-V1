import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../constants/Theme";

export default function HeaderNav() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  // Function to manually toggle the drawer using the navigation dispatcher
  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    // Apply safe area inset for top padding to avoid status bar overlap
    <View style={[styles.header, { paddingTop: insets.top }]}>
      {/* Drawer menu toggle button */}
      <TouchableOpacity onPress={toggleDrawer} style={styles.iconButton}>
        <Ionicons name="menu" size={28} color={Colors.primary} />
        <Text className="text-xl font-bold ml-2 text-primary">US</Text>
      </TouchableOpacity>

      {/* Profile button - positioned at the opposite end via justifyContent: 'space-between' */}
      <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
        <View
          className="bg-secondary py-2 px-2.5 rounded-full border"
          style={{ borderColor: Colors.border }}
        >
          <Text className="text-lg font-light text-muted">JM</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    // This is what pushes the menu and profile icons to opposite sides
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: "transparent",
  },
  iconButton: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
