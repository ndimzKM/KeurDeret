import {
  TouchableOpacity,
  Platform,
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
const Icon = ({ iconName, text }) => {
  return (
    <View style={{ paddingTop: 40, paddingLeft: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome5 name={iconName} size={28} color="black" />
        <Text style={{ paddingLeft: 30, fontSize: 15 }}>{text}</Text>
      </View>
    </View>
  );
};

const DrawerContent = ({ props, navigation }) => {
  return (
    <DrawerContentScrollView style={styles.container} {...props}>
      <ScrollView styles={{ flex: 1 }}>
        <View style={styles.top}>
          <TouchableOpacity onPress={() => navigation.closeDrawer()} style={{ position: "absolute", paddingLeft: 20 }}>
            <FontAwesome5 name="arrow-left" size={28} color="black" />
          </TouchableOpacity>
          {/* <View
            style={{ flex: 2, justifyContent: "center", flexDirection: "row" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "400" }}>Profile</Text>
          </View> */}
        </View>
        <View style={styles.profile}>
          <Image
            style={styles.image}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
          <View style={{ paddingLeft: 15 }}>
            <Text style={{ fontSize: 30, paddingBottom: 10, paddingTop: 5 }}>
              App Development
            </Text>
            <Text style={{ fontWeight: "100" }}>appdevelopment@hub.org</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Icon iconName="user" text="My Profile" />
          </TouchableOpacity>
          <Icon iconName="cog" text="Settings" />
          <Icon iconName="bell" text="Notification" />

          <Icon iconName="history" text="Transaction History" />
          <Icon iconName="question-circle" text="FAQ" />
          <Icon iconName="exclamation-circle" text="About App" />
          <View style={{ paddingTop: 50 }}>
            <Icon iconName="sign-out-alt" text="Logout" />
          </View>
        </View>
      </ScrollView>
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
    backgroundColor: "##edf6f9",
  },
  top: {
    flexDirection: "row",
    flex: 1,
    paddingBottom: 40,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingBottom: 20,
  },
});

export default DrawerContent;
