import {FlatList, Text, Modal, StyleSheet, Pressable, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Item from './Item';

interface SelectGenderProps {
  setGender: (value: string) => void;
}

export default function SelectGender({setGender}: SelectGenderProps) {
  const [modalVisible, setModalVisible] = React.useState(false);

  const data = [
    {
      id: 'All',
      value: '',
      title: 'Todos',
    },
    {
      id: 'male',
      value: 'male',
      title: 'Masculino',
    },
    {
      id: 'female',
      value: 'female',
      title: 'Feminino',
    },
  ];

  const onPressFunction = (value: string) => {
    setGender(value);
    setModalVisible(false);
  };

  return (
    <View style={styles.centeredView}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <View>
          <FontAwesome name="filter" color="black" size={20} />
        </View>
      </Pressable>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.container}>
              <FlatList
                data={data}
                renderItem={({item}) => (
                  <Item
                    title={item.title}
                    id={item.id}
                    value={item.value}
                    onPressFunction={onPressFunction}
                  />
                )}
                keyExtractor={item => item.id}
              />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    width: 150,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
    maxHeight: 500,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#ff8c00',
    borderRadius: 20,
    marginLeft: 200,
    marginTop: 125,
    padding: 15,
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
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'orange',
  },
  buttonClose: {
    backgroundColor: 'rebeccapurple',
    width: 150,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
