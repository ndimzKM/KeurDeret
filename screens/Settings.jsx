import {Text,View,SafeAreaView,StyleSheet,TextInput,TouchableOpacity} from "react-native"
import { Ionicons,MaterialIcons,FontAwesome5,EvilIcons,MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ScrollView } from "react-native";

function Settings(){
    return(
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.content}>
              <View>
                
              </View>
              <View >
                <Text style={{fontSize:20,fontWeight:'600',}}>Settings</Text>
                <Text style={{fontSize:13,color:'#b6b8b9',}}>@username</Text>
              </View>
              <TouchableOpacity >
                <Text style={{fontSize:17,}}>Done</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.textinput}>
              <TextInput placeholder="Search Settings"/>
            </View>
            <ScrollView style={{marginTop:20,marginHorizontal:10, }}>
                <TouchableOpacity style={styles.thetop}>
                  <Ionicons name="person-outline" size={19} color="#1e3864" />
                  <View style={styles.child}>
                    <Text style={{fontSize:16,fontWeight:'600',}}>Your account</Text>
                    <Text style={{color:'#1e3864',}}>See information about your account, download an archive of your data,or learn about your account deactivation options</Text>
                  </View>
                  <TouchableOpacity >
                    <MaterialIcons name="arrow-forward-ios" size={18} color="#1e3864" />
                  </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.thetop}>
                  <MaterialIcons name="lock-outline" size={24} color="#1e3864" />
                  <View style={styles.child}>
                    <Text style={{fontSize:16,fontWeight:'600',}}>Security and account access</Text>
                    <Text style={{color:'#1e3864',}}>Manage your account's secuirity and keep track of your account's usage including apps that you have connected to your account.</Text>
                  </View>
                  <TouchableOpacity>
                    <MaterialIcons name="arrow-forward-ios" size={24} color="#1e3864" />
                  </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={styles.thetop}>
                  <FontAwesome5 name="shield-alt" size={24} color="#1e3864" />
                  <View style={styles.child}>
                    <Text style={{fontSize:16,fontWeight:'600',}}>Privacy and safety</Text>
                    <Text style={{color:'#1e3864',}}>Manage what information you see and share on KeurDeret</Text>
                  </View>
                  <TouchableOpacity>
                    <MaterialIcons name="arrow-forward-ios" size={24} color="#1e3864" />
                  </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.thetop}>
                  <EvilIcons name="bell" size={24} color="#1e3864" />
                  <View style={styles.child}>
                    <Text style={{fontSize:16,fontWeight:'600',}}>Notification</Text>
                    <Text style={{color:'#1e3864',}}>Select  the kinds of notifications you get about your activities,interests and recommendations.</Text>
                  </View>
                  <TouchableOpacity>
                    <MaterialIcons name="arrow-forward-ios" size={24} color="#1e3864" />
                  </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.thetop}>
                  <Ionicons name="body" size={24} color="#1e3864" />
                  <View style={styles.child}>
                    <Text style={{fontSize:16,fontWeight:'600',}}>Accessibility, display, and languages</Text>
                    <Text style={{color:'#1e3864',}}>Mangae how KeurDeret content is displayed to you.</Text>
                  </View>
                  <TouchableOpacity>
                    <MaterialIcons name="arrow-forward-ios" size={24} color="#1e3864" />
                  </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.thetop}>
                  <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={24} color="#1e3864" />
                  <View style={styles.child}>
                    <Text style={{fontSize:16,fontWeight:'600',}}>Additional resources</Text>
                    <Text style={{color:'#1e3864',}}>Check out other places for helpful information to learn more about KeurDeret's services</Text>
                  </View>
                  <TouchableOpacity>
                    <MaterialIcons name="arrow-forward-ios" size={24} color="#1e3864" />
                  </TouchableOpacity>
                </TouchableOpacity>
            </ScrollView>
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
      marginVertical:30,
      alignItems:'center',
      marginRight:20,
      flex:1,
    },
   
    content:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:30,
      alignItems:'center',
      
    },
    textinput:{
      color:'white',
      backgroundColor:'#e3e7eb',
      marginHorizontal:40,
      padding:5,
      borderRadius:18,
      alignItems:'center',
      marginTop:10,
      
    },
    
    child:{
      paddingHorizontal:10,
      paddingRight:25,
      // flex:1,
    }
  });
export default Settings