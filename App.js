// external imports
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

import { legacy_createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

// local imports
import rootReducer from "./redux/reducers";
// import Home from "./screens/Home";
import Register from "./screens/Register";
import DashBoard from "./screens/DashBoard";
import Profile from "./screens/Profile";
import EditProfile from "./screens/EditProfile";
import Notification from "./screens/Notification";
import Login from "./screens/Login";
import Settings from "./screens/Settings";


// store
const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// stack navigator and screen
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.dark}>
        <SafeAreaView
          style={{ flex: 1, paddingTop: Platform.OS === "android" ? 22 : 0 }}
        >
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Profile" screenOptions={{headerShown: false}} >
              <Stack.Screen name="DashBoard" component={DashBoard} />
              {/* <Stack.Screen name="Home" component={Home} /> */}
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Notification" component={Notification} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="EditProfile" component={EditProfile} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
          </NavigationContainer>

          <StatusBar barStyle="dark-content" />
        </SafeAreaView>
      </ApplicationProvider>
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
});
