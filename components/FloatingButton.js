import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as actions from '../redux/actions'

const FloatingButton = () => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity style={styles.float} onPress={() => dispatch(actions.showModal())}>
      <MaterialCommunityIcons
        name="water-plus-outline"
        size={27}
        color="#fff"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  float: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: "#6e8cff",
    borderRadius: "50%",
    borderWidth: 3,
    borderColor: "#DBE2FF",
  },
});

export default FloatingButton;
