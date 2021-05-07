import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LeftModule from '../modules/left';
import RightModule from '../modules/right';

const ModuleContainer = () => {
  return (
    <ScrollView style={{width: '100%'}}>
      <View style={styles.container}>
        <LeftModule />
        <RightModule />
      </View>
    </ScrollView>
  );
};

export default ModuleContainer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
});
