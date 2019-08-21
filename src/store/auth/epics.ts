import { Epic, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { ignoreElements, map, tap } from 'rxjs/operators';
import { PayloadAction } from 'typesafe-actions';
import { LoginFormValues, LogOutValue, UserInput } from '../../shared/Interfaces';
import { authService } from '../../shared/services/auth.service';
import { redirectToHomepage, redirectToLoginpage } from '../../shared/services/nav.service';
import { Actions as AuthRequestActions, ActionTypes as AuthRequestActionTypes } from '../auth-requests';
import { RootActions } from '../index';
import { transferActionEpicFactory } from '../utils/transfer-action';
import { Actions, ActionTypes } from './actions';

export const loginEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.LOGIN),
  map(({payload, type}: PayloadAction<ActionTypes.LOGIN, LoginFormValues>) =>
    AuthRequestActions.login.action(payload, type),
  ),
);

export const loginSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.loginActionTypes.ACTION_SUCCEEDED,
  Actions.loginSucceded,
);

export const redirectOnLoginSuccessEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.LOGIN_SUCCEDED),
  map(({payload}) => {
    if (payload.data.login) {
      authService.setToken(payload.data.login.authToken);
    }
  }),
  tap(() => redirectToHomepage()),
  ignoreElements(),
);

export const loginFailedEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.loginActionTypes.ACTION_FAILED,
  Actions.loginFailed,
);

export const logoutEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.LOGOUT),
  map(({payload, type}: PayloadAction<ActionTypes.LOGOUT, LogOutValue>) =>
    AuthRequestActions.logout.action(payload, type),
  ),
);

export const logoutSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.logoutActionTypes.ACTION_SUCCEEDED,
  Actions.logoutSucceded,
);

export const redirectOnLogoutSuccessEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.LOGOUT_SUCCEDED),
  map(() => authService.removeToken()),
  tap(() => redirectToLoginpage()),
  ignoreElements(),
);

export const getCurrentUserEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.GET_CURRENT_USER),
  map(() => AuthRequestActions.getMe.action()),
);

export const registrationEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.REGISTRATION),
  map(({payload, type}: PayloadAction<ActionTypes.REGISTRATION, UserInput>) =>
    AuthRequestActions.registration.action(payload, type),
  ),
);

export const registrationSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.registrationActionTypes.ACTION_SUCCEEDED,
  Actions.registrationSucceded,
);

export const redirectOnRegistrationSuccessEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.REGISTRATION_SUCCEDED),
  map(({payload}) => {
    if (payload.data.login) {
      authService.setToken(payload.data.login.authToken);
    }
  }),
  tap(() => redirectToHomepage()),
  ignoreElements(),
);

export const getConfigEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.GET_CONFIG),
  map(() => AuthRequestActions.getConfig.action()),
  );