import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import MemoDetailForm from "@/components/detailMemo/MemoDetailForm";

export default function DetailScreen() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const { memoList } = useSelector((state: RootState) => state.memoList);

  const memo = memoList.find((memo) => memo.id === id);

  useEffect(() => {
    if (!memo) return;

    navigation.setOptions({
      title: memo.title,
    });
  }, [memo, navigation]);

  if (!memo) {
    return <Text>{"메모가 없어요!"}</Text>;
  }

  return (
    <View style={styles.container}>
      <MemoDetailForm item={memo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
