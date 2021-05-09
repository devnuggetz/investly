import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const StartButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>START</Text>
    </TouchableOpacity>
  );
};

export default StartButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3292B1',
    padding: 12,
    borderRadius: 12,
    width: '100%',
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    color: 'white',
    fontSize: 16,
  },
});
