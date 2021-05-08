import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Head from '../common/head';
import Safeview from '../common/safeview';
import Topic from './topic';
import Modal from 'react-native-modal';
import Popup from './popup';
import BottomButton from '../common/buttons/bottom-button';
import {connect} from 'react-redux';

const Start = ({navigation, submodule}) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setData(submodule.topics);
  }, []);

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
        <Popup handleAgain={handleAgain} handleQuiz={handleQuiz} />
      </Modal>
      <View style={styles.heading}>
        <Head navigation={navigation} />
        <Text style={styles.chapter}>What is Stock Market?</Text>
      </View>
      <View style={styles.content}>
        {data.length > 0 && (
          <Topic data={data[page - 1]} navigation={navigation} />
        )}
      </View>
      <View style={styles.bottom}>
        {page !== 1 && (
          <View style={styles.previous}>
            <BottomButton onPress={handlePrevious} text="PREVIOUS" />
          </View>
        )}

        <View style={styles.next}>
          {page !== data.length ? (
            <BottomButton onPress={handleNext} text="NEXT" />
          ) : (
            <BottomButton onPress={handleEnd} text="END" />
          )}
        </View>
      </View>
    </Safeview>
  );
};

const mapStateToProps = ({module}) => {
  return {
    submodule: module.currentTopic,
  };
};

export default connect(mapStateToProps)(Start);

const styles = StyleSheet.create({
  bottom: {
    height: 90,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.21,
    shadowRadius: 10,
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

  next: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  previous: {
    position: 'absolute',
    top: 12,
    left: 12,
  },
});
