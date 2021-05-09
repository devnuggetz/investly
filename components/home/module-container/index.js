import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LeftModule from '../modules/left';
import RightModule from '../modules/right';

const ModuleContainer = ({navigation}) => {
  return (
    <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <LeftModule navigation={navigation} />
        <RightModule navigation={navigation} />
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
