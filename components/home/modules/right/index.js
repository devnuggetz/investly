import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RightCard from './right-card';

const RightModule = () => {
  return (
    <View style={styles.container}>
      <RightCard />
      <RightCard />
      <RightCard />
    </View>
  );
};

export default RightModule;

const styles = StyleSheet.create({
  container: {
    width: '50%',
    paddingLeft: 8,
  },
});
