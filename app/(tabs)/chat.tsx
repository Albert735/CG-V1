import { StyleSheet, Text, View } from "react-native";
import HeaderNav from "../../components/header-nav";

export default function Chat() {
    return (
        <View style={styles.container}>
            <HeaderNav />
            <View style={styles.content}>
                <Text>Chat</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});