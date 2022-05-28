import { StyleSheet, View, Text, Image, TextInput, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

function Register() {
  return (
    <View style={styles.Register}>
      <Image source={require("../assets/blood.jpg")} style={styles.Image} />
      <View style={styles.contents}>
        <Text style={{ fontWeight: "bold" }}>Welcome to KeurDeret </Text>

        <View style={styles.signin}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Sign in</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{ paddingRight: 5, fontWeight: "bold", color: "blue" }}
            >
              Help
            </Text>
            <Entypo name="help-with-circle" size={24} color="blue" />
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ paddingBottom: 10 }}>Phone Number</Text>
          <TextInput style={styles.TextInput} placeholder="enter Number" />
        </View>
        <View>
          <TouchableOpacity style={{ paddingTop: 20 }}>
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
    </View>
  );
}
const styles = StyleSheet.create({
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
