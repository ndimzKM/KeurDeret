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
        size={35}
        color="#fff"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  float: {
    // position: 'absolute',
    // paddingHorizontal: 8,
    // paddingVertical: 8,
    padding: 10,
    backgroundColor: "#D33F49",
    borderRadius: "50%",
    borderWidth: 3,
    borderColor: "#ECACB0",
    marginTop: -37.5,
    marginBottom: 10,
    shadowColor: "#D33F49",
shadowOffset: {
	width: 0,
	height: 0,
},
shadowOpacity: 0.50,
shadowRadius: 16,

elevation: 19,
  },
});

export default FloatingButton;
