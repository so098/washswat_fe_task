import { StyleSheet, TextInput, Text } from "react-native";
import React from "react";
import FontSizes from "@/constants/FontSizes";

type TitleDisplayType = {
  isEdit: boolean;
  title: string;
  onChangeText: (title: string) => void;
  titleInputRef: React.RefObject<TextInput>;
};

export default function TitleDisplay({
  isEdit,
  title,
  onChangeText,
  titleInputRef,
}: TitleDisplayType) {
  return (
    <>
      {isEdit ? (
        <TextInput
          ref={titleInputRef}
          style={[styles.commonCardTitle, styles.cardTitleInput]}
          value={title}
          onChangeText={onChangeText}
        />
      ) : (
        <Text
          style={[styles.commonCardTitle, styles.cardTitle]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  commonCardTitle: {
    fontSize: FontSizes.large,
    flexShrink: 2,
    fontWeight: "bold",
  },
  cardTitle: {
    maxWidth: 200,
    flexShrink: 2,
  },
  cardTitleInput: {
    maxWidth: 300,
  },
});
