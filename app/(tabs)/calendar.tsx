import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BaseCalendar from "../../components/base-calendar";
import HeaderNav from "../../components/header-nav";
import { Colors } from "../../constants/Theme";
import sharedEvents from "../../mock/events";

export default function CalendarScreen() {
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
    return { opacity };
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
        <BaseCalendar />

        <View className="mt-6 px-4">
          {/* Section Header */}
          <View
            style={{ borderColor: Colors.border }}
            className="flex-row justify-between border-b pb-2 mb-6"
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

          {/* Events List */}
          <FlatList
            data={sharedEvents}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                className="mb-4 rounded-2xl border p-4 bg-[#3D242E]"
                style={{ borderColor: Colors.border }}
              >
                <View className="flex-row items-center justify-between">
                  {/* Left */}
                  <View className="flex-row items-center gap-3 flex-1">
                    {/* Date badge */}
                    <View className="w-12 h-12 rounded-xl bg-[#512D33] items-center justify-center">
                      <Text className="text-white text-sm font-semibold">
                        {item.day ?? "--"}
                      </Text>
                      <Text className="text-white text-[10px] font-medium">
                        {item.month ?? "—"}
                      </Text>
                    </View>

                    {/* Event info */}
                    <View className="flex-1">
                      <Text
                        className="text-lg font-semibold"
                        style={{ color: Colors.textLight }}
                        numberOfLines={1}
                      >
                        {item.name}
                      </Text>

                      <View className="flex-row items-center gap-2 mt-1">
                        <Text
                          className="text-sm font-medium"
                          style={{ color: Colors.card.subtext }}
                        >
                          {item.time}
                        </Text>

                        {item.Location && (
                          <>
                            <Text style={{ color: Colors.card.subtext }}>
                              •
                            </Text>
                            <Text
                              className="text-sm font-medium"
                              style={{ color: Colors.card.subtext }}
                              numberOfLines={1}
                            >
                              {item.Location}
                            </Text>
                          </>
                        )}
                      </View>
                    </View>
                  </View>

                  {/* Right icon */}
                  <Feather
                    name="arrow-up-right"
                    size={18}
                    color={Colors.primary}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBarBg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  scrollContent: {
    paddingBottom: 120, // space for bottom tab bar
  },
});
