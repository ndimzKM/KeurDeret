import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Fontisto,
  EvilIcons,
  Ionicons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";

const profileImage = {
  uri: "https://picsum.photos/200",
  //uri: "https://api.multiavatar.com/Starcrasher.png",
};

const Profile = ({ navigation }) => {
  const navigateToEditProfile = () => {
    navigation.navigate("editProfile");
  };
  return (
    <View style={styles.profileContainer}>
      {/*============================Header View===============================*/}
      <View style={styles.header}>
        <TouchableOpacity>
          <View
            style={{
              //backgroundColor: "yellow",
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <View
          style={{
            //backgroundColor: "yellow",
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Profile</Text>
        </View>
        <TouchableOpacity onPress={navigateToEditProfile}>
          <View
            style={{
              //backgroundColor: "yellow",
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
          >
            <MaterialCommunityIcons
              name="account-edit"
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/*============================Avatar View===============================*/}
        <View style={styles.avatar}>
          <Image style={styles.profileImage} source={profileImage} />
          <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 5 }}>
            Musa Jeng
          </Text>
        </View>
        <View style={styles.genderAndBlood}>
          {/*============================Gender View===============================*/}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 15,
              paddingRight: 100,
              borderRightWidth: 1,
              borderRightColor: "#bdd0e7",
            }}
          >
            <MaterialCommunityIcons
              name="gender-male"
              size={24}
              color="gray"
              style={{ paddingRight: 7 }}
            />
            <View>
              <Text style={{ fontSize: 13, color: "gray", fontWeight: "bold" }}>
                Gender
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Male</Text>
            </View>
          </View>
          {/*==========================Blood type View===========================*/}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 15,
              //borderRightWidth: 1,
              //borderRightColor: "#bdd0e7",
            }}
          >
            <Ionicons
              name="water-outline"
              size={24}
              color="gray"
              style={{ paddingRight: 7 }}
            />
            <View>
              <Text style={{ fontSize: 13, color: "gray", fontWeight: "bold" }}>
                Blood Group
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                A+(Positive)
              </Text>
            </View>
          </View>
        </View>
        {/*============================Date Of Birth View============================*/}
        <View style={styles.dateOfBirth}>
          <EvilIcons
            name="calendar"
            size={24}
            color="gray"
            style={{ paddingRight: 10 }}
          />
          <View>
            <Text style={{ fontSize: 13, fontWeight: "bold", color: "gray" }}>
              Date of Birth
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              05-June-2001
            </Text>
          </View>
        </View>
        {/*====================================Email View=================================*/}
        <View style={styles.email}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="gray"
            style={{ paddingRight: 10 }}
          />
          <View>
            <Text style={{ fontSize: 13, fontWeight: "bold", color: "gray" }}>
              Email
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              something12@gmail.com
            </Text>
          </View>
        </View>
        {/*=========================Mobile Number View========================*/}
        <View style={styles.mobileNumber}>
          <Feather
            name="phone"
            size={24}
            color="gray"
            style={{ paddingRight: 10 }}
          />
          <View>
            <Text style={{ fontSize: 13, fontWeight: "bold", color: "gray" }}>
              Mobile Number
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              +123 456 789
            </Text>
          </View>
        </View>
        {/*=======================Location View============================*/}
        <View style={styles.location}>
          <EvilIcons
            name="location"
            size={30}
            color="gray"
            style={{ paddingRight: 10 }}
          />
          <View>
            <Text style={{ fontSize: 13, fontWeight: "bold", color: "gray" }}>
              Address/Location
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Kanifing</Text>
          </View>
        </View>
        {/*===============================Google Location View=======================*/}
        <View style={styles.googleLocation}>
          <MaterialIcons
            name="gps-not-fixed"
            size={24}
            color="gray"
            style={{ paddingRight: 10 }}
          />
          <View>
            <Text style={{ fontSize: 13, fontWeight: "bold", color: "gray" }}>
              Google Map Code
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>F73R +J33</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //backgroundColor: "green",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#bdd0e7",
  },
  avatar: {
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#bdd0e7",
  },
  profileImage: {
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "white",
    width: 80,
    height: 80,
  },
  genderAndBlood: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#bdd0e7",
  },
  dateOfBirth: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#bdd0e7",
  },
  email: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#bdd0e7",
  },
  mobileNumber: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#bdd0e7",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#bdd0e7",
  },
  googleLocation: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#bdd0e7",
  },
});

export default Profile;
