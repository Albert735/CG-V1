import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/Theme";

interface Participant {
  name: string;
  avatarBg: string;
  avatarColor: string;
}

interface ListHeaderProps {
  title: string;
  participants: Participant[];
}

export function ListHeader({ title, participants }: ListHeaderProps) {
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-6 pt-14 pb-4">
      <TouchableOpacity
        className="flex-row items-center gap-[6px]"
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={20} color={Colors.textSecondary} />
        <Text
          className="text-md font-semibold"
          style={{ color: Colors.textSecondary }}
        >
          {title}
        </Text>
      </TouchableOpacity>

      <View className="flex-row items-center">
        {participants.map((p, index) => (
          <View
            key={p.name}
            className="w-10 h-10 rounded-full items-center justify-center -ml-3"
            style={{
              backgroundColor: p.avatarBg,
              borderWidth: 2,
              borderColor: Colors.background, // creates visible separation
              zIndex: participants.length - index,
            }}
          >
            <Text
              style={{
                color: p.avatarColor,
                fontSize: 14,
                letterSpacing: 0.5,
              }}
            >
              {p.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
