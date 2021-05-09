import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {VictoryLine} from 'victory-native';

import victoryTheme from './styles/victoryTheme';

const PriceChart = ({data}) => {
  return (
    <View>
      <VictoryLine
        theme={victoryTheme}
        height={240}
        width={460}
        style={{
          data: {
            stroke: 'green',
          },
          parent: {
            border: '1px solid #ccc',
          },
        }}
        interpolation="natural"
        data={data}></VictoryLine>
    </View>
  );
};

export default PriceChart;

const styles = StyleSheet.create({});
