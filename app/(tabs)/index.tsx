import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ActivityCard from "../../components/activity-card";
import HeaderNav from "../../components/header-nav";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <HeaderNav />
      <ActivityCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D1B24",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
