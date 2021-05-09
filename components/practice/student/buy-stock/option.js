import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Option = ({isSelected, text}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isSelected ? '#3292B1' : '#fafafa',
        },
      ]}>
      <Text style={{color: isSelected ? 'white' : 'black'}}>{text}</Text>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    paddingHorizontal: 10,
    marginHorizontal: 6,
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.21,
    shadowRadius: 10,
    elevation: 16,
  },
});
