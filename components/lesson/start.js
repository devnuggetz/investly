import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Head from '../common/head';
import Safeview from '../common/safeview';
import Topic from './topic';
import Modal from 'react-native-modal';
import Popup from './popup';
import BottomButton from '../common/buttons/bottom-button';

const Start = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const data = [
    {
      topic: 'What are the things to know before investing',
      description:
        'Khkjhkhkjhjhjh h jdfhg fgdhjgf hgfhjdg fdgfhjsg dhfg jhsg fhjdg fhjdg fhjg hs',
      content:
        'Investments optimally should have a strong mix of all asset classes. It is smart to diversify your investment among the various asset classes. The technique of allocating money across assets classes is termed as ‘Asset Allocation’. For instance, a young professional may take a higher amount of risk given his age and years of investment available to him. Typically investors should allocate around 70% of their investable amount in Equity, 20% in Precious metals, and the rest in Fixed income investments. Alongside the same rationale, a retired person could invest 80 per cent of his saving in fixed income, 10 per cent in equity markets and 10 per cent in precious metals. The ratio in which one allocates investments across asset classes depends on the investor’s risk appetite.',
      image:
        'https://zerodha.com/varsity/wp-content/uploads/2014/07/Ch1-title1.jpg',
    },
    {
      topic: 'What are the things to know before investing',
      description:
        'Khkjhkhkjhjhjh h jdfhg fgdhjgf hgfhjdg fdgfhjsg dhfg jhsg fhjdg fhjdg fhjg hs',
      content:
        'Investments optimally should have a strong mix of all asset classes. It is smart to diversify your investment among the various asset classes. The technique of allocating money across assets classes is termed as ‘Asset Allocation’. For instance, a young professional may take a higher amount of risk given his age and years of investment available to him. Typically investors should allocate around 70% of their investable amount in Equity, 20% in Precious metals, and the rest in Fixed income investments. Alongside the same rationale, a retired person could invest 80 per cent of his saving in fixed income, 10 per cent in equity markets and 10 per cent in precious metals. The ratio in which one allocates investments across asset classes depends on the investor’s risk appetite.',
      image:
        'https://zerodha.com/varsity/wp-content/uploads/2014/07/Ch1-title1.jpg',
    },
    {
      topic: 'What are the things to know before investing',
      description:
        'Khkjhkhkjhjhjh h jdfhg fgdhjgf hgfhjdg fdgfhjsg dhfg jhsg fhjdg fhjdg fhjg hs',
      content:
        'Investments optimally should have a strong mix of all asset classes. It is smart to diversify your investment among the various asset classes. The technique of allocating money across assets classes is termed as ‘Asset Allocation’. For instance, a young professional may take a higher amount of risk given his age and years of investment available to him. Typically investors should allocate around 70% of their investable amount in Equity, 20% in Precious metals, and the rest in Fixed income investments. Alongside the same rationale, a retired person could invest 80 per cent of his saving in fixed income, 10 per cent in equity markets and 10 per cent in precious metals. The ratio in which one allocates investments across asset classes depends on the investor’s risk appetite.',
      image:
        'https://zerodha.com/varsity/wp-content/uploads/2014/07/Ch1-title1.jpg',
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
        <Popup handleAgain={handleAgain} handleQuiz={handleQuiz} />
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

export default Start;

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
    top: 0,
  },
  previous: {
    position: 'absolute',
    top: 0,
    left: 12,
  },
});
