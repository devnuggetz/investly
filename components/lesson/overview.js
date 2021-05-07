import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TitleCard from './titleCard';
import Timeline from 'react-native-timeline-flatlist';

const Overview = ({navigation}) => {
  const data = [
    {
      description: <TitleCard navigation={navigation} />,
    },
    {
      description: <TitleCard navigation={navigation} />,
    },
    {
      description: <TitleCard navigation={navigation} />,
    },
  ];
  return (
    <Timeline
      circleSize={20}
      separator={false}
      circleColor="blue"
      lineColor="gray"
      descriptionStyle={styles.description}
      style={styles.list}
      data={data}
      showTime={false}
      detailContainerStyle={styles.topic}
    />
  );
};

export default Overview;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 20,
  },

  description: {},
});
