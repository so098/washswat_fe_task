import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import MemoItem from "@/components/MemoList/MemoItem";
import { removeMemo } from "@/store/slices/memoListSlice";
import FontSizes from "@/constants/FontSizes";

export default function HomeScreen() {
  const { memoList } = useSelector((state: RootState) => state.memoList);
  const dispatch = useDispatch();

  const handleDeleteItem = (id: string) => {
    dispatch(removeMemo(id));
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
        <TouchableOpacity style={styles.bottomButton}>
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
