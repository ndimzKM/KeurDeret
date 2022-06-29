import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const VerifyAccount = () => {
  return (
    <View>
      <Image
        source={require("../assets/verify.png")}
        style={{ width: 100, height: 100, }}
      />
      <Text>Verification</Text>
      <Text>You will get a OTP vai SMS</Text>
      <TouchableOpacity style={{borderTopWidth: 0.2,borderBottomWidth: 0.2,borderRightWidth: 0.2,borderLeftWidth: 0.2}}>
        <Text style={{textAlign: "center"}}>hooo</Text>
      </TouchableOpacity>
      {/* GG */}
      <TouchableOpacity style={{borderTopWidth: 0.2,borderBottomWidth: 0.2,borderRightWidth: 0.2,borderLeftWidth: 0.2}}>
        <Text style={{textAlign: "center",}}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default VerifyAccount;
