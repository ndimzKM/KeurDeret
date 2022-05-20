// external imports
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { legacy_createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

// local imports
import rootReducer from "./redux/reducers";
import Test from "./screens/Test";

// store
const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.dark}>
        <SafeAreaView style={{flex: 1, paddingTop: Platform.OS === 'android' ? 22 : 0}}>
          <Test />
        </SafeAreaView>
        {/* <View style={styles.container}>
        <Text>It is not easy like that deh</Text>
      </View> */}
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
