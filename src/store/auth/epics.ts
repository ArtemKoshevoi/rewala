import { Epic, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, ignoreElements, map, tap } from 'rxjs/operators';
import { PayloadAction } from 'typesafe-actions';
import { LoginFormValues } from '../../shared/interfaces/loginFormValues';
import { LogOutValue } from '../../shared/interfaces/logOutValue';
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
  filter((action) => action.payload.data.login),
  tap(({payload}) => authService.setToken(payload.data.login.authToken)),
  map(({payload}) => Actions.setAccessToken(payload.data.login.authToken)),
  tap(() => redirectToHomepage()),
);

export const getCurrentUserOnTokenSetEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.SET_ACCESS_TOKEN),
  filter(action => !!action.payload),
  map(() => Actions.getCurrentUser()),
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

export const getCurrentUserSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.getMeActionTypes.ACTION_SUCCEEDED,
  Actions.getCurrentUserSucceded,
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
  filter((action) => action.payload.data.registration),
  tap(({payload}) => authService.setToken(payload.data.registration.authToken)),
  map(({payload}) => Actions.setAccessToken(payload.data.registration.authToken)),
  tap(() => redirectToHomepage()),
);

export const getConfigEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.GET_CONFIG),
  map(() => AuthRequestActions.getConfig.action()),
);