import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Text, Input, Button, Card } from "@ui-kitten/components";

import { addUser, deleteUser, updateUser } from "../redux/actions";

const Test = () => {
  const users = useSelector(state => state.users);
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
    dispatch(addUser({...user, id: users.length + 1}));
    setUser({});
  };

  const update = () => {
    dispatch(updateUser(user));
    setUser({});
  };

  return (
    <Layout style={{flex: 1}} >
      <Text category="h2">Simple Sign-Up Form</Text>
      <View style={styles.form}>
        <Input
        style={styles.input}
          placeholder="First Name"
          value={user.firstName}
          onChangeText={(newText) => setUser({ ...user, firstName: newText })}
        />
        <Input
        style={styles.input}
          placeholder="Last Name"
          value={user.lastName}
          onChangeText={(newText) => setUser({ ...user, lastName: newText })}
        />
        <Input
        style={styles.input}
          placeholder="Address"
          value={user.address}
          onChangeText={(newText) => setUser({ ...user, address: newText })}
        />
        <Input
        style={styles.input}
          placeholder="Phone Number"
          value={user.phoneNumber}
          onChangeText={(newText) => setUser({ ...user, phoneNumber: newText })}
        />
        <Input
        style={styles.input}
          placeholder="Blood Group"
          value={user.bloodGroup}
          onChangeText={(newText) => setUser({ ...user, bloodGroup: newText })}
        />

        <Button
          onPress={() => {
            isEditing ? update() : add();
            setIsEditing(false)
          }}
        >
          Submit
        </Button>
      </View>
      <ScrollView contentContainerStyle={{padding: 10}}>
        {users.map((userItem) => (
          <Card key={userItem.id} style={{marginBottom: 5}}>
            <View>
              <Text>
                Full Name: {userItem.firstName} {userItem.lastName}
              </Text>
              <Text>Address: {userItem.address}</Text>
              <Text>Phone: {userItem.phoneNumber}</Text>
              <Text>Blood Group: {userItem.bloodGroup}</Text>
            </View>
            <View>
              <Button style={{marginBottom: 5}} onPress={() => edit(userItem.id)}>Edit</Button>
              <Button status='danger' onPress={() => dispatch(deleteUser(userItem.id))} >Delete</Button>
            </View>
          </Card>
        ))}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({

    form: {padding: 10},
    input: {
        marginBottom: 5
    }
});

export default Test;
