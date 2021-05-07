import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LeftCard from './left-card';

const LeftModule = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LeftCard navigation={navigation} />
      <LeftCard navigation={navigation} />
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
