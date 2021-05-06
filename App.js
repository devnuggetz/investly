import React from 'react';
import {Text} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './redux/store';

const App = props => {
  return (
    <Provider store={store}>
      <Text>This is home</Text>
    </Provider>
  );
};

export default App;
