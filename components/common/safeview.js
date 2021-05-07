import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Safeview = ({children}) => {
  return <View style={styles.safeview}>{children}</View>;
};

export default Safeview;

const styles = StyleSheet.create({
  safeview: {
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
  },
});
