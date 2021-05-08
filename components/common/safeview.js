import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Safeview = ({children, style}) => {
  return <View style={[styles.safeview, style]}>{children}</View>;
};

export default Safeview;

const styles = StyleSheet.create({
  safeview: {
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'ios' ? 60 : 20,
    backgroundColor: 'white',
    flex: 1,
  },
});
