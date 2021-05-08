import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {COLORS, images} from '../../../../constants';
import {setCurrentModule} from '../../../../redux/actions/module';

const LeftCard = ({navigation, module, setCurrentModule}) => {
  const title = module.moduleTitle;
  const data = module;
  const handleClick = () => {
    setCurrentModule(data);
    navigation.navigate('Lesson Landing');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{module.lessonCount} lessons</Text>
      </View>
      <Image
        source={module.moduleImage}
        resizeMode="contain"
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    setCurrentModule: data => dispatch(setCurrentModule(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftCard);

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
