import React, {useEffect, useLayoutEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HTML from 'react-native-render-html';
import {icons} from '../../constants';
import Safeview from '../common/safeview';

const Instruction = ({route, navigation}) => {
  const task = route.params.task;
  return (
    <Safeview style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            style={styles.close}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.example}>Instruction</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <Image
          source={{uri: task.image}}
          style={styles.banner}
          resizeMode="contain"
        />
        <HTML source={{html: task.instruction}} />
      </ScrollView>
    </Safeview>
  );
};

export default Instruction;

const styles = StyleSheet.create({
  banner: {
    height: 200,
    marginVertical: 12,
  },
  close: {
    height: 30,
    width: 30,
    tintColor: 'red',
  },
  container: {
    paddingVertical: 16,
  },
  content: {
    paddingHorizontal: 16,
  },
  example: {
    fontSize: 18,
    fontWeight: '600',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
});
