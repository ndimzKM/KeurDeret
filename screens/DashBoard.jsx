import {
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  View,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import {
  Feather,
  AntDesign,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

function DashBoard() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.TopIcons}>
          <Text style={{ fontSize: 15, marginRight: 190, fontWeight: "bold" }}>
            Dashboard
          </Text>
          <Feather
            name="bell"
            size={30}
            color="#b5bcc6"
            style={{ marginRight: 15 }}
          />
          <AntDesign name="user" size={30} color="#b5bcc6" />
        </View>
        {/* profile */}
        <View style={styles.profile}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }}
            source={require("../assets/1.jpg")}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Fatou Bah</Text>
            <Text style={{ fontSize: 15 }}>Banjul</Text>
          </View>
        </View>
        {/*icons details in the  table */}
        <View style={styles.content}>
          <View
            style={{ marginLeft: 34, borderRightWidth: 0.2, paddingRight: 65 }}
          >
            <Fontisto
              name="blood-drop"
              size={30}
              color="#b5bcc6"
              style={{ paddingBottom: 10 }}
            />
            <Text style={{ textAlign: "center" }}>Donation</Text>
            <Text style={{ paddingBottom: 35 }}>45</Text>
          </View>

          <View style={{ marginRight: 60 }}>
            <AntDesign
              name="heart"
              size={30}
              color="#b5bcc6"
              style={{ paddingBottom: 10 }}
            />
            <Text>Safe Lives</Text>
            <Text>15</Text>
          </View>
          <View
            style={{
              marginTop: 135,
              flexDirection: "row",
              position: "absolute",
            }}
          >
            <View
              style={{
                marginLeft: 30,
                paddingTop: 30,
                borderRightWidth: 0.2,
                paddingRight: 76,
              }}
            >
              <Fontisto
                name="blood"
                size={30}
                color="#b5bcc6"
                style={{ paddingBottom: 10 }}
              />
              <Text>Request</Text>
              <Text>5</Text>
            </View>

            <View style={{ marginLeft: 65, paddingTop: 30 }}>
              <Ionicons
                name="timer-outline"
                size={30}
                color="#b5bcc6"
                style={{ paddingBottom: 10 }}
              />
              <Text>Hanging request</Text>
              <Text>10</Text>
            </View>
          </View>
        </View>
        {/* donors information */}
        <View>
          <Text
            style={{
              paddingTop: 150,
              fontSize: 17,
              paddingBottom: 10,
              fontWeight: "bold",
              marginLeft: 6,
            }}
          >
            Nearest Donors
          </Text>
          <View style={styles.border}>
            <View style={styles.content}>
              <Image
                source={require("../assets/1.jpg")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  marginLeft: 12,
                }}
              />
              <View style={{ flexDirection: "column", marginRight: 55 }}>
                <Text style={{ fontWeight: "bold" }}>Fatou Sanneh</Text>
                <Text>Update, 23 minutes ago</Text>
              </View>

              <AntDesign
                name="message1"
                size={24}
                color="blue"
                style={{ marginRight: 15 }}
              />
            </View>

            {/* hospital location  */}
            <View style={styles.location}>
              <MaterialCommunityIcons
                name="hospital-marker"
                size={29}
                color="blue"
                style={{ marginLeft: 90 }}
              />

              <View style={{ marginRight: 90 }}>
                <Text style={{ fontWeight: "bold" }}>Hospital location</Text>
                <Text>Kanifing after MDI</Text>
              </View>
            </View>

            {/* blood type */}
            <View style={styles.location}>
              <Fontisto
                name="blood-drop"
                size={24}
                color="red"
                style={{ marginLeft: 90 }}
              />
              <View style={{ marginRight: 150 }}>
                <Text style={{ fontWeight: "bold" }}>Blood Type</Text>
                <Text>A</Text>
              </View>
            </View>
          </View>
        </View>

        {/* donors information 2 */}

        <View style={styles.border}>
          <View style={styles.content}>
            <Image
              source={require("../assets/1.jpg")}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginLeft: 12,
              }}
            />
            <View style={{ flexDirection: "column", marginRight: 55 }}>
              <Text style={{ fontWeight: "bold" }}>Fatou Sanneh</Text>
              <Text>Update, 23 minutes ago</Text>
            </View>

            <AntDesign
              name="message1"
              size={24}
              color="blue"
              style={{ marginRight: 15 }}
            />
          </View>

          {/* hospital location  */}
          <View style={styles.location}>
            <MaterialCommunityIcons
              name="hospital-marker"
              size={29}
              color="blue"
              style={{ marginLeft: 90 }}
            />

            <View style={{ marginRight: 90 }}>
              <Text style={{ fontWeight: "bold" }}>Hospital location</Text>
              <Text>Kanifing after MDI</Text>
            </View>
          </View>

          {/* blood type */}
          <View style={styles.location}>
            <Fontisto
              name="blood-drop"
              size={24}
              color="red"
              style={{ marginLeft: 90 }}
            />
            <View style={{ marginRight: 150 }}>
              <Text style={{ fontWeight: "bold" }}>Blood Type</Text>
              <Text>A</Text>
            </View>
          </View>
        </View>

        {/* donors information 3 */}

        <View style={styles.border}>
          <View style={styles.content}>
            <Image
              source={require("../assets/1.jpg")}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginLeft: 12,
              }}
            />
            <View style={{ flexDirection: "column", marginRight: 55 }}>
              <Text style={{ fontWeight: "bold" }}>Fatou Sanneh</Text>
              <Text>Update, 23 minutes ago</Text>
            </View>

            <AntDesign
              name="message1"
              size={24}
              color="blue"
              style={{ marginRight: 15 }}
            />
          </View>

          {/* hospital location  */}
          <View style={styles.location}>
            <MaterialCommunityIcons
              name="hospital-marker"
              size={29}
              color="blue"
              style={{ marginLeft: 90 }}
            />

            <View style={{ marginRight: 90 }}>
              <Text style={{ fontWeight: "bold" }}>Hospital location</Text>
              <Text>Kanifing after MDI</Text>
            </View>
          </View>

          {/* blood type */}
          <View style={styles.location}>
            <Fontisto
              name="blood-drop"
              size={24}
              color="red"
              style={{ marginLeft: 90 }}
            />
            <View style={{ marginRight: 150 }}>
              <Text style={{ fontWeight: "bold" }}>Blood Type</Text>
              <Text>A</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 20 : 0,
    marginHorizontal: 20,
  },
  TopIcons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 15,
  },
  profile: {
    flexDirection: "row",
    paddingTop: 25,
    marginLeft: 10,
    paddingBottom: 30,
  },
  content: {
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "space-between",
  },
  border: {
    backgroundColor: "#b5bcc6",
    width: 380,
    height: 190,
    borderRadius: 10,
    marginTop: 20,
  },
  content: {
    flexDirection: "row",
    paddingTop: 15,
    justifyContent: "space-between",
  },

  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
});

export default DashBoard;
