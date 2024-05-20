import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';

interface InputNameProps {
  setName: (value: string) => void;
}

export default function InputName({setName}: InputNameProps) {
  const [text, onChangeText] = useState('');

  const handleChangeText = (newText: string) => {
    onChangeText(newText);
    setName(newText);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeText}
        value={text}
        placeholder="Insira o Nome"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 1,
    borderWidth: 2,
    padding: 10,
  },
});
