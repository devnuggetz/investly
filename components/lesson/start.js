import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Head from '../common/head';
import Safeview from '../common/safeview';
import Topic from './topic';

const Start = ({navigation}) => {
  const [page, setPage] = useState(1);
  const data = [
    {
      topic: 'Hello Hello 1',
      description:
        'Khkjhkhkjhjhjh h jdfhg fgdhjgf hgfhjdg fdgfhjsg dhfg jhsg fhjdg fhjdg fhjg hs',
    },
    {
      topic: 'Hello Hello 2',
      description:
        'Khkjhkhkjhjhjh h jdfhg fgdhjgf hgfhjdg fdgfhjsg dhfg jhsg fhjdg fhjdg fhjg hs',
    },
    {
      topic: 'Hello Hello 3',
      description:
        'Khkjhkhkjhjhjh h jdfhg fgdhjgf hgfhjdg fdgfhjsg dhfg jhsg fhjdg fhjdg fhjg hs',
    },
    {
      topic: 'Hello Hello 4',
      description:
        'Khkjhkhkjhjhjh h jdfhg fgdhjgf hgfhjdg fdgfhjsg dhfg jhsg fhjdg fhjdg fhjg hs',
    },
    {
      topic: 'Hello Hello 5',
      description:
        'Khkjhkhkjhjhjh h jdfhg fgdhjgf hgfhjdg fdgfhjsg dhfg jhsg fhjdg fhjdg fhjg hs',
    },
  ];
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrevious = () => {
    setPage(page - 1);
  };
  const handleEnd = () => {
    navigation.navigate('Home');
  };
  return (
    <Safeview style={styles.container}>
      <View style={styles.heading}>
        <Head navigation={navigation} />
        <Text style={styles.chapter}>What is Stock Market?</Text>
      </View>
      {data.length > 0 && <Topic data={data[page - 1]} />}
      <View>
        {page !== 1 && (
          <TouchableOpacity onPress={handlePrevious}>
            <Text>Previous</Text>
          </TouchableOpacity>
        )}
        {page !== data.length ? (
          <TouchableOpacity onPress={handleNext}>
            <Text>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleEnd}>
            <Text>End</Text>
          </TouchableOpacity>
        )}
      </View>
    </Safeview>
  );
};

export default Start;

const styles = StyleSheet.create({
  chapter: {
    marginBottom: 16,
    fontSize: 18,
    color: 'grey',
  },
  container: {},
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
