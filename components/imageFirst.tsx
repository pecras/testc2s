/* eslint-disable prettier/prettier */
import { View,Image,StyleSheet,Text } from 'react-native';
import React from 'react';

export default function ImageLoading() {
  return (
    <View style={styles.container}>
    <Image
style={styles.imageContainer}
source={require('../assets/images/test.jpeg')} />
 <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container:{flex:1},
  imageContainer :{
    resizeMode:'contain',
  width:500,
height:500},
    text: {
      marginTop: 20,
      fontSize: 18,
      color: '#000',
    },
});

