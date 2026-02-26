import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";
import { Colors } from "../../constants/Theme";

interface AddItemInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
}

export function AddItemInput({
  value,
  onChangeText,
  onSubmit,
}: AddItemInputProps) {
  return (
    <View className="flex-row items-center py-4">
      <Ionicons
        name="add"
        size={22}
        color={Colors.primary}
        style={{ marginRight: 16 }}
      />
      <TextInput
        className="flex-1 text-base"
        style={{ color: Colors.textLight }}
        placeholder="Add an item..."
        placeholderTextColor={Colors.textSecondary}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        returnKeyType="done"
      />
    </View>
  );
}
