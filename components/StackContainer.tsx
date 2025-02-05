import React from "react";
import { Stack } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Colors from "@/constants/Colors";

export default function StackContainer() {
  const memoListLength = useSelector(
    (state: RootState) => state.memoList.memoList.length,
  );

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: `메모 리스트 (${memoListLength})`,
        }}
      />
    </Stack>
  );
}
