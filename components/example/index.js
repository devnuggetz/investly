import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HTML from 'react-native-render-html';
import {connect} from 'react-redux';
import {icons} from '../../constants';
import Safeview from '../common/safeview';

const Example = ({navigation, example}) => {
  return (
    <Safeview style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Image
            source={icons.close}
            style={styles.close}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.example}>Example</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <Image
          source={{uri: example.exampleImage}}
          style={styles.banner}
          resizeMode="contain"
        />
        <HTML source={{html: example.exampleContent}} />
      </ScrollView>
    </Safeview>
  );
};

const mapStateToProps = ({module}) => {
  return {
    example: module.currentExample,
  };
};

export default connect(mapStateToProps)(Example);

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
