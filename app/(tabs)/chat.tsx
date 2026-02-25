import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HeaderNav from "../../components/header-nav";
import { Colors } from "../../constants/Theme";

export default function Chat() {
  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      <StatusBar style="light" />
      <HeaderNav />
      <View style={styles.content}>
        <Text style={[styles.text, { color: Colors.textSecondary }]}>Chat</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
