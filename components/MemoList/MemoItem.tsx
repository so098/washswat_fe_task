import { MemoType } from "@/store/slices/memoListSlice";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import FontSizes from "@/constants/FontSizes";
import CloseButton from "./CloseButton";
import MemoHeader from "./MemoHeader";

type ItemType = {
  item: MemoType;
  onDeletePress: () => void;
};

export default function MemoItem({ item, onDeletePress }: ItemType) {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push(`/memo/${item.id}`)}>
      <View style={styles.card}>
        <MemoHeader title={item.title} createdAt={item.createdAt} />
        <Text
          style={styles.cardDescription}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.description}
        </Text>
        <CloseButton onDeletePress={onDeletePress} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    height: 80,
    marginHorizontal: 16,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    flex: 1,
    position: "relative",
    justifyContent: "center",
  },
  cardDescription: {
    fontSize: FontSizes.small,
    color: Colors.secondary,
    fontWeight: "semibold",
    maxWidth: 300,
  },
});
