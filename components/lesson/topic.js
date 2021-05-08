import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Topic = ({data}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topic}>{data.topic}</Text>
      </View>
      <Image
        source={{uri: data.image}}
        style={styles.banner}
        resizeMode="contain"
      />
      <Text style={styles.content}>{data.content}</Text>
    </ScrollView>
  );
};

export default Topic;

const styles = StyleSheet.create({
  banner: {
    height: 200,
  },
  container: {
    paddingHorizontal: 16,
  },
  content: {
    fontSize: 16,
  },
  top: {
    justifyContent: 'center',
  },
  topic: {
    fontSize: 20,
    fontWeight: '600',
  },
});
