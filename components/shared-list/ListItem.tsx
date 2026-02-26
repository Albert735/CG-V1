import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/Theme";

interface ListItemProps {
  id: string;
  text: string;
  checked: boolean;
  addedBy: string;
  avatarBg: string;
  avatarColor: string;
  onToggle: (id: string) => void;
}

export function ListItem({
  id,
  text,
  checked,
  addedBy,
  avatarBg,
  avatarColor,
  onToggle,
}: ListItemProps) {
  return (
    <TouchableOpacity
      className="flex-row items-center py-[18px] border-b border-white/10"
      onPress={() => onToggle(id)}
      activeOpacity={0.7}
    >
      <View
        className={`w-[22px] h-[22px] rounded-md border-[1.5px] items-center justify-center mr-4 ${
          checked ? "" : "border-white/20"
        }`}
        style={
          checked
            ? { backgroundColor: Colors.primary, borderColor: Colors.primary }
            : {}
        }
      >
        {checked && <Ionicons name="checkmark" size={14} color="#fff" />}
      </View>
      <Text
        className={`flex-1 text-base ${checked ? "line-through" : ""}`}
        style={{ color: checked ? Colors.textSecondary : Colors.textLight }}
      >
        {text}
      </Text>
      <View
        className="w-5 h-5 rounded-full items-center justify-center opacity-70"
        style={{ backgroundColor: avatarBg }}
      >
        <Text className="text-[8px] font-bold" style={{ color: avatarColor }}>
          {addedBy}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
