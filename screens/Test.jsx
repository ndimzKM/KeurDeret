import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TextInput, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";

import { addUser, deleteUser, updateUser } from "../redux/actions";

const Test = ({navigation}) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({});

  const edit = (id) => {
    setIsEditing(true);
    users.forEach((currentUser) => {
      if (currentUser.id === id) {
        setUser({
          id: id,
          firstName: currentUser.firstName,
          lastName: currentUser.lastName,
          address: currentUser.address,
          phoneNumber: currentUser.phoneNumber,
          bloodGroup: currentUser.bloodGroup,
        });
      }
    });
  };

  const add = () => {
    dispatch(addUser({ ...user, id: users.length + 1 }));
    setUser({});
  };

  const update = () => {
    dispatch(updateUser(user));
    setUser({});
  };

  return (
    <View style={{ flex: 1 }}>
      <Text category="h2">Simple Sign-Up Form</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={user.firstName}
          onChangeText={(newText) => setUser({ ...user, firstName: newText })}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={user.lastName}
          onChangeText={(newText) => setUser({ ...user, lastName: newText })}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={user.address}
          onChangeText={(newText) => setUser({ ...user, address: newText })}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={user.phoneNumber}
          onChangeText={(newText) => setUser({ ...user, phoneNumber: newText })}
        />
        <TextInput
          style={styles.input}
          placeholder="Blood Group"
          value={user.bloodGroup}
          onChangeText={(newText) => setUser({ ...user, bloodGroup: newText })}
        />

        <TouchableOpacity
          onPress={() => {
            isEditing ? update() : add();
            setIsEditing(false);
          }}
          style={styles.submitBtn}
        >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
        <Text
          // to return to login screen on press
          onPress={() => navigation.navigate("Register")}
          style={{
            
            textAlign: "center",
            fontSize: 16,
            paddingTop: 5,
          }}
        >
          Already have an account? Log in
        </Text>
      </View>
      {/* <ScrollView contentContainerStyle={{ padding: 10 }}>
        {users.map((userItem) => (
          <View key={userItem.id} style={{ marginBottom: 5 }}>
            <View>
              <Text>
                Full Name: {userItem.firstName} {userItem.lastName}
              </Text>
              <Text>Address: {userItem.address}</Text>
              <Text>Phone: {userItem.phoneNumber}</Text>
              <Text>Blood Group: {userItem.bloodGroup}</Text>
            </View>
            <View>
              <TouchableOpacity
                style={{ marginBottom: 5 }}
                onPress={() => edit(userItem.id)}
              >
                <Text>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                status="danger"
                onPress={() => dispatch(deleteUser(userItem.id))}
              >
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  form: { padding: 10 },
  input: {
    marginBottom: 10,
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 22,
    borderBottomColor: '#ddd'
  },

  submitBtn: {
    backgroundColor: "#e63946",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },

  btnText: {
    fontSize: 18
  }
});

export default Test;
