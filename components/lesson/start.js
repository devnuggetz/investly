import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Safeview from '../common/safeview';

const Start = ({navigation}) => {
  return (
    <Safeview>
      <Text>This is lesson start screen</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Start" />
    </Safeview>
  );
};

export default Start;

const styles = StyleSheet.create({});
