import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const BottomButton = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    padding: 12,
    borderRadius: 12,
  },
  text: {
    fontWeight: '600',
    // color: 'white',
  },
});
