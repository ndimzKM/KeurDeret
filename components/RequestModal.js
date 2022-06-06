import { disableExpoCliLogging } from "expo/build/logs/Logs";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, Button } from "react-native";
import * as actions from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const RequestModal = () => {
  const modalVisible = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const [bloodType, setBloodType] = useState("");
  return (
    <Modal transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>Request for Blood</Text>
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
          <Button
            title="Cancel"
            onPress={() => dispatch(actions.hideModal())}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",

    marginTop: 12,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
});

export default RequestModal;
