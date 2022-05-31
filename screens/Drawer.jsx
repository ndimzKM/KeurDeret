import {
  TouchableOpacity,
  Platform,
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const Icon = ({ iconName, text }) => {
  return (
    <View style={{ paddingVertical: 15, paddingStart: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome5 name={iconName} size={22} color="#333847" />
        <Text style={{ paddingLeft: 30, fontSize: 15, color: "#2B363B" }}>
          {text}
        </Text>
      </View>
    </View>
  );
};

const DrawerContent = ({ props, navigation }) => {
  const [selected, setSelected] = useState("profile");
  return (
    <View style={styles.container} {...props}>
      <View style={styles.top}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingEnd: 20,
            paddingVertical: 15,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.closeDrawer()}
            style={styles.hideDrawerbutton}
          >
            <FontAwesome5 name="arrow-left" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.profile}>
          <Image
            style={styles.image}
            source={{ uri: "https://masterchier-card.herokuapp.com/img/5.jpg" }}
          />
          <View
            style={{
              paddingStart: 10,
              flex: 1,
              justifyContent: "space-evenly",
            }}
          >
            <Text style={{ fontSize: 22, color: '#2B363B' }}>App Development</Text>
            <Text style={{ fontWeight: "200" }}>appdevelopment@hub.org</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Icon iconName="home" text="Dashboard" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          <Icon iconName="cog" text="Settings" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Notification");
          }}
        >
          <Icon iconName="bell" text="Notification" />
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Icon iconName="user" text="My Profile" />
        </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Icon iconName="question-circle" text="FAQ" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Icon iconName="exclamation-circle" text="About App" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon iconName="sign-out-alt" text="Logout" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "##edf6f9",
  },
  top: {},

  bottom: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#F0F5F9",
    paddingBottom: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  hideDrawerbutton: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 25,
    backgroundColor: "#2B363B",
  },
  profile: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
    paddingStart: 20
  },
});

export default DrawerContent;
