import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import AppRouter from './Router/appRouter';

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
