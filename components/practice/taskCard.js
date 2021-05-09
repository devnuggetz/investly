import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, images} from '../../constants';

const TaskCard = ({task}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>{task.title}</Text>
          <Text>{task.points}</Text>
        </View>
        <View style={styles.bottom}>
          <Image
            source={{uri: task.image}}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  banner: {
    height: '90%',
    width: '90%',
  },
  bottom: {
    alignItems: 'flex-end',
    width: '100%',
  },
  container: {
    backgroundColor: COLORS.secondary,
    height: 140,
    width: 220,
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  top: {
    justifyContent: 'flex-start',
    // aligntasks: 'flex-start',
    width: '100%',
  },
});
