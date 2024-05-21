import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

const ImageLoading = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#0000ff" />
    <Text>Carregando ...</Text>
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageLoading;
