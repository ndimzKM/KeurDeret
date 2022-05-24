import { StyleSheet, Text, View, StatusBar } from "react-native";
import Drawer from "./screens/Drawer";

export default function App() {
  return (
    <View style={styles.container}>
      <Drawer />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
