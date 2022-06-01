import { StyleSheet, Text, View } from "react-native";
import Settings from "./Screens/Settings"

export default function App() {
  return (
    <View style={styles.container}>
      <Settings/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
