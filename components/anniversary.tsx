import Feather from "@expo/vector-icons/Feather";
import { Text, View } from "react-native";
import { Colors } from "../constants/Theme";

export default function Anniversary() {
  return (
    <View
      className="mx-5 mt-6 pt-6 border-t"
      style={{ borderColor: Colors.border }}
    >
      {/* Top Row */}
      <View className="flex-row items-center justify-between mb-4">
        <Text
          className="text-sm font-medium tracking-wider"
          style={{ color: Colors.textSecondary }}
        >
          ANNIVERSARY
        </Text>
        <Text
          className="text-sm font-medium tracking-wider"
          style={{ color: Colors.textSecondary }}
        >
          OCT 14
        </Text>
      </View>

      {/* Big Number Row */}
      <View className="items-start">
        {/* Number Row */}
        <View className="flex-row items-start gap-3">
          <Feather name="arrow-up-right" size={40} color={Colors.primary} />
          <Text
            className="text-[64px] leading-[64px] font-normal"
            style={{ color: Colors.primary }}
          >
            12
          </Text>
        </View>

        {/* Caption */}
        <Text
          className="text-base mt-1"
          style={{ color: Colors.textSecondary }}
        >
          Days till our third year.
        </Text>
      </View>
    </View>
  );
}
