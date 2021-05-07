import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TitleCard = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Lesson Start')}>
      <Text style={styles.title}>This is title</Text>
      <Text style={styles.subtitle}>This is Subtitle</Text>
    </TouchableOpacity>
  );
};

export default TitleCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    width: '100%',
    padding: 12,
    borderRadius: 12,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
  },
  title: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
});
