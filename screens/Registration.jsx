import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import COLORS from "../colors/colors";
import Button from "../components/Button";
import DetailInput from "../components/DetailInput";

const Registration = ({ navigation }) => {
  const [inputFields, setInputFields] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    bloodGroup: "",
  });
  return (
    <SafeAreaView
      style={{ backgroundColor: COLORS.white, flex: 1, paddingHorizontal: 10 }}
    >
      <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: "bold" }}>
        Registration
      </Text>
      <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
        Enter your details to register.
      </Text>
      <View style={{ marginVertical: 20 }}>
        <DetailInput
          placeHolder="Enter your full name"
          inputType="firstName"
          inputFields={inputFields}
          setInputFields={setInputFields}
        />
        <DetailInput
          placeHolder="Enter your phone number"
          inputType="lastName"
          inputFields={inputFields}
          setInputFields={setInputFields}
        />
        <DetailInput
          placeHolder="Enter your email address"
          inputType="address"
          inputFields={inputFields}
          setInputFields={setInputFields}
        />
        <DetailInput
          placeHolder="Enter your email password"
          inputType="phoneNumber"
          inputFields={inputFields}
          setInputFields={setInputFields}
        />
        <DetailInput
          placeHolder="Enter your blood group"
          inputType="bloodGroup"
          inputFields={inputFields}
          setInputFields={setInputFields}
        />
        <Button
          title={"Register"}
          onPress={() => navigation.navigate("Main")}
        />
        <Text
          // to return to login screen on press
          onPress={() => navigation.navigate("Register")}
          style={{
            color: COLORS.black,
            textAlign: "center",
            fontSize: 16,
            paddingTop: 5,
          }}
        >
          Already have an account? Log in
        </Text>
      </View>
    </SafeAreaView>
  );
};

// const style = StyleSheet.create({
//   image: {
//     flex: 1,
//     height: 200,
//   },
// });

export default Registration;
