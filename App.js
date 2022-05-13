import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text style={{ fontSize: 22, color: "#111" }}>
        KeurDeret - Saving Lives
      </Text>

      <Text style={{ fontSize: 12, color: "#ddd" }}>Changes made by: Pho</Text>
=======
      <View>
        <Text>Text in two Views</Text>
      </View>
>>>>>>> 624de2a3adc3e03caf41786e2acd6e49a0a4f019
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
