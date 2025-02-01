import React from "react";
import { Stack } from "expo-router";
import Colors from "@/constants/Colors";

export default function StackContainer() {
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
          title: `메모 리스트`,
        }}
      />
    </Stack>
  );
}
