import { View, Text } from "react-native";
import React from "react";

const COLORS = {
  like: "#00eda6",
  nope: "#ff006f",
};
const white = "#fff";
const Choice = ({ type, value }) => {
  const color = COLORS[value];
  return (
    <View
      style={{
        borderWidth: 7,
        paddingHorizontal: 15,
        borderRadius: 80,
        backgroundColor: color,
        borderColor: color,
      }}
    >
      <Text
        style={{
          fontSize: 48,
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: 4,
          color: white,
        }}
      >
        {type}
      </Text>
    </View>
  );
};

export default Choice;
