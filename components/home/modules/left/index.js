import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moduleData} from '../../../../data/modules';
import LeftCard from './left-card';

const LeftModule = ({navigation}) => {
  const module = moduleData[0];
  return (
    <View style={styles.container}>
      <LeftCard navigation={navigation} module={module} />
      <LeftCard navigation={navigation} module={module} />
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
