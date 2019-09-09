import { Epic, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, ignoreElements, map, tap } from 'rxjs/operators';
import { PayloadAction } from 'typesafe-actions';
import { LoginFormValues } from '../../shared/interfaces/loginFormValues';
import { RegistrationFormValues } from '../../shared/interfaces/registrationFormValues';
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

export const setAccessTokenEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.LOGIN_SUCCEDED),
  map(({payload, meta}) => Actions.setAccessToken(payload.authToken, ActionTypes.LOGIN_SUCCEDED)),
);

export const errorMessageOnLoginFailedEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.LOGIN_FAILED),
  ignoreElements(),
);

export const loginFailedEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.loginActionTypes.ACTION_FAILED,
  Actions.loginFailed,
);

export const redirectOnLoginSuccessEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.SET_ACCESS_TOKEN),
  tap((action) => {
    authService.setToken(action.payload);
    redirectToHomepage();
  }),
  filter(({meta}) => meta === 'reload'),
  map(() =>  Actions.getCurrentUser()),
);

export const getCurrentUserEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.GET_CURRENT_USER),
  map(() => AuthRequestActions.getMe.action()),
);

export const getCurrentUserSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.getMeActionTypes.ACTION_SUCCEEDED,
  Actions.getCurrentUserSucceded,
);

export const logoutEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.LOGOUT),
  map(() => AuthRequestActions.logout.action()),
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
  map(({payload, type}: PayloadAction<ActionTypes.REGISTRATION, RegistrationFormValues>) =>
    AuthRequestActions.registration.action(payload, type),
  ),
);

export const registrationSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.registrationActionTypes.ACTION_SUCCEEDED,
  Actions.registrationSucceded,
);

export const redirectOnRegistrationSuccessEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.REGISTRATION_SUCCEDED),
  map(({payload, meta}) => Actions.setAccessToken(payload.authToken, ActionTypes.REGISTRATION_SUCCEDED)),
);

export const epics = [
  loginEpic,
  loginSucceededEpic,
  redirectOnLoginSuccessEpic,
  setAccessTokenEpic,
  errorMessageOnLoginFailedEpic,
  loginFailedEpic,
  logoutEpic,
  logoutSucceededEpic,
  redirectOnLogoutSuccessEpic,
  registrationEpic,
  registrationSucceededEpic,
  redirectOnRegistrationSuccessEpic,
  getCurrentUserEpic,
  getCurrentUserSucceededEpic,
];