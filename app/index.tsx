import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import "react-native-get-random-values";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import MemoItem from "@/components/MemoList/MemoItem";
import { addMemos, MemoType, removeMemo } from "@/store/slices/memoListSlice";
import { v4 as uuidv4 } from "uuid";
import FontSizes from "@/constants/FontSizes";

export default function HomeScreen() {
  const flatListRef = useRef<FlatList>(null);
  const { memoList } = useSelector((state: RootState) => state.memoList);
  const memoListLengthRef = useRef<number>(memoList.length);
  const dispatch = useDispatch();

  useEffect(() => {
    if (memoList.length > memoListLengthRef.current) {
      onScrollToEnd();
    }

    memoListLengthRef.current = memoList.length;
  }, [memoList.length]);

  const handleDeleteItem = (id: string) => {
    dispatch(removeMemo(id));
  };

  const handleAddItem = () => {
    const newMemoId = uuidv4();

    const dummyMemo: MemoType = {
      id: newMemoId,
      title: "제목없음",
      description: "제목없음",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    dispatch(addMemos(dummyMemo));
  };

  const onScrollToEnd = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  const renderEmptyComponent = () => {
    return (
      <View>
        <Text style={styles.emptyText}>{"메모가 없어요!"}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FlatList
          ref={flatListRef}
          data={memoList}
          renderItem={({ item }) => (
            <MemoItem
              item={item}
              onDeletePress={() => handleDeleteItem(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={[
            styles.flatList,
            memoList.length === 0 && styles.emptyFlatList,
          ]}
          style={styles.flatListStyle}
          ListEmptyComponent={renderEmptyComponent}
        />
        <TouchableOpacity style={styles.bottomButton} onPress={handleAddItem}>
          <Text style={styles.buttonText}>{"추가"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  content: {
    flex: 1,
    position: "relative",
  },
  bottomButton: {
    backgroundColor: "black",
    borderRadius: 10,
    height: 70,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonText: {
    color: "white",
    fontSize: FontSizes.large,
  },
  flatList: {
    backgroundColor: "white",
    paddingBottom: 70,
  },
  emptyFlatList: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatListStyle: {
    marginBottom: 70,
  },
  emptyText: {
    fontSize: FontSizes.large,
    color: "black",
  },
});
