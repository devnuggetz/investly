import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';

import {Provider} from 'react-redux';
import BottomTabs from './navigation/app/bottom';
import {store} from './redux/store';

const App = props => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
