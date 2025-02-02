import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { createRef, useState } from "react";
import { MemoType, removeMemo, updateMemo } from "@/store/slices/memoListSlice";
import utils from "@/utils";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router";
import colors from "@/constants/Colors";
import TitleDisplay from "@/components/detailMemo/TitleDisplay";
import EditDeleteButtons from "@/components/detailMemo/EditDeleteButtons";
import FontSizes from "@/constants/FontSizes";

type DetailType = {
  item: MemoType;
};

export default function MemoDetailForm({ item }: DetailType) {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  const titleInputRef = createRef<TextInput>();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleDeleteOrCancelEdit = () => {
    if (!isEdit) {
      dispatch(removeMemo(item.id));
      router.back();

      return;
    }

    setTitle(item.title);
    setDescription(item.description);
    setIsEdit(false);
  };

  const handleToggleEdit = () => {
    if (isEdit) {
      dispatch(updateMemo({ id: item.id, title, description }));
      setIsEdit(false);

      return;
    }

    setIsEdit(true);
  };

  return (
    <View style={styles.cardContent}>
      <View style={styles.cardHeader}>
        <TitleDisplay
          isEdit={isEdit}
          title={title}
          onChangeText={setTitle}
          titleInputRef={titleInputRef}
        />
        <EditDeleteButtons
          isEdit={isEdit}
          onToggleEdit={handleToggleEdit}
          onDeleteOrCancelEdit={handleDeleteOrCancelEdit}
        />
      </View>
      <Text style={styles.cardDate}>{utils.formatDate(item.updatedAt)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContent: {
    width: "100%",
    padding: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardDate: {
    fontSize: FontSizes.small,
    color: colors.tertiary,
    marginLeft: "auto",
    marginTop: 30,
  },
});
