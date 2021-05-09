import React, {useLayoutEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Practice from '../../screens/practice';
import BuyStock from '../../components/practice/student/buy-stock';
import SellStock from '../../components/practice/student/sell-stock';
import Instruction from '../../components/practice/instruction';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
const Stack = createStackNavigator();

export default function PracticeStack({navigation, route}) {
  useLayoutEffect(() => {
    console.log(getFocusedRouteNameFromRoute(route));
    if (
      getFocusedRouteNameFromRoute(route) === 'Practice' ||
      getFocusedRouteNameFromRoute(route) === undefined
    ) {
      navigation.setOptions({
        tabBarVisible: true,
      });
    } else {
      navigation.setOptions({
        tabBarVisible: false,
      });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Practice"
        component={Practice}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Buy Stock"
        component={BuyStock}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sell Stock"
        component={SellStock}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Instruction"
        component={Instruction}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
