import Anniversary from "@/components/anniversary";
import SharedLists from "@/components/shared-lists";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ActivityCard from "../../components/activity-card";
import HeaderNav from "../../components/header-nav";
import RecentlyAdded from "../../components/recently-added";
import { Colors } from "../../constants/Theme";

export default function Index() {
  const scrollY = useSharedValue(0);
  const insets = useSafeAreaInsets();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const headerBgStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, 50],
      [0, 1],
      Extrapolation.CLAMP,
    );
    return {
      opacity,
    };
  });

  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      <StatusBar style="light" />

      {/* Animated Status Bar Background */}
      <Animated.View
        style={[
          styles.statusBarBg,
          {
            height: insets.top,
            backgroundColor: Colors.secondaryBackground,
          },
          headerBgStyle,
        ]}
      />

      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <HeaderNav />
        <ActivityCard />
        <Anniversary />
        <SharedLists />
        <RecentlyAdded />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    gap: 20,
  },
  statusBarBg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  scrollContent: {
    paddingBottom: 110, // Extra padding for the absolute positioned tab bar
  },
});
