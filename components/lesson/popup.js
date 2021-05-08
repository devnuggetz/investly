import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Popup = ({handleAgain, handleQuiz}) => {
  return (
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
  );
};

export default Popup;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    padding: 24,
    height: '40%',
    borderRadius: 12,
  },
});
