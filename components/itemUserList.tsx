import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {transformDate} from '../utils/transformDate';

export type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number | string;
  };
  email: string;
  login: {
    uuid: string;
  };
  dob: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};

type UserItemProps = {
  user: User;
};

const UserItem: React.FC<UserItemProps> = ({user}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: user.picture.large}} style={styles.image} />
      <View style={styles.info}>
        <Text
          style={
            styles.name
          }>{`${user.name.title} ${user.name.first} ${user.name.last}`}</Text>

        <View style={styles.containerText}>
          <Text style={styles.details}>{user.gender}</Text>
          <Text style={styles.details}>{transformDate(user.dob.date)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    width: 350,
    borderWidth: 2,
    borderColor: 'purple',
    marginTop: 16,
    borderRadius: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 25,
  },
  info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  containerText: {
    top: 8,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  details: {
    fontSize: 16,
    right: 8,
    color: '#555',
    paddingLeft: 8,
  },
});

export default UserItem;
