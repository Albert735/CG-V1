import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Theme";

export default function SharedLists() {
  return (
    <View
      className="mx-5 mt-3 pt-6 border-b  "
      style={{ borderColor: Colors.border }}
    >
      <View className="flex-row justify-between items-center ">
        <Text
          className="text-sm font-medium tracking-wider"
          style={{ color: Colors.text }}
        >
          SHARED LISTS
        </Text>
        <TouchableOpacity>
          <Text
            className="text-sm font-medium tracking-wider"
            style={{ color: Colors.primary }}
          >
            VIEW ALL
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center gap-3 mt-4">
        {[1, 2, 3].map((item) => (
          <View
            key={item}
            className="w-12 h-12 rounded-2xl border"
            style={{
              backgroundColor: Colors.secondaryBackground,
              borderColor: Colors.border,
            }}
          />
        ))}
        <TouchableOpacity
          className="w-12 h-12 rounded-2xl border items-center justify-center"
          style={{
            backgroundColor: Colors.secondaryBackground,
            borderColor: Colors.border,
          }}
        >
          <Text
            style={{ color: Colors.primary, fontSize: 24, fontWeight: "300" }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
