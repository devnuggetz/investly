import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TitleCard = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Lesson Start')}>
      <View>
        <Text style={styles.title}>This is title</Text>
        <Text style={styles.subtitle}>This is Subtitle</Text>
      </View>
      <View>
        <Text>continue</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TitleCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    width: '100%',
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
  },
  title: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
});
