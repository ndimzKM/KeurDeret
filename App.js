import { StyleSheet, Text, View, Platform } from "react-native";
import Profile from "./Screens/profileStack/Profile";
import EditProfile from "./Screens/profileStack/EditProfile";
import ProfileStack from "./Screens/profileStack/ProfileStack";

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS == "android" ? 25 : 0,
  },
});
