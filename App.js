// external imports
import { StyleSheet, SafeAreaView, Platform, View } from "react-native";
import { StatusBar } from "expo-status-bar";

// redux
import { legacy_createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// ui-kitten UI Library

// local imports
import rootReducer from "./redux/reducers";
import Register from "./screens/Register";
import DashBoard from "./screens/DashBoard";
import Profile from "./screens/Profile";
import EditProfile from "./screens/EditProfile";
import Notification from "./screens/Notification";
import Test from "./screens/Test";
import Settings from "./screens/Settings";
import Home from "./screens/Home";
import VerifyAccount from "./screens/VerifyAccount";
import DrawerContent from "./screens/Drawer";

// store
const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// stack navigator and screen
const Stack = createNativeStackNavigator();

// drawer navigator and screen
const Drawer = createDrawerNavigator();

const Main = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="DashBoard"
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        drawerPosition: "right",
        drawerStyle: {
          marginVertical: 15,
          borderBottomLeftRadius: 15,
          borderTopLeftRadius: 15,
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="DashBoard" component={DashBoard} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="EditProfile" component={EditProfile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, paddingTop: Platform.OS === "android" ? 40 : 0 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Register"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Registration" component={Test} />
            <Stack.Screen name="Verification" component={VerifyAccount} />
            <Stack.Screen name="Main" component={Main} />
          </Stack.Navigator>
        </NavigationContainer>

        <StatusBar style="light" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  BottomIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 13,
  },
});
