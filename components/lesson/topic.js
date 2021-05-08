import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import HTML from 'react-native-render-html';
import ExampleButton from '../common/buttons/example-button';

const Topic = ({data, navigation}) => {
  console.log(data.topicImage);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.top}>
        <Text style={styles.topic}>{data.topicTitle}</Text>
      </View>
      <Image
        source={{
          uri: data.topicImage,
        }}
        style={styles.banner}
        resizeMode="contain"
      />
      <HTML source={{html: data.content}} />
      {data.example && (
        <View style={styles.example}>
          <Text style={styles.exampleTitle}>
            Read this example to get a better understanding of the topic
          </Text>
          <ExampleButton
            text="Read Example"
            onPress={() => navigation.push('Example')}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Topic;

const styles = StyleSheet.create({
  banner: {
    height: 200,
    marginVertical: 8,
  },
  container: {
    paddingHorizontal: 16,
  },
  content: {
    fontSize: 16,
  },
  example: {
    marginTop: 16,
    paddingTop: 8,
  },
  exampleTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  top: {
    justifyContent: 'center',
  },
  topic: {
    fontSize: 20,
    fontWeight: '600',
  },
});
