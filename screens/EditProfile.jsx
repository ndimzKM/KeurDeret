import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const profileImage = {
  uri: "https://picsum.photos/200",
  //uri: "https://api.multiavatar.com/Starcrasher.png",
};

const EditProfile = ({ navigation, route }) => {
  const navigateBackToProfile = () => {
    navigation.navigate("profile");
  };
  return (
    <View style={styles.container}>
      {/*===========================Header View===============================*/}
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={navigateBackToProfile}>
            <View
              style={{
                width: 60,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="arrow-back" size={24} color="white" />
            </View>
          </TouchableOpacity>
          <View style={{ paddingLeft: 80 }}>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              Edit Profile
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.avatar}>
        <Image source={profileImage} style={styles.profileImage} />
        <TouchableOpacity>
          <Text
            style={{
              paddingVertical: 5,
              fontWeight: "bold",
              color: "#880808",
            }}
          >
            Upload
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/*================================Form View=======================================*/}
        <View style={styles.form}>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ fontWeight: "bold", color: "gray" }}>Username</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ fontWeight: "bold", color: "gray" }}>Email</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ fontWeight: "bold", color: "gray" }}>
              Address/Location
            </Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ fontWeight: "bold", color: "gray" }}>
              Phone number
            </Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ fontWeight: "bold", color: "gray" }}>
              Google Map Code
            </Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ fontWeight: "bold", color: "gray" }}>
              Blood Group
            </Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ fontWeight: "bold", color: "gray" }}>Gender</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ fontWeight: "bold", color: "gray" }}>
              Date of birth
            </Text>
            <TextInput style={styles.input} />
          </View>

          {/*===================================Button View===================================*/}
          <TouchableOpacity>
            <View style={{ alignItems: "center", paddingVertical: 20 }}>
              <View style={styles.button}>
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
                >
                  Save Details
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#880808",
    height: 150,
  },
  avatar: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -40,
    //position: "absolute",
  },
  profileImage: {
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "white",
    width: 80,
    height: 80,
  },
  form: {
    paddingHorizontal: 20,
  },
  input: {
    height: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#880808",
    width: 310,
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EditProfile;
