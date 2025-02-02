import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "@/constants/Colors";

type EditDeleteButtonsType = {
  isEdit: boolean;
  onToggleEdit: () => void;
  onDeleteOrCancelEdit: () => void;
};

export default function EditDeleteButtons({
  isEdit,
  onToggleEdit,
  onDeleteOrCancelEdit,
}: EditDeleteButtonsType) {
  return (
    <View style={styles.actionButtonsContainer}>
      <Text style={styles.actionButtonLeft} onPress={onToggleEdit}>
        {isEdit ? "수정" : "편집"}
      </Text>
      <Text style={styles.actionButtonRight} onPress={onDeleteOrCancelEdit}>
        {isEdit ? "취소" : "삭제"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  actionButtonsContainer: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  actionButtonLeft: {
    color: colors.link,
    paddingRight: 5,
  },
  actionButtonRight: {
    color: colors.link,
    paddingLeft: 5,
  },
});
