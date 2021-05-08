import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Safeview from '../common/safeview';

const Example = ({navigation}) => {
  return (
    <Safeview>
      <Text>This is example screen</Text>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Text>click</Text>
      </TouchableOpacity>
    </Safeview>
  );
};

export default Example;

const styles = StyleSheet.create({});
