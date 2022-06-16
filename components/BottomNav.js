import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import FloatingButton from "./FloatingButton";

const BottomNav = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.BottomIcons}>
        <TouchableOpacity>
          <AntDesign
            style={{ marginLeft: 15 }}
            name="home"
            size={24}
            color="#6e8cff"
          />
        </TouchableOpacity>

        <FloatingButton/>

        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons
            name="menu"
            size={24}
            color="#d0d0de"
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BottomIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
    paddingVertical: 7.5,
  },   

  main: {
backgroundColor: '#000'
  }
});

export default BottomNav;