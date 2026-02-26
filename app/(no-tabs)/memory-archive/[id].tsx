import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const MEMORY = {
  mood: "Serene",
  location: "California Coast",
  title: "Big Sur",
  date: "September 14, 2023",
  capturedBy: "Jamie & Alex",
  heroImage:
    "https://images.unsplash.com/photo-1508103137909-002760a92f02?auto=format&fit=crop&q=80&w=800",
  notes: [
    {
      id: "1",
      author: "Jamie",
      dotColor: "#FF7F5C",
      text: "The fog rolling over the cliffs was magic. I don't think I've ever felt more at peace than sitting on that driftwood with you.",
    },
    {
      id: "2",
      author: "Alex",
      dotColor: "#D4A5A2",
      text: "Found that tiny coffee shop in the woods afterwards. Best espresso of the trip.",
    },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=60&w=200",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=60&w=200",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=60&w=200",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=60&w=200",
  ],
};

export default function MemoryDetailScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#2D1B24]">
      <StatusBar style="light" />

      {/* Header */}
      <View className="flex-row items-center justify-between px-6 pt-14 pb-3">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 items-center justify-center"
        >
          <Ionicons name="arrow-back" size={24} color="#D4A5A2" />
        </TouchableOpacity>
        <Text className="text-[11px] uppercase tracking-widest text-[#D4A5A2] font-medium">
          Memory Archive
        </Text>
        <TouchableOpacity className="w-10 h-10 items-center justify-center">
          <Ionicons name="ellipsis-vertical" size={20} color="#D4A5A2" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Hero Image */}
        <View className="mx-4 h-[420px] rounded-[28px] overflow-hidden shadow-2xl">
          <Image
            source={{ uri: MEMORY.heroImage }}
            className="absolute inset-0 w-full h-full"
            resizeMode="cover"
          />
          {/* Gradient overlay */}
          <View className="absolute inset-0">
            <View className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#2D1B24cc] to-transparent" />
          </View>

          {/* Mood tag */}
          <View className="absolute top-5 right-5 bg-[rgba(255,214,194,0.9)] px-4 py-1.5 rounded-full">
            <Text className="text-[11px] font-semibold uppercase tracking-wider text-[#2D1B24]">
              {MEMORY.mood}
            </Text>
          </View>

          {/* Hero info */}
          <View className="absolute bottom-7 left-7 right-7">
            <Text className="text-[11px] uppercase tracking-widest text-[rgba(255,241,235,0.7)] font-medium">
              {MEMORY.location}
            </Text>
            <Text
              className="text-[#FFF1EB] font-normal mt-1"
              style={{ fontSize: 42, letterSpacing: -1.5, lineHeight: 46 }}
            >
              {MEMORY.title}
            </Text>
          </View>
        </View>

        {/* Content */}
        <View className="px-6 pt-8">
          {/* Meta */}
          <View className="flex-row justify-between items-start mb-8">
            <View>
              <Text className="text-[11px] uppercase tracking-widest text-[#D4A5A2] font-medium">
                Date
              </Text>
              <Text className="text-[15px] text-[#FFF1EB] mt-1">
                {MEMORY.date}
              </Text>
            </View>
            <View className="items-end">
              <Text className="text-[11px] uppercase tracking-widest text-[#D4A5A2] font-medium">
                Captured By
              </Text>
              <Text className="text-[15px] text-[#FFF1EB] mt-1">
                {MEMORY.capturedBy}
              </Text>
            </View>
          </View>

          {/* Divider */}
          <View className="h-px bg-[rgba(212,165,162,0.2)] mb-6" />

          {/* Notes */}
          <Text className="text-[11px] uppercase tracking-widest text-[#D4A5A2] font-medium mb-4">
            Couple's Notes
          </Text>

          {MEMORY.notes.map((note) => (
            <View
              key={note.id}
              className="bg-[#3D242E] border border-[rgba(212,165,162,0.2)] rounded-[20px] p-6 mb-4"
            >
              <View className="flex-row items-center gap-2.5 mb-4">
                <View
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: note.dotColor }}
                />
                <Text className="text-[11px] uppercase tracking-widest text-[#FFF1EB] font-medium">
                  {note.author}
                </Text>
              </View>
              <Text className="text-[16px] leading-relaxed text-[#D4A5A2] italic">
                {note.text}
              </Text>
            </View>
          ))}

          {/* Divider */}
          <View className="h-px bg-[rgba(212,165,162,0.2)] mt-2 mb-6" />

          {/* Gallery */}
          <Text className="text-[11px] uppercase tracking-widest text-[#D4A5A2] font-medium mb-4">
            Gallery
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 12 }}
          >
            {MEMORY.gallery.map((uri, i) => (
              <TouchableOpacity key={i} activeOpacity={0.8}>
                <Image
                  source={{ uri }}
                  className="w-[100px] h-[100px] rounded-xl opacity-70"
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
