import React from 'react';
import {Modal, View, Text, Button, StyleSheet, Image} from 'react-native';
import {transformDate} from '../utils/transformDate';

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
            <Text style={styles.details}>{transformDate(user.dob.date)}</Text>
            <Text
              style={
                styles.details
              }>{`${user.location.city}, ${user.location.country}`}</Text>
            <Text style={styles.details}>{user.email}</Text>
            <Text style={styles.details}>{user.phone}</Text>
            <Text
              style={
                styles.details
              }>{`${user.location.street.name} , ${user.location.street.number}`}</Text>
          </View>
          <View style={styles.button}>
            <Button
              title="Fechar"
              color="rebeccapurple"
              onPress={setModalVisible}
            />
          </View>
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
    backgroundColor: 'orange',
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
    width: 120,
    height: 120,
    borderRadius: 100,
    top: -75,
    borderColor: 'orange',
    borderWidth: 2,
    marginBottom: 15,
  },
  info: {
    marginLeft: 10,
    justifyContent: 'center',
    marginBottom: 80,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  details: {
    top: 3,
    fontSize: 24,
    color: 'black',
  },
  button: {
    width: 250,
    height: 50,
  },
});

export default ModalUser;
