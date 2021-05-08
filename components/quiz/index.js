import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Safeview from '../common/safeview';
import Modal from 'react-native-modal';
import Popup from './popup';

const Quiz = ({navigation}) => {
  const [selected, setSelected] = useState('');
  const [ques, setQues] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [ans, setAns] = useState([]);
  const handleNext = () => {
    setQues(ques + 1);
  };
  const handlePrevious = () => {
    setQues(ques - 1);
  };
  const handleEnd = () => {
    setShowModal(!showModal);
  };

  const handleQuiz = () => {
    setShowModal(!showModal);
    navigation.navigate('Lesson Landing');
  };
  const handleAgain = () => {
    setShowModal(!showModal);
    setQues(1);
    setAns([]);
  };
  const handle1 = () => {
    setSelected(data[ques - 1].options[0]);
    const temp = ans;
    temp[ques - 1] = data[ques - 1].options[0];
    setAns(temp);
  };
  const handle2 = () => {
    setSelected(data[ques - 1].options[1]);
    const temp = ans;
    temp[ques - 1] = data[ques - 1].options[1];
    setAns(temp);
  };
  const handle3 = () => {
    setSelected(data[ques - 1].options[2]);
    const temp = ans;
    temp[ques - 1] = data[ques - 1].options[2];
    setAns(temp);
  };
  const handle4 = () => {
    setSelected(data[ques - 1].options[3]);
    const temp = ans;
    temp[ques - 1] = data[ques - 1].options[3];
    setAns(temp);
  };

  const data = [
    {
      word: 'Abridged',
      definition:
        'shortened or condensed especially by the omission of words or passages',
      level: 'Beginner',
      category: 'ep',
      options: ['Adroit', 'Motley', 'Scant', 'Abridged'],
    },
    {
      word: 'Acrimonious',
      definition: 'Angry and bitter',
      level: 'Intermediate',
      category: 'ep',
      options: ['Slovenly', 'Jaunty', 'Clairvoyant', 'Acrimonious'],
    },
    {
      word: 'Acrimony',
      definition: 'Angry and bitter feelings',
      level: 'Advance',
      category: 'ep',
      options: ['Serendipity', 'Obnoxious', 'Ludicrous', 'Acrimony'],
    },
    {
      word: 'Acute',
      definition:
        'To a severe or intense degree, critical, drastic, dire, dreadful',
      level: 'Beginner',
      category: 'cb',
      options: ['Obnoxious', 'Phantom', 'Blasphemy', 'Acute'],
    },
    {
      word: 'Adamant',
      definition: 'Stubborn, determined not to change his mind',
      level: 'Advance',
      category: 'cb',
      options: ['Dichotomy', 'Chicanery', 'Scuttle', 'Adamant'],
    },
    {
      word: 'Adroit',
      definition: 'Clever or skillful',
      level: 'Intermediate',
      category: 'sti',
      options: ['Tranquil', 'Chicanery', 'Scuttle', 'Adroit'],
    },
    {
      word: 'Affluent',
      definition: 'Having a great deal of money, wealthy, opulent',
      level: 'Intermediate',
      category: 'cb',
      options: ['Staunch', 'Adroit', 'Scuttle', 'Affluent'],
    },
    {
      word: 'Ailing',
      definition: 'In poor health',
      level: 'Beginner',
      category: 'sti',
      options: ['Staunch', 'Ally', 'Stratum', 'Ailing'],
    },
    {
      word: 'Alienated',
      definition: 'Make (someone) feel isolated or estranged',
      level: 'Beginner',
      category: 'ep',
      options: ['Tranquil', 'Amidst', 'Staunch', 'Alienated'],
    },
    {
      word: 'Allude',
      definition: 'Refer to, suggest, hint at, mention',
      level: 'Intermediate',
      category: 'cb',
      options: ['Allude', 'Chicanery', 'Sojourn', 'Alienated'],
    },
  ];
  return (
    <Safeview style={styles.container}>
      <Modal isVisible={showModal}>
        <Popup handleAgain={handleAgain} handleQuiz={handleQuiz} />
      </Modal>
      <View style={styles.count}>
        <Text style={styles.number}>
          {ques}/{data.length}
        </Text>
      </View>

      <View style={styles.question}>
        <Text style={styles.questionText}>
          What is the meaning of {data[ques - 1].word}?
        </Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.option} onPress={handle1}>
          <View
            style={[
              styles.check,
              {
                backgroundColor:
                  ans[ques - 1] === data[ques - 1].options[0]
                    ? 'green'
                    : 'gray',
              },
            ]}></View>
          <Text>{data[ques - 1].options[0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handle2}>
          <View
            style={[
              styles.check,
              {
                backgroundColor:
                  ans[ques - 1] === data[ques - 1].options[1]
                    ? 'green'
                    : 'gray',
              },
            ]}></View>
          <Text>{data[ques - 1].options[1]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handle3}>
          <View
            style={[
              styles.check,
              {
                backgroundColor:
                  ans[ques - 1] === data[ques - 1].options[2]
                    ? 'green'
                    : 'gray',
              },
            ]}></View>
          <Text>{data[ques - 1].options[2]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handle4}>
          <View
            style={[
              styles.check,
              {
                backgroundColor:
                  ans[ques - 1] === data[ques - 1].options[3]
                    ? 'green'
                    : 'gray',
              },
            ]}></View>
          <Text>{data[ques - 1].options[3]}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        {ques !== 1 && (
          <View style={styles.previous}>
            <TouchableOpacity onPress={handlePrevious}>
              <Text>Previous</Text>
            </TouchableOpacity>
          </View>
        )}
        {ques !== data.length ? (
          <View style={styles.next}>
            <TouchableOpacity onPress={handleNext}>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.next}>
            <TouchableOpacity onPress={handleEnd}>
              <Text>End</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Safeview>
  );
};

export default Quiz;

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
    bottom: 0,
  },
  check: {
    height: 15,
    width: 15,
    borderWidth: 1,
    marginHorizontal: 6,
    borderRadius: 8,
  },
  container: {},
  count: {
    width: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  number: {
    fontSize: 24,
    fontWeight: '600',
  },
  option: {
    padding: 18,
    flexDirection: 'row',
    shadowColor: '#FAF8FF',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1.48,
    elevation: 2,
    marginVertical: 6,
    backgroundColor: '#FAF8FF',
    borderRadius: 12,
  },
  options: {
    paddingVertical: 24,
    flex: 1,
  },
  question: {
    width: '80%',
    height: '10%',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '400',
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
