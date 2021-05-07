import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {icons} from '../../constants';

const Head = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={icons.back} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

export default Head;

const styles = StyleSheet.create({
  icon: {
    height: 18,
    padding: 12,
    marginBottom: 18,
  },
});
