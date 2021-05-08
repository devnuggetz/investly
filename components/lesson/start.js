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
      example: {
        title: 'This is just an example example',
        example:
          'For example, consider the current situation of Infosys. At the time of writing this, Infosys is facing a succession issue, and most of its senior level management personnel are quitting the company for internal reasons. It seems like the leadership vacuum is weighing down the company’s reputation heavily. As a result, the stock price dropped to Rs.3,000 all the way from Rs.3,500. Whenever there are new reports regarding Infosys management change, the stock prices react to it. Assume there are two traders – T1 and T2. T1’s point of view on Infosys – The stock price is likely to go down further because the company will find it challenging to find a new CEO. If T1 trades as per his point of view, he should be a seller of the Infosys stock. T2, however views the same situation in a different light and therefore has a different point of view – According to him, the stock price of Infosys has over reacted to the succession issue and soon the company will find a great leader, after whose appointment the stock price will move upwards. If T2 trades as per his point of view, he should be a buyer of the Infosys stock. So at, Rs.3, 000 T1 will be a seller, and T2 will be a buyer in Infosys. Now both T1 and T2 will place orders to sell and buy the stocks respectively through their respective stock brokers. The stock broker, obviously routes it to the stock exchange. The stock exchange has to ensure that these two orders are matched, and the trade gets executed. This is the primary job of the stock market – to create a market place for the buyer and seller.',
      },
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
    top: 12,
  },
  previous: {
    position: 'absolute',
    top: 12,
    left: 12,
  },
});
