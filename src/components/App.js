import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';
import Theme from './Theme';
import Routes from './Routes';

import 'fontsource-roboto';

const App = () => {
  return (
    <Provider store={store}>
      <Theme>
        <Routes />
      </Theme>
    </Provider>
  );
};

export default App;
