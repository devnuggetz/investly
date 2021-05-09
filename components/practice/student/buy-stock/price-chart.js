import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  VictoryScatter,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryVoronoiContainer,
} from 'victory-native';
import {colors} from '../constants';
import victoryTheme from '../styles/victoryTheme';

const PriceChart = ({data}) => {
  return (
    <View>
      <VictoryLine
        theme={victoryTheme}
        height={240}
        width={460}
        style={{
          data: {
            stroke: colors.profit,
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
