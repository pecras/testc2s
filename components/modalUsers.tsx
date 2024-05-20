import React from 'react';
import {Modal, View, Text, Button, StyleSheet, Image} from 'react-native';

interface ModalUserProps {
  modalVisible: boolean;
  setModalVisible: () => void;
  user: any;
}

const ModalUser: React.FC<ModalUserProps> = ({
  modalVisible,
  setModalVisible,
  user,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={setModalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image source={{uri: user.picture.large}} style={styles.image} />
          <View style={styles.info}>
            <Text
              style={
                styles.name
              }>{`${user.name.title} ${user.name.first} ${user.name.last}`}</Text>
            <Text style={styles.details}>{user.gender}</Text>
            <Text
              style={
                styles.details
              }>{`${user.location.city}, ${user.location.country}`}</Text>
            <Text style={styles.details}>{user.email}</Text>
            <Text style={styles.details}>{user.phone}</Text>
          </View>
          <Button title="Close" onPress={setModalVisible} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
});

export default ModalUser;
