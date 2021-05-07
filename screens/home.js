import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Safeview from '../components/common/safeview';
import ModuleContainer from '../components/home/module-container';

const Home = () => {
  return (
    <Safeview>
      <Text>Hey Shuvam!</Text>
      <ModuleContainer />
    </Safeview>
  );
};

export default Home;

const styles = StyleSheet.create({});
