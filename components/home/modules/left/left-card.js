import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, images} from '../../../../constants';

const LeftCard = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Lesson Landing')}>
      <View style={styles.text}>
        <Text style={styles.title}>What is stock market?</Text>
        <Text style={styles.subtitle}>12 lessons</Text>
      </View>
      <Image
        source={images.thinkImage}
        resizeMode="contain"
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default LeftCard;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
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
