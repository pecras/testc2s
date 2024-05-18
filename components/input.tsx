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
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
