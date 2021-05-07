import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../constants';

const ProgressCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>This is progress card</Text>
      </View>
    </View>
  );
};

export default ProgressCard;

const styles = StyleSheet.create({
  card: {
    height: 80,
    width: '100%',
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 16,
  },
});
