import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, images} from '../../../../constants';

const RightCard = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Lesson Landing')}>
      <View style={styles.text}>
        <Text style={styles.title}>What is stock market?</Text>
        <Text style={styles.subtitle}>12 lessons</Text>
      </View>

      <Image
        source={images.flyImage}
        resizeMode="contain"
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default RightCard;

const styles = StyleSheet.create({
  container: {
    height: 240,
    // width: '50%',
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    height: '60%',
    bottom: 0,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
  },
  text: {
    position: 'absolute',
    textAlign: 'right',
    top: 8,
    left: 8,
  },
  title: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
