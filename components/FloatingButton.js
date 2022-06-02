import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const FloatingButton = () => {
  return (
    <TouchableOpacity style={styles.float}>
      {/* <Ionicons name="md-person-add-outline" size={25} color="#fefefe" /> */}
      {/* <Ionicons name="md-add-sharp" size={30} color="#DBE2FF"/> */}
      <MaterialCommunityIcons name="water-plus-outline" size={27} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  float: {
    // position: "absolute",
    // bottom: 60,
    // left: 15,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: "#6e8cff",
    borderRadius: '50%',
    borderWidth: 3, borderColor: '#DBE2FF'
  },
});

export default FloatingButton;
