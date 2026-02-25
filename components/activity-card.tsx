import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Theme";

const ActivityCard = () => {
  return (
    <View className="bg-[#FED6C2] mx-5 mb-4 p-8 rounded-[40px] h-[340px] justify-between">
      <View>
        {/* Badge */}
        <View className="flex-row items-center gap-2 bg-[#FEDECE] px-3 py-1.5 rounded-full border border-[#E8CBBC] self-start">
          <View
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: Colors.primary }}
          />
          <Text
            className="text-xs font-semibold"
            style={{ color: Colors.card.text }}
          >
            FRIDAY NIGHT
          </Text>
        </View>

        {/* Title */}
        <Text
          className="text-[32px] leading-[40px] font-normal mt-6"
          style={{ color: Colors.card.text }}
        >
          Dinner at{"\n"}
          Osteria, 8pm
        </Text>
      </View>

      <View>
        {/* Divider */}
        <View className="h-px bg-[#E8CBBC] mb-6" />

        {/* Footer */}
        <View className="flex-row items-center justify-between">
          <View>
            <Text
              className="text-xs mb-1"
              style={{ color: Colors.card.subtext }}
            >
              Location
            </Text>
            <Text
              className="text-base font-medium"
              style={{ color: Colors.card.text }}
            >
              Downtow District
            </Text>
          </View>

          <TouchableOpacity className="bg-white/50 p-3 rounded-full">
            <Feather name="arrow-up-right" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActivityCard;
