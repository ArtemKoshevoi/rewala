import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from '../../router/AppRouter/appRouter';
import store from '../../store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CssBaseline/>
      <AppRouter/>
    </Provider>
  );
};

export default App;
