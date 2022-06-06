import { disableExpoCliLogging } from "expo/build/logs/Logs";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, Button, TouchableOpacity } from "react-native";
import * as actions from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const RequestModal = () => {
  const modalVisible = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const [bloodType, setBloodType] = useState("");
  return (
    <Modal transparent={true} visible={modalVisible} animationType='fade'>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Select Blood Type</Text>
          <Picker
            selectedValue={bloodType}
            onValueChange={(itemValue, itemIndex) => setBloodType(itemValue)}
            style={{ width: "100%" }}
          >
            <Picker.Item label="AB-" value="ab-" />
            <Picker.Item label="AB+" value="ab+" />
            <Picker.Item label="A-" value="a-" />
            <Picker.Item label="A+" value="a+" />
            <Picker.Item label="B-" value="b-" />
            <Picker.Item label="B+" value="b+" />
            <Picker.Item label="O-" value="o-" />
            <Picker.Item label="O+" value="O+" />
          </Picker>

          <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.buttonCancel} onPress={() => dispatch(actions.hideModal())}>
              <Text style={{fontSize: 18, color: 'red'}}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRequest} onPress={() => dispatch(actions.hideModal())}>
              <Text style={{fontSize: 18, color: 'blue'}}>Send Request</Text>
          </TouchableOpacity>
          </View>


        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  modalView: {
 
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonGroup: {
    width: '100%',
    // backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default RequestModal;
