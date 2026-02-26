import { useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Theme";
import recentlyAdded from "../mock/recent-data";

export default function RecentlyAdded() {
  const router = useRouter();
  return (
    <View className="flex-col gap-4  mt-10">
      <View
        className="flex-row items-center border-b pb-2 mx-5"
        style={{ borderColor: Colors.border }}
      >
        <Text
          className="text-xs font-semibold tracking-widest"
          style={{ color: Colors.text }}
        >
          RECENTLY ADDED
        </Text>
      </View>
      <FlatList
        data={recentlyAdded}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginLeft: 20,
          paddingBottom: 12,
          paddingRight: 20,
        }}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />} // spacing between cards
        renderItem={({ item }) => (
          <>
            {/* <TouchableOpacity onPress={() => router.push("/memory-archive/[id]")}> */}
            <TouchableOpacity
              onPress={() => router.push(`/memory-archive/${item.id}`)}
            >
              <View
                className="w-[150px] h-[250px] rounded-3xl p-5 justify-end"
                style={{ backgroundColor: Colors.secondaryBackground }}
              >
                <Text
                  className="flex text-lg font-semibold text-left"
                  style={{ color: Colors.textLight }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
}
