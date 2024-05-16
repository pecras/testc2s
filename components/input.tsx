import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';

export default function input(Gender: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [text, onChangeText] = useState('');

  return (
    <View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={() => {
            onChangeText(Gender);
          }}
          value={text}
          placeholder="Insira o Nome"
        />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
