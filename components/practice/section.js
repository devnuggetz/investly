import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import TaskCard from './taskCard';

const Section = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Easy</Text>
      <Text style={styles.subTitle}>
        These are the most basic actions you must practice before opening your
        demat account.
      </Text>
      <ScrollView
        horizontal
        style={styles.tasks}
        showsHorizontalScrollIndicator={false}>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </ScrollView>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingVertical: 8,
  },
  subTitle: {
    marginVertical: 6,
    color: 'gray',
  },
  tasks: {
    flexDirection: 'row',
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
