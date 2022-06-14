import { TouchableOpacity, StyleSheet, Image, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Icon = ({ iconName, text }) => {
  return (
    <View style={{ paddingVertical: 15, paddingStart: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome name={iconName} size={24} color="#889096" />
        <Text style={{ paddingLeft: 30, fontSize: 15, color: "#889096" }}>
          {text}
        </Text>
      </View>
    </View>
  );
};

const DrawerContent = ({ props, navigation }) => {
  return (
    <View style={styles.container} {...props}>
      <View style={styles.top}>
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
            <Text style={{ fontSize: 22, color: "#2B363B" }}>
              App Development
            </Text>
            <Text style={{ fontWeight: "200" }}>appdevelopment@hub.org</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DashBoard");
          }}
        >
          <Icon iconName="home" text="Dashboard" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings");
          }}
          style={{ borderTopWidth: 1, borderTopColor: "#F3F6F6", }}
        >
          <Icon iconName="cog" text="Settings" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Notification");
          }}
          style={{ borderTopWidth: 1, borderTopColor: "#F3F6F6" }}
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
            style={{ borderTopWidth: 1, borderTopColor: "#F3F6F6" }}
          >
            <Icon iconName="user" text="My Profile" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={{ borderTopWidth: 1, borderTopColor: "#F3F6F6" }}
          >
            <Icon iconName="question-circle" text="FAQ" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={{ borderTopWidth: 1, borderTopColor: "#F3F6F6" }}
          >
            <Icon iconName="exclamation-circle" text="About App" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Registration")}
          
        >
          <Icon iconName="sign-out" text="Logout" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bottom: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  profile: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
    paddingStart: 20,
    paddingVertical: 20,
  },
});

export default DrawerContent;
