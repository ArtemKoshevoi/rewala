import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { Actions } from '../store/auth/actions';
import AppRouter from './Router/appRouter';

const theme = createMuiTheme();

const App: React.FC = () => {

  useEffect(() => {
      if (localStorage.getItem('auth-token')) {
        store.dispatch(Actions.setAccessToken(localStorage.getItem('auth-token')));
      }
    },
  );

  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline/>
        <AppRouter/>
      </Provider>
    </MuiThemeProvider>
  );
};

export default App;
