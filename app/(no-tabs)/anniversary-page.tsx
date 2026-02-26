import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const MILESTONES = [
  {
    id: "1",
    date: "Oct 14, 2023",
    title: "Year Two: The Big Move",
    body: "Settled into our first apartment in the city.",
  },
  {
    id: "2",
    date: "Aug 12, 2022",
    title: "Road Trip to Big Sur",
    body: "That weekend under the stars.",
  },
  {
    id: "3",
    date: "Oct 14, 2021",
    title: "Where it all began",
    body: "First dinner at that tiny bistro.",
  },
];

const WISHLIST = [
  {
    id: "1",
    title: "New Espresso Machine",
    meta: "Added by Jess • 2 weeks ago",
    icon: "heart-outline" as const,
  },
  {
    id: "2",
    title: "Weekend Spa Retreat",
    meta: "Added by Mark • 1 month ago",
    icon: "briefcase-outline" as const,
  },
];

export default function AnniversaryScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#2D1B24]">
      <StatusBar style="light" />

      {/* Header */}
      <View className="flex-row items-center justify-between px-6 pt-14 pb-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-[#3D242E] border border-[rgba(212,165,162,0.2)] items-center justify-center"
        >
          <Ionicons name="arrow-back" size={20} color="#FFF1EB" />
        </TouchableOpacity>
        <Text className="text-[11px] uppercase tracking-widest text-[#D4A5A2] font-medium">
          Anniversary
        </Text>
        <View className="w-10" />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Hero Countdown */}
        <View className="px-6 pb-8">
          <View className="flex-row items-end gap-3 mb-2">
            <Text
              className="text-[#FF7F5C] font-normal"
              style={{ fontSize: 100, lineHeight: 150, letterSpacing: -5 }}
            >
              12
            </Text>
            <Text
              className="text-[#FFF1EB] font-normal"
              style={{ fontSize: 32, lineHeight: 35, letterSpacing: -1 }}
            >
              {"Days\nto go"}
            </Text>
          </View>
          <Text className="text-[15px] leading-relaxed text-[#D4A5A2]">
            Celebrating 3 beautiful years together on October 14, 2024.
          </Text>
        </View>

        {/* Divider */}
        <View className="h-px bg-[rgba(212,165,162,0.2)] mx-6 mb-8" />

        {/* Timeline */}
        <View className="px-6 mb-8">
          <Text className="text-[11px] uppercase tracking-widest text-[#D4A5A2] font-medium">
            Our Journey
          </Text>
          <View className="mt-4 pl-6 relative">
            {/* Vertical line */}
            <View className="absolute left-[3px] top-2 bottom-2 w-px bg-[rgba(212,165,162,0.2)]" />

            {MILESTONES.map((m) => (
              <View key={m.id} className="mb-7 relative">
                {/* Dot */}
                <View className="absolute -left-[27px] top-[6px] w-[7px] h-[7px] rounded-full bg-[#FF7F5C] border-2 border-[#2D1B24]" />
                <Text className="text-[11px] text-[#8C626F] mb-1">
                  {m.date}
                </Text>
                <Text className="text-[16px] text-[#FFF1EB] mb-0.5">
                  {m.title}
                </Text>
                <Text className="text-[15px] leading-relaxed text-[#D4A5A2]">
                  {m.body}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Wishlist */}
        <View className="px-6 mb-8">
          <View className="flex-row items-center justify-between">
            <Text className="text-[11px] uppercase tracking-widest text-[#D4A5A2] font-medium">
              Gift Wishlist
            </Text>
            <TouchableOpacity>
              <Text className="text-[11px] uppercase tracking-widest text-[#FF7F5C] font-medium">
                Edit
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mt-4">
            {WISHLIST.map((w) => (
              <View
                key={w.id}
                className="flex-row items-center gap-4 bg-[#3D242E] rounded-xl p-4 mb-3 border border-[rgba(212,165,162,0.2)]"
              >
                <View className="w-12 h-12 rounded-lg bg-[#2D1B24] items-center justify-center">
                  <Ionicons name={w.icon} size={20} color="#8C626F" />
                </View>
                <View>
                  <Text className="text-[15px] text-[#FFF1EB] mb-0.5">
                    {w.title}
                  </Text>
                  <Text className="text-[12px] text-[#8C626F]">{w.meta}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* CTA Card */}
        <View className="mx-6 bg-[#FFD6C2] rounded-[28px] p-8">
          <Text className="text-[11px] uppercase tracking-widest text-[#2D1B24] font-medium mb-2">
            Next Steps
          </Text>
          <Text
            className="text-[#2D1B24] font-normal"
            style={{ fontSize: 24, letterSpacing: -0.5 }}
          >
            Plan Something Special
          </Text>
          <Text className="text-[15px] leading-relaxed text-[#2D1B24] opacity-80 mt-2">
            Make our 3rd year unforgettable with a surprise booking.
          </Text>
          <TouchableOpacity
            activeOpacity={0.85}
            className="flex-row items-center justify-between bg-[#2D1B24] px-5 py-4 rounded-full mt-6"
          >
            <Text className="text-[15px] font-medium text-[#FFD6C2]">
              Book Experiences
            </Text>
            <Ionicons name="arrow-forward" size={18} color="#FFD6C2" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
