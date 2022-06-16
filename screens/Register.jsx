import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

function Register({ navigation }) {
  const [number, setNumber] = useState(null);
  const signin = () => {
    setNumber(number);
    console.log(number);
  };
  return (
    <View style={styles.Register}>
      <Image source={require("../assets/blood.jpg")} style={styles.Image} />
      <ScrollView>
        <View style={styles.contents}>
          <Text style={{ fontWeight: "bold" }}>Welcome to KeurDeret </Text>

          <View style={styles.signin}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Sign in</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{ paddingRight: 5, fontWeight: "bold", color: "blue" }}
                >
                  Help
                </Text>

                <Entypo name="help-with-circle" size={24} color="blue" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ paddingBottom: 10, fontWeight: "bold" }}>
              Phone Number
            </Text>
            <TextInput
              style={styles.TextInput}
              placeholder="enter number"
              onChangeText={setNumber}
              value={number}
              keyboardType="phone-pad"
            />
          </View>
          <View>
            <TouchableOpacity
              style={{ paddingTop: 20 }}
              onPress={() => navigation.replace("Main")}
            >
              <View style={styles.Button}>
                <Text
                  style={{
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  Sign in
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  Register: {
    flex: 1,
  },
  contents: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  Image: {
    width: "100%",
    height: "60%",
  },

  welcome: {
    margin: 20,
  },
  signin: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  TextInput: {
    borderColor: "gray",
    borderWidth: 1,
    height: 40,
    paddingLeft: 5,
    fontSize: 20,
  },
  Button: {
    borderWidth: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    borderRadius: 5,
  },
});

export default Register;
