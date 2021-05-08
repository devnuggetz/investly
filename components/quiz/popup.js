import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Popup = ({handleAgain, handleQuiz}) => {
  return (
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
