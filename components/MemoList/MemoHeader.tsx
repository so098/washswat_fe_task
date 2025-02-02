import { View, Text, StyleSheet } from "react-native";
import React from "react";
import utils from "@/utils";
import Colors from "@/constants/Colors";
import FontSizes from "@/constants/FontSizes";

type MemoItem = {
  title: string;
  createdAt: string;
};

export default function MemoHeader({ title, createdAt }: MemoItem) {
  return (
    <View style={styles.cardTitleContainer}>
      <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
      <Text style={styles.cardDate}>{utils.formatDate(createdAt)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardTitleContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    paddingBottom: 10,
  },
  cardTitle: {
    flexShrink: 2,
    fontSize: FontSizes.medium,
    maxWidth: 200,
    fontWeight: "bold",
    color: Colors.primary,
  },
  cardDate: {
    flexShrink: 0,
    color: Colors.tertiary,
    fontSize: FontSizes.xSmall,
  },
});
