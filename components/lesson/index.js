import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Head from '../common/head';
import Safeview from '../common/safeview';
import Overview from './overview';

const Lesson = ({navigation}) => {
  return (
    <Safeview>
      <Head navigation={navigation} />
      <View style={styles.desc}>
        <Text>Know the market</Text>
        <Text>
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
  timeline: {
    flex: 1,
    width: '100%',
  },
});
