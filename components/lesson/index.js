import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Head from '../common/head';
import Safeview from '../common/safeview';
import Overview from './overview';

const Lesson = ({navigation, route}) => {
  return (
    <Safeview>
      <Head navigation={navigation} />
      <View style={styles.desc}>
        <Text style={styles.title}>Know the market</Text>
        <Text style={styles.subtitle}>
          This module will give you the basic idea about stock market, how it
          funcitons and who runs the market. This will form a foundation for you
          to learn further.
        </Text>
      </View>
      <View style={styles.timeline}>
        <Overview navigation={navigation} />
      </View>
    </Safeview>
  );
};

export default Lesson;

const styles = StyleSheet.create({
  desc: {
    marginBottom: 16,
    paddingLeft: 16,
  },
  subtitle: {
    fontWeight: '500',
    fontSize: 14,
    color: 'gray',
  },
  timeline: {
    flex: 1,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
  },
});
