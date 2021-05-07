import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, images} from '../../../../constants';

const RightCard = () => {
  return (
    <View style={styles.container}>
      <Text>This is right card</Text>
      <Image
        source={images.flyImage}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
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
