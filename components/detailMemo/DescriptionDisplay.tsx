import { ScrollView, TextInput, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "@/constants/Colors";
import FontSizes from "@/constants/FontSizes";

type DescriptionDisplayType = {
  isEdit: boolean;
  description: string;
  onChangeDescription: (description: string) => void;
};

export default function DescriptionDisplay({
  isEdit,
  description,
  onChangeDescription,
}: DescriptionDisplayType) {
  return (
    <ScrollView>
      {isEdit ? (
        <TextInput
          style={[styles.commonDescription, styles.cardDescriptionInput]}
          value={description}
          onChangeText={onChangeDescription}
          multiline
        />
      ) : (
        <Text style={[styles.commonDescription, styles.cardDescription]}>
          {description}
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  commonDescription: {
    fontSize: FontSizes.medium,
    color: colors.secondary,
    lineHeight: 25,
  },
  cardDescription: {
    paddingTop: 3,
    lineHeight: 25,
  },
  cardDescriptionInput: {
    paddingTop: 0,
    margin: 0,
    borderWidth: 0,
    borderColor: "transparent",
    backgroundColor: "transparent",
    height: 200,
  },
});
