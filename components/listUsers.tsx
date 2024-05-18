import {View, StyleSheet} from 'react-native';
import React from 'react';
import UserItem from './itemUserList';
import ImageLoading from './imageLoading';

interface PropsListUsers {
  listUser: any[] | undefined;
}

export default function ListUsers({listUser}: PropsListUsers) {
  if (listUser === undefined) {
    return <ImageLoading />;
  }

  return (
    <View>
      <View style={styles.containt}>
        {listUser &&
          listUser.map(user => <UserItem key={user.login.uuid} user={user} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containt: {
    flex: 1,
    justifyContent: 'center',
  },
});
