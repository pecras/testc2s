import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

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
        <Text style={styles.details}>{user.gender}</Text>
        <Text
          style={
            styles.details
          }>{`${user.location.city}, ${user.location.country}`}</Text>
        <Text style={styles.details}>{user.email}</Text>
        <Text style={styles.details}>{user.phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default UserItem;
