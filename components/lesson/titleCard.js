import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {setCurrentTopic} from '../../redux/actions/module';

const TitleCard = ({navigation, item, setCurrentTopic}) => {
  const handleClick = () => {
    setCurrentTopic(item);
    navigation.navigate('Lesson Start');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <View style={styles.left}>
        <Text style={styles.title}>{item.submoduleTitle}</Text>
        <Text style={styles.subtitle}>{item.submoduleSubtitle}</Text>
      </View>
      <View>
        <Text>continue</Text>
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    setCurrentTopic: data => dispatch(setCurrentTopic(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TitleCard);

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
  left: {
    width: '75%',
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
