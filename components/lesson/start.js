import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Head from '../common/head';
import Safeview from '../common/safeview';
import Topic from './topic';
import Modal from 'react-native-modal';

const Start = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
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
    setShowModal(!showModal);
  };
  const handleQuiz = () => {
    setShowModal(!showModal);
    navigation.navigate('Quiz');
  };
  const handleAgain = () => {
    setShowModal(!showModal);
    setPage(1);
  };
  return (
    <Safeview style={styles.container}>
      <Modal isVisible={showModal}>
        <View style={styles.modal}>
          <Text>Great Job! You just completed this lesson.</Text>
          <Text>Now take this quiz to test your knowledge. 😀 </Text>
          <TouchableOpacity onPress={handleAgain}>
            <Text>Read Again</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleQuiz}>
            <Text>Take Quiz</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.heading}>
        <Head navigation={navigation} />
        <Text style={styles.chapter}>What is Stock Market?</Text>
      </View>
      <View style={styles.content}>
        {data.length > 0 && <Topic data={data[page - 1]} />}
      </View>
      <View style={styles.bottom}>
        {page !== 1 && (
          <TouchableOpacity onPress={handlePrevious} style={styles.previous}>
            <Text>Previous</Text>
          </TouchableOpacity>
        )}
        {page !== data.length ? (
          <TouchableOpacity onPress={handleNext} style={styles.next}>
            <Text>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleEnd} style={styles.next}>
            <Text>End</Text>
          </TouchableOpacity>
        )}
      </View>
    </Safeview>
  );
};

export default Start;

const styles = StyleSheet.create({
  bottom: {
    height: 90,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
    position: 'relative',
  },
  chapter: {
    marginBottom: 16,
    fontSize: 18,
    color: 'grey',
  },
  container: {
    // paddingBottom: 40,
  },
  content: {
    flex: 1,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: 24,
    height: '40%',
    borderRadius: 12,
  },
  next: {
    position: 'absolute',
    right: 12,
    top: 0,
  },
  previous: {
    position: 'absolute',
    top: 0,
    left: 12,
  },
});
