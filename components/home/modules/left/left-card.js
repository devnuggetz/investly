import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../../constants';

const LeftCard = () => {
  return (
    <View style={styles.container}>
      <Text>This is left card</Text>
    </View>
  );
};

export default LeftCard;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
