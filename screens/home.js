import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Safeview from '../components/common/safeview';
import ModuleContainer from '../components/home/module-container';
import ProgressCard from '../components/home/progress-card';

const Home = () => {
  return (
    <Safeview>
      <Text style={styles.welcome}>Hey Shuvam!</Text>
      <ProgressCard />
      <ModuleContainer />
    </Safeview>
  );
};

export default Home;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 12,
  },
});
