import { StyleSheet, Text, } from "react-native";
import Register from "./screens/Register";

export default function App() {
  return (
    <Register/>
   
   
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 50,
    paddingRight: 50,
  },
});
