import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../constants';
import BottomButton from '../common/buttons/bottom-button';

const Popup = ({handleAgain, handleQuiz}) => {
  return (
    <View style={styles.modal}>
      <View style={styles.message}>
        <Text style={styles.title}>Well Done upon completing the quiz.</Text>
        <Text style={styles.subtitle}>You scored 5/10. 😀 </Text>
      </View>
      <View style={styles.bannerDiv}>
        <Image
          source={images.resultHappyImage}
          resizeMode="contain"
          style={styles.banner}
        />
      </View>
      <View style={styles.buttons}>
        <BottomButton onPress={handleAgain} text="Attempt Again" />
        <BottomButton onPress={handleQuiz} text="Continue" />
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
