import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../../constants';

const RightCard = () => {
  return (
    <View style={styles.container}>
      <Text>This is right card</Text>
    </View>
  );
};

export default RightCard;

const styles = StyleSheet.create({
  container: {
    height: 240,
    // width: '50%',
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
