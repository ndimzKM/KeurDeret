import React from "react";
import { TouchableOpacity } from "react-native";
import COLORS from "../colors/colors";
const Button = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        width: "100%",
        backgroundColor: COLORS.blue,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, fontWeight: "bold", fontSize: 18 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
