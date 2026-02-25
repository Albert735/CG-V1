import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HeaderNav from "../../components/header-nav";

export default function Chat() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <HeaderNav />
      <View style={styles.content}>
        <Text style={styles.text}>Chat</Text>
      </View>
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
  text: {
    color: "#D4A5A2",
    fontSize: 18,
  },
});
