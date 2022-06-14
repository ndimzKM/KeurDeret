import React from "react";
import { SafeAreaView, View, Text} from "react-native";
import COLORS from "../colors/colors";
import Button from "../components/Button";
import DetailInput from "../components/DetailInput";

const Registration = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: COLORS.white, flex: 1, paddingHorizontal: 10 }}>
      {/* <Image
        style={style.image}
        source={require("../blood-donation_istock.jpg")}
      /> */}
      <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: "bold" }}>
        Registration
      </Text>
      <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
        Enter your details to register.
      </Text>
      <View style={{ marginVertical: 20 }}>
        <DetailInput
          placeHolder="Enter your full name"
          iconName="account-outline"
          label="Full Name"
        />
        <DetailInput
          placeHolder="Enter your phone number"
          iconName="phone-outline"
          label="Phone Number"
        />
        <DetailInput
          placeHolder="Enter your email address"
          iconName="email-outline"
          label="Email"
        />
        <DetailInput
          placeHolder="Enter your email password"
          iconName="lock-outline"
          label="Password"
          password
        />
        <Button title={"Register"} />
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
    </View>
  );
};

// const style = StyleSheet.create({
//   image: {
//     flex: 1,
//     height: 200,
//   },
// });

export default Registration;
