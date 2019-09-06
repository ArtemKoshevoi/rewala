import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { authService } from '../shared/services/auth.service';
import { Actions } from '../store/auth/actions';
import AppRouter from './Router/appRouter';

const theme = createMuiTheme();

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setAccessToken: (token: string | null) => dispatch(Actions.setAccessToken(token || undefined, 'reload')),
});

type Props = ReturnType<typeof mapDispatchToProps>;

const App: React.FC<Props> = ({setAccessToken}) => {

  useEffect(() => {
    const subscribtion = authService.getToken()
    .subscribe(setAccessToken);

    return () => {
      subscribtion.unsubscribe();
    };
  }, [setAccessToken]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <AppRouter/>
    </MuiThemeProvider>
  );
};

export default connect(null, mapDispatchToProps)(App);
