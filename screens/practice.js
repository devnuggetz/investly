import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import Safeview from '../components/common/safeview';
import Section from '../components/practice/section';

const Practice = ({navigation}) => {
  return (
    <Safeview style={styles.container}>
      <Text>
        Practice the following tasks to gain real experience of the stock market
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Section level="student" navigation={navigation} />
        <Section level="player" navigation={navigation} />
        <Section level="master" navigation={navigation} />
      </ScrollView>
    </Safeview>
  );
};

export default Practice;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
