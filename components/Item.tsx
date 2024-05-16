import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {} from 'react-native';

interface ItemProps {
  title: string;
  onPressFunction: (value: string) => void;
  id: string;
  value: string;
}

export default function Item({title, id, value, onPressFunction}: ItemProps) {
  return (
    <View key={id} style={styles.item}>
      <Pressable onPress={() => onPressFunction(value)}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
});
