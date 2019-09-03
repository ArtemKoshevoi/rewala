import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './Router/appRouter';
import store from '../store';

const theme = createMuiTheme();

const App: React.FC = () => {
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
