import {View, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import UserItem from './itemUserList';
import ImageLoading from './imageLoading';
import ModalUser from './modalUsers'; // Corrigido: Remova as chaves de importação

interface PropsListUsers {
  listUser: any[] | undefined;
}

export default function ListUsers({listUser}: PropsListUsers) {
  const [selectedUser, setSelectedUser] = useState(null);

  if (listUser === undefined) {
    return <ImageLoading />;
  }

  return (
    <View>
      <View style={styles.containt}>
        {listUser &&
          listUser.map((user: any) => (
            <View key={user.login.uuid}>
              <Pressable onPress={() => setSelectedUser(user)}>
                <UserItem key={user.login.uuid} user={user} />
              </Pressable>
            </View>
          ))}
      </View>
      {selectedUser && (
        <ModalUser
          setModalVisible={() => setSelectedUser(null)}
          modalVisible={selectedUser !== null}
          user={selectedUser}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containt: {
    flex: 1,
    justifyContent: 'center',
  },
});
