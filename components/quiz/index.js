import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Safeview from '../common/safeview';
import Modal from 'react-native-modal';

const Quiz = ({navigation}) => {
  const [selected, setSelected] = useState('');
  const [ques, setQues] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handleNext = () => {
    console.log('Next');
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
  };
  const handle1 = () => {
    setSelected('Option 1');
  };
  const handle2 = () => {
    setSelected('Option 2');
  };
  const handle3 = () => {
    setSelected('Option 3');
  };
  const handle4 = () => {
    setSelected('Option 4');
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
        <View style={styles.modal}>
          <Text>Well Done upon completing the quiz.</Text>
          <Text>You scored 5/10. 😀 </Text>
          <TouchableOpacity onPress={handleAgain}>
            <Text>Attempt Again</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleQuiz}>
            <Text>Continue</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.count}>
        <Text style={styles.number}>
          {ques}/{data.length}
        </Text>
      </View>

      <View style={styles.question}>
        <Text style={styles.questionText}>
          What is apple in your opinion young old man and woman?
        </Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.option} onPress={handle1}>
          <View
            style={[
              styles.check,
              {backgroundColor: selected === 'Option 1' ? 'green' : 'gray'},
            ]}></View>
          <Text>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handle2}>
          <View
            style={[
              styles.check,
              {backgroundColor: selected === 'Option 2' ? 'green' : 'gray'},
            ]}></View>
          <Text>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handle3}>
          <View
            style={[
              styles.check,
              {backgroundColor: selected === 'Option 3' ? 'green' : 'gray'},
            ]}></View>
          <Text>Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handle4}>
          <View
            style={[
              styles.check,
              {backgroundColor: selected === 'Option 4' ? 'green' : 'gray'},
            ]}></View>
          <Text>Option 4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        {ques !== 1 && (
          <TouchableOpacity onPress={handlePrevious}>
            <Text>Previous</Text>
          </TouchableOpacity>
        )}
        {ques !== data.length ? (
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
  modal: {
    backgroundColor: 'white',
    padding: 24,
    height: '40%',
    borderRadius: 12,
  },
  number: {
    fontSize: 24,
    fontWeight: '600',
  },
  option: {
    padding: 18,
    flexDirection: 'row',
  },
  options: {
    paddingVertical: 24,
    flex: 1,
  },
  question: {
    width: '80%',
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
