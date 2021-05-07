import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../constants';
import ProgressCircle from 'react-native-progress-circle';

const ProgressCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ProgressCircle
          percent={60}
          radius={30}
          borderWidth={8}
          color={COLORS.primary}
          shadowColor="white"
          bgColor={COLORS.secondary}>
          <Text style={{fontSize: 12}}>{'60%'}</Text>
        </ProgressCircle>
        <Text style={styles.motiv}>Great going, keep learning</Text>
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
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    padding: 16,
  },
  motiv: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
