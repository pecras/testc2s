/* eslint-disable prettier/prettier */
import { View,Image,StyleSheet } from 'react-native';
import React from 'react';

export default function ImageFirst() {
  return (

    <View style={styles.container}>
    <Image
style={styles.imageContainer}
source={require('../assets/images/test.jpeg')} />
  </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    alignSelf: 'center',
  },
  imageContainer :{
   resizeMode:'contain',
  width:500,
height:500},
   });

