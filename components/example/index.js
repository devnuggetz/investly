import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {icons} from '../../constants';
import Safeview from '../common/safeview';

const Example = ({navigation}) => {
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
        <Text>Example</Text>
      </View>
      <ScrollView></ScrollView>
    </Safeview>
  );
};

const mapStateToProps = ({module}) => {
  console.log(module.currentExample);
  return {};
};

export default connect(mapStateToProps)(Example);

const styles = StyleSheet.create({
  close: {
    height: 30,
    tintColor: 'red',
    position: 'absolute',
    left: -40,
  },
  container: {
    paddingVertical: 16,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    paddingRight: 12,
  },
});
