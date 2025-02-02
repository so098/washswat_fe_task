import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

type CloseButtonType = {
  onDeletePress: () => void;
};

export default function CloseButton({ onDeletePress }: CloseButtonType) {
  return (
    <TouchableOpacity style={styles.closeButton} onPress={onDeletePress}>
      <AntDesign name="close" size={24} color="#c6c7c6" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    padding: 16,
    top: "50%",
    right: 0,
    transform: [{ translateY: "-50%" }],
  },
});
