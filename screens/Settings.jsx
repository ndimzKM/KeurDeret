import {Text,View,SafeAreaView,StyleSheet,TextInput,TouchableOpacity} from "react-native"
import { Ionicons,MaterialIcons,FontAwesome5,EvilIcons,MaterialCommunityIcons } from '@expo/vector-icons'; 

function Settings(){
    return(
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.thetop}>
              <View>

              </View>
              <View >
                <Text>Settings</Text>
                <Text>@username</Text>
              </View>
              <TouchableOpacity >
                <Text>Done</Text>
              </TouchableOpacity>
            </View>
            <View >
              <TextInput placeholder="Search Settings"/>
            </View>
            <View>
              <View Style={styles.content}>
                <Ionicons name="person-outline" size={24} color="black" />
                <View>
                  <Text>Your account</Text>
                  <Text>See information about your account, download an archive of your data,or learn about your account deactivation options</Text>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
              </View>
              <View  Style={styles.content}>
                <MaterialIcons name="lock-outline" size={24} color="black" />
                <View>
                  <Text>Security and account access</Text>
                  <Text>Manage your account's secuirity and keep track of your account's usage including apps that you have connected to your account.</Text>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
              </View>
              <View Style={styles.content}>
                <FontAwesome5 name="shield-alt" size={24} color="black" />
                <View>
                  <Text>Privacy and safety</Text>
                  <Text>Manage what information you see and share on KeurDeret</Text>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
              </View>
              <View  Style={styles.content}>
                <EvilIcons name="bell" size={24} color="black" />
                <View>
                  <Text>Notification</Text>
                  <Text>Select  the kinds of notifications you get about your activities,interests and recommendations.</Text>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
              </View>
              <View  Style={styles.content}>
                <Ionicons name="body" size={24} color="black" />
                <View>
                  <Text>Accessibility, display, and languages</Text>
                  <Text>Mangae how KeurDeret content is displayed to you.</Text>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
              </View>
              <View  Style={styles.content}>
                <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={24} color="black" />
                <View>
                  <Text>Additional resources</Text>
                  <Text>Check out other places for helpful information to learn more about KeurDeret's services</Text>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
              </View>
            </View>
          </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop:Platform.OS=='andriod'? 20:0,
      
    },
    thetop:{
      flexDirection:'row',
      justifyContent:'space-between',
    },
    textinput:{
      backgroundColor:'grey',
    },
    content:{
      flexDirection:'row',
      justifyContent:'space-evenly',
      marginTop:10,
      
    }
  });
export default Settings