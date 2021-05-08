import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Lesson from '../../components/lesson';
import Home from '../../screens/home';
import Start from '../../components/lesson/start';
import BottomTabs from '../app/bottom';
import Quiz from '../../components/quiz';
import Example from '../../components/example';

const Stack = createStackNavigator();

export default function LessonStack() {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Lesson Landing"
        component={Lesson}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Lesson Start"
        component={Start}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Example"
        component={Example}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
