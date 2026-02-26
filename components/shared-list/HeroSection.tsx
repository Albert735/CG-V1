import React from "react";
import { Text, View } from "react-native";
import { Colors } from "../../constants/Theme";

interface HeroSectionProps {
  title: string;
  category: string;
  updatedInfo: string;
}

export function HeroSection({
  title,
  category,
  updatedInfo,
}: HeroSectionProps) {
  return (
    <View className="px-6 pb-2">
      <Text
        className="text-[11px] uppercase tracking-widest font-medium"
        style={{ color: Colors.primary }}
      >
        {category}
      </Text>
      <Text
        className="text-[32px] font-normal tracking-tighter mt-1"
        style={{ color: Colors.textLight }}
      >
        {title}
      </Text>
      <Text
        className="text-[11px] mt-2"
        style={{ color: Colors.textSecondary }}
      >
        {updatedInfo}
      </Text>
    </View>
  );
}
