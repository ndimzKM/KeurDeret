import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native";
import {
  MaterialIcons,
  Entypo,
  FontAwesome,
  Ionicons,
  AntDesign,
  Fontisto,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import BottomNav from "../components/BottomNav";

export default function App({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={styles.container}>
          <View style={styles.rowText}>
            <View style={{ padding: 10 }}>
              <Text style={styles.TopText}>Hi! Sundiata keita</Text>
              <Text style={styles.butomText}>
                Will you want to donate blood!
              </Text>
            </View>
            <Image
              source={require("../assets/sundi.jpeg")}
              style={styles.firstimg}
            />
          </View>
          <View style={styles.forInput}>
            <View
              style={{
                backgroundColor: "#a9a9a9",
                height: 35,
                width: 300,
                marginLeft: 10,
                borderRadius: 10,
                flexDirection: "row",
              }}
            >
              <Entypo
                name="location"
                size={20}
                color="red"
                style={{ marginTop: 5 }}
              />
              <TextInput placeholder="search for the location" style={{}} />
            </View>
            <View
              style={{
                backgroundColor: "#7497ff",
                marginLeft: 10,
                borderRadius: 10,
                width: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome style={{}} name="search" size={20} color="#a9a9a9" />
            </View>
          </View>
          <View style={styles.parentDve}>
            <View style={styles.bolod}>
              <Entypo name="bookmarks" size={35} color="#c4bcfc" />
              <Text>got, </Text>
              <Text style={styles.branWeight}> A</Text>
              <Text>usai </Text>
              <Text style={styles.branWeight}>18 tahun </Text>

              <Text>berat </Text>
              <Text style={styles.branWeight}>50 kg </Text>
            </View>

            <View style={styles.mainCirle}>
              <View>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: "rgba(0,0,0,0.2)",
                    alignItems: "center",
                    marginLeft: 10,
                    justifyContent: "center",
                    width: 50,
                    height: 50,
                    backgroundColor: "#fff",
                    borderRadius: 50,
                    margin: 7,
                  }}
                >
                  <Fontisto name="blood-drop" size={24} color="#6d8afd" />
                </TouchableOpacity>
                <Text style={{ marginLeft: 10 }}>Cari Pasien</Text>
              </View>

              <View>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: "rgba(0,0,0,0.2)",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 50,
                    height: 50,
                    backgroundColor: "#fff",
                    borderRadius: 50,
                    margin: 7,
                  }}
                >
                  <Fontisto name="blood-test" size={24} color="#8eadff" />
                </TouchableOpacity>
                <Text>Cari Pasien</Text>
              </View>

              <View>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: "rgba(0,0,0,0.2)",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 50,
                    marginRight: 10,
                    height: 50,
                    backgroundColor: "#fff",
                    borderRadius: 50,
                    margin: 7,
                  }}
                >
                  <AntDesign name="heart" size={24} color="#ffcece" />
                </TouchableOpacity>
                <Text style={{ marginRight: 10 }}>Cari Pasien</Text>
              </View>
            </View>
          </View>

          <StatusBar style="auto" />
        </View>

        {/* the body */}

        <View style={styles.containerBox}>
          <View style={styles.firstBox}>
            <Fontisto name="blood-drop" size={24} color="#6d8afd" />
            <View style={styles.textdex}>
              <Text>Realway donor</Text>
              <Text>7 kali</Text>
            </View>
          </View>

          <View style={styles.firstBox}>
            <Entypo name="help-with-circle" size={24} color="#ffc857" />
            <View style={styles.textdex}>
              <Text>Realway donor</Text>
              <Text>7 kali</Text>
            </View>
            <View
              style={{
                backgroundColor: "#00bfff",
                height: 20,
                borderRadius: 10,
              }}
            >
              <Text>Tuker</Text>
            </View>
          </View>
        </View>

        <View style={{ marginLeft: 10, marginTop: 12 }}>
          <Text style={{ fontWeight: "bold" }}>Pasine Terdekat </Text>
        </View>
        {/* message Chating */}

        <View style={styles.mainChat}>
          <View style={styles.headerChat}>
            <Image
              source={require("../assets/sundi.jpeg")}
              style={styles.chtimg}
            />
            <View
              style={{
                marginLeft: 10,
                marginTop: 15,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Sundiata keita</Text>
              <Text>updates from kanifing laout</Text>
            </View>
            <MaterialIcons
              style={{
                marginTop: 20,
                marginLeft: 80,
              }}
              name="message"
              size={30}
              color="#81a5ff"
            />
          </View>

          <View style={{ flexDirection: "row", marginLeft: 60, marginTop: 10 }}>
            <Fontisto name="blood-drop" size={24} color="#ff4242" />
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontWeight: "bold" }}>Posis Rumah Sakit</Text>
              <Text>Rumah kanifing junstion badala </Text>
              <Text>16 in kanifing </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginLeft: 60, marginTop: 10 }}>
            <Octicons name="bookmark" size={24} color="#9899fe" />
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontWeight: "bold" }}>Posis Rumah Sakit</Text>
              <Text>A</Text>
            </View>
          </View>
        </View>

        <View style={styles.kindaChat}>
          <View style={styles.headerChat}>
            <Image
              source={require("../assets/sundi.jpeg")}
              style={styles.chtimg}
            />
            <View
              style={{
                marginLeft: 10,
                marginTop: 15,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Muhammad ndong</Text>
              <Text>updates from kanifing laout</Text>
            </View>
            <MaterialIcons
              style={{
                marginTop: 20,
                marginLeft: 80,
              }}
              name="message"
              size={30}
              color="#81a5ff"
            />
          </View>
        </View>
      </ScrollView>

      <BottomNav navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#364355",
    height: 260,
    width: "100%",
  },

  TopText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  butomText: {
    color: "white",
  },
  firstimg: {
    marginLeft: 100,
    borderRadius: 50,
    height: 50,
    width: 50,
    marginTop: 8,
  },
  rowText: {
    flexDirection: "row",
    marginBottom: 18,
  },
  inputTex: {
    backgroundColor: "white",
    height: 35,
    width: 300,
    borderRadius: 10,
    flex: 1,
    padding: 10,
  },
  forInput: {
    flexDirection: "row",
  },
  icon: {
    color: "red",
  },
  fonicon: {
    marginLeft: 5,
  },
  bolod: {
    marginTop: 18,
    flexDirection: "row",
    backgroundColor: "white",
  },
  branWeight: {
    fontWeight: "bold",
  },
  mainCirle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  parentDve: {
    backgroundColor: "#5e6976",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 8,
    borderRadius: 10,
  },
  firstBox: {
    borderRadius: 10,
    backgroundColor: "#f4f4f9",
    width: 165,
    height: 70,
    marginLeft: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerBox: {
    flexDirection: "row",
  },
  chtimg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 6,
  },
  headerChat: {
    flexDirection: "row",
    // justifyContent: "space-evenly",
  },
  kindaChat: {
    marginTop: 15,
    backgroundColor: "#f4f4f9",
    borderRadius: 10,
    marginLeft: 7,
    marginRight: 7,
  },
  mainChat: {
    marginTop: 15,
    backgroundColor: "#f4f4f9",
    borderRadius: 10,
    marginLeft: 7,
    marginRight: 7,
  },
});
