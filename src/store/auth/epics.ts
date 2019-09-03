import { Epic, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { ignoreElements, map, tap } from 'rxjs/operators';
import { PayloadAction } from 'typesafe-actions';
import { AuthToken } from '../../shared/interfaces/authToken';
import { LoginFormValues } from '../../shared/interfaces/loginFormValues';
import { UserInput } from '../../shared/interfaces/userInput';
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
  tap(({payload}) => authService.setToken(payload.authToken)),
  map(({payload}) => Actions.setAccessToken(payload.authToken)),
  tap(() => redirectToHomepage()),
);

export const errorMessageOnLoginFailedEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.LOGIN_FAILED),
  ignoreElements(),
);

export const loginFailedEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.loginActionTypes.ACTION_FAILED,
  Actions.loginFailed,
);

export const logoutEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.LOGOUT),
  map(({payload, type}: PayloadAction<ActionTypes.LOGOUT, AuthToken>) =>
    AuthRequestActions.logout.action(payload, type),
  ),
);

export const logoutSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.logoutActionTypes.ACTION_SUCCEEDED,
  Actions.logoutSucceded,
);

export const redirectOnLogoutSuccessEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.LOGOUT_SUCCEDED),
  tap(() => {
    authService.removeToken();
    redirectToLoginpage();
  }),
  ignoreElements(),
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
  tap(({payload}) => authService.setToken(payload.authToken)),
  map(({payload}) => Actions.setAccessToken(payload.authToken)),
  tap(() => redirectToHomepage()),
);

export const epics = [
  loginEpic,
  loginSucceededEpic,
  redirectOnLoginSuccessEpic,
  errorMessageOnLoginFailedEpic,
  loginFailedEpic,
  logoutEpic,
  logoutSucceededEpic,
  redirectOnLogoutSuccessEpic,
  registrationEpic,
  registrationSucceededEpic,
  redirectOnRegistrationSuccessEpic,
];