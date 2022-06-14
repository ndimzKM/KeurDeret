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
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

// local imports
import rootReducer from "./redux/reducers";
import Register from "./screens/Register";
import DashBoard from "./screens/DashBoard";
import Profile from "./screens/Profile";
import EditProfile from "./screens/EditProfile";
import Notification from "./screens/Notification";
import Login from "./screens/Login";
import Settings from "./screens/Settings";
import Home from "./screens/Home";
import Registration from "./screens/Registration";
import DrawerContent from "./screens/Drawer";
import RequestModal from "./components/RequestModal";

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
      initialRouteName="Home"
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
      <Drawer.Screen name="Login" component={Login} />
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
      <SafeAreaView
        style={{ flex: 1, paddingTop: Platform.OS === "android" ? 40 : 0 }}
      >
        <NavigationContainer>
        
          <Stack.Navigator initialRouteName="Register" screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="Main" component={Main} />
          </Stack.Navigator>
        </NavigationContainer>

        <StatusBar barStyle="dark-content" />
      </SafeAreaView>
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
