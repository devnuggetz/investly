import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LeftCard from './left-card';

const LeftModule = () => {
  return (
    <View style={styles.container}>
      <LeftCard />
      <LeftCard />
    </View>
  );
};

export default LeftModule;

const styles = StyleSheet.create({
  container: {
    width: '50%',
    paddingRight: 8,
  },
});
