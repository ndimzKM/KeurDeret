import { disableExpoCliLogging } from "expo/build/logs/Logs";
import React from "react";
import { View, StyleSheet, Modal, Text, Button } from "react-native";
import * as actions from '../redux/actions'
import { useDispatch, useSelector } from "react-redux";

const RequestModal = () => {
  const modalVisible = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <Modal transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>Request for Blood</Text>
          <Button title="Cancel" onPress={() => dispatch(actions.hideModal())} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",

    marginTop: 22,
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
