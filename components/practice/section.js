import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import TaskCard from './taskCard';
import {practiceData} from '../../data/practice';

const Section = ({level, navigation}) => {
  const tasks = practiceData[level];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{level.toUpperCase()}</Text>
      <Text style={styles.subTitle}>
        These are the most basic actions you must practice before opening your
        demat account.
      </Text>
      <ScrollView
        horizontal
        style={styles.tasks}
        showsHorizontalScrollIndicator={false}>
        {tasks.map(item => {
          return (
            <TaskCard key={item.taskId} task={item} navigation={navigation} />
          );
        })}
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
