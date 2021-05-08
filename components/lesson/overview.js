import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TitleCard from './titleCard';
import Timeline from 'react-native-timeline-flatlist';
import {connect} from 'react-redux';

const Overview = ({navigation, module}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const temp = [];
    module.submodule.map(item => {
      temp.push({
        description: <TitleCard navigation={navigation} item={item} />,
      });
    });
    setData(temp);
  }, []);
  const data1 = [
    {
      description: <TitleCard navigation={navigation} />,
    },
    {
      description: <TitleCard navigation={navigation} />,
    },
    {
      description: <TitleCard navigation={navigation} />,
    },
  ];
  return (
    data.length > 0 && (
      <Timeline
        circleSize={20}
        separator={false}
        circleColor="blue"
        lineColor="gray"
        descriptionStyle={styles.description}
        style={styles.list}
        data={data}
        showTime={false}
        detailContainerStyle={styles.topic}
      />
    )
  );
};

const mapStateToProps = ({module}) => {
  console.log(module);
  return {
    module: module.currentModule,
  };
};

export default connect(mapStateToProps)(Overview);

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 20,
  },

  description: {},
});
