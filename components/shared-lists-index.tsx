import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Theme";
import sharedList from "../mock/shared-list-data";

export default function SharedLists() {
  return (
    <View className="mx-5 mt-4 pt-6 pb-3">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4">
        <Text
          className="text-xs font-semibold tracking-widest"
          style={{ color: Colors.text }}
        >
          SHARED LISTS
        </Text>
        <TouchableOpacity className="px-2 py-1">
          <Text
            className="text-xs font-semibold tracking-widest"
            style={{ color: Colors.primary }}
          >
            VIEW ALL
          </Text>
        </TouchableOpacity>
      </View>

      {/* Shared Lists */}
      <FlatList
        data={sharedList}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push(item.link as any)}>
            <View
              className="flex-row items-center justify-between border-b  pb-2 my-2"
              style={{ borderColor: Colors.border }}
            >
              {/* Left Content */}
              <View className="flex-1 pr-3">
                <Text
                  className="text-[18px] font-medium"
                  style={{ color: Colors.textLight }}
                >
                  {item.name}
                </Text>

                <View className="flex-row items-center gap-2 mt-1">
                  <Text
                    className="text-sm font-medium"
                    style={{ color: Colors.text }}
                  >
                    {item.items} items
                  </Text>
                  <Text
                    className="text-sm font-medium"
                    style={{ color: Colors.text }}
                  >
                    •
                  </Text>
                  <Text
                    className="text-sm font-medium"
                    style={{ color: Colors.text }}
                  >
                    updated {item.time}
                  </Text>
                </View>
              </View>

              {/* Right Icon */}
              <Feather name="arrow-up-right" size={20} color={Colors.primary} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
