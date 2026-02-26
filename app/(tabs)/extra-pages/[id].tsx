import { AddItemInput } from "@/components/shared-list/AddItemInput";
import { HeroSection } from "@/components/shared-list/HeroSection";
import { ListHeader } from "@/components/shared-list/ListHeader";
import { ListItem } from "@/components/shared-list/ListItem";
import { Colors } from "@/constants/Theme";
import sharedListData from "@/mock/shared-list-data";
import initialItemsMap from "@/mock/shared-list-items";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, useState } from "react";
import { ScrollView, View } from "react-native";

interface ListItemType {
  id: string;
  text: string;
  checked: boolean;
  addedBy: string;
  avatarBg: string;
  avatarColor: string;
}

const PARTICIPANTS = [
  {
    name: "JM",
    avatarBg: Colors.secondaryBackground,
    avatarColor: Colors.textSecondary,
  },
  {
    name: "SH",
    avatarBg: Colors.secondaryBackground,
    avatarColor: Colors.textSecondary,
  },
];

export default function ListScreen() {
  const { id } = useLocalSearchParams();
  const listId = typeof id === "string" ? id : Array.isArray(id) ? id[0] : "1";

  const [items, setItems] = useState<ListItemType[]>(
    initialItemsMap[listId] || [],
  );
  const [newItem, setNewItem] = useState("");

  // Update items when the list ID changes (e.g. during navigation)
  useEffect(() => {
    setItems(initialItemsMap[listId] || []);
  }, [listId]);

  const listInfo = useMemo(() => {
    return (
      sharedListData.find((l) => l.id.toString() === listId) ||
      sharedListData[0]
    );
  }, [listId]);

  const toggleItem = (itemId: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const addItem = () => {
    if (!newItem.trim()) return;
    setItems((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text: newItem.trim(),
        checked: false,
        addedBy: "JM",
        avatarBg: "#F2EBE5/12",
        avatarColor: "#8C6A64",
      },
    ]);
    setNewItem("");
  };

  return (
    <View className="flex-1" style={{ backgroundColor: Colors.background }}>
      <StatusBar style="light" />

      <ListHeader title="Lists" participants={PARTICIPANTS} />

      <HeroSection
        title={listInfo.name}
        category="Shared List"
        updatedInfo={`Updated ${listInfo.time} by Sarah`}
      />

      <ScrollView
        className="flex-1 px-6 mt-2"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {items.map((item) => (
          <ListItem key={item.id} {...item} onToggle={toggleItem} />
        ))}

        <AddItemInput
          value={newItem}
          onChangeText={setNewItem}
          onSubmit={addItem}
        />
      </ScrollView>
    </View>
  );
}
