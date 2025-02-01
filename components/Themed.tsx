/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from "react-native";

import Colors from "@/constants/Colors";

type ThemeProps = {
  color?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function useThemeColor(
  props: { color?: string },
  colorName: keyof typeof Colors,
) {
  const colorFromProps = props.color;

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[colorName];
  }
}

export function Text(props: TextProps) {
  const { style, color, ...otherProps } = props;
  const textColor = useThemeColor({ color }, "text");

  return <DefaultText style={[{ color: textColor }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, color, ...otherProps } = props;
  const backgroundColor = useThemeColor({ color }, "background");

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
