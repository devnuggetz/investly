import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Lesson from '../../components/lesson';
import Home from '../../screens/home';

const Stack = createStackNavigator();

export default function LessonStack() {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Lesson Landing"
        component={Lesson}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
