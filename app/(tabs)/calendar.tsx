import Entypo from "@expo/vector-icons/Entypo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BaseCalendar from "../../components/base-calendar";
import HeaderNav from "../../components/header-nav";
import { Colors } from "../../constants/Theme";

export default function CalendarScreen() {
  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      <StatusBar style="light" />
      <HeaderNav />
      <View style={styles.content}>
        <BaseCalendar />

        <View
          style={{ borderColor: Colors.border }}
          className="flex-row justify-between mt-6 border-b pb-2"
        >
          <Text
            style={{ color: Colors.text }}
            className="text-sm font-medium tracking-wider"
          >
            UPCOMING SHARED DATES
          </Text>
          <View className="flex-row items-center gap-1">
            <Entypo name="plus" size={16} color={Colors.primary} />
            <Text
              style={{ color: Colors.primary }}
              className="text-sm font-medium tracking-wider"
            >
              ADD NEW
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
});
