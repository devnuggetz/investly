import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../constants';
import BottomButton from '../common/buttons/bottom-button';

const Popup = ({handleAgain, handleQuiz}) => {
  return (
    <View style={styles.modal}>
      <View style={styles.message}>
        <Text style={styles.title}>Great job on completing the module.</Text>
        <Text style={styles.subtitle}>
          Now take this quiz to test your understanding of the topic.
        </Text>
      </View>
      <View style={styles.bannerDiv}>
        <Image
          source={images.quizImage}
          resizeMode="contain"
          style={styles.banner}
        />
      </View>
      <View style={styles.buttons}>
        <BottomButton onPress={handleAgain} text="Read Again" />
        <BottomButton onPress={handleQuiz} text="Take Quiz" />
      </View>
    </View>
  );
};

export default Popup;

const styles = StyleSheet.create({
  banner: {
    height: '100%',
    width: '80%',
  },
  bannerDiv: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttons: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  message: {
    // flex: 1,
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    height: '40%',
    borderRadius: 12,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
