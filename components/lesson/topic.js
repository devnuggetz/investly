import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Topic = ({data}) => {
  return (
    <View>
      <Text>{data.topic}</Text>
    </View>
  );
};

export default Topic;

const styles = StyleSheet.create({});
