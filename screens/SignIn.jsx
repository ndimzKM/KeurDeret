import React from "react";
import { View, StyleSheet, Image, Button } from "react-native";

const SignIn = (props) => {
  return (
    <View style={{flex: 1}}>
      <Image style={{height: 500, width: 300}} source={require("../assets/bg.png")} />
      <Button title='Hello'/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignIn;
