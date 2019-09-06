import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { authToken } from '../shared/variables/authToken';
import store from '../store';
import { Actions } from '../store/auth/actions';
import AppRouter from './Router/appRouter';

const theme = createMuiTheme();

const App: React.FC = () => {

  useEffect(() => {
      if (localStorage.getItem(authToken)) {
        store.dispatch(Actions.setAccessToken(localStorage.getItem(authToken)));
        store.dispatch(Actions.getCurrentUser());
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
