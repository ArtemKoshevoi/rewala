import { Action } from 'redux';
import { Epic, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { ignoreElements, map, tap } from 'rxjs/operators';
import { authService } from '../../shared/services/auth.service';
import { redirectToHomepage, redirectToLoginpage } from '../../shared/services/nav.service';
import { Actions as AuthRequestActions, ActionTypes as AuthRequestActionTypes } from '../auth-requests';
import { transferActionEpicFactory } from '../utils/transfer-action';
import { Actions, ActionTypes } from './actions';

export const loginEpic: Epic = (action$: Observable<Action>): Observable<Action> => action$.pipe(
  ofType(ActionTypes.LOGIN),
  map(({payload, type}: any) =>
    AuthRequestActions.login.action(payload, type),
  ),
);

export const loginSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.loginActionTypes.ACTION_SUCCEEDED,
  Actions.loginSucceded,
);

export const redirectOnLoginSuccessEpic: Epic = (action$: Observable<any>) => action$.pipe(
  ofType(ActionTypes.LOGIN_SUCCEDED),
  map(({payload}) => {
    if (payload.data.login && payload.data.login.hasOwnProperty('authToken')) {
      authService.setToken(payload.data.login.authToken);
    }
  }),
  map(() => redirectToHomepage()),
  ignoreElements(),
);

export const loginFailedEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.loginActionTypes.ACTION_FAILED,
  Actions.loginFailed,
);

export const logoutEpic: Epic = (action$: Observable<Action>): Observable<Action> => action$.pipe(
  ofType(ActionTypes.LOGOUT),
  map(({payload, type}: any) =>
    AuthRequestActions.logout.action(payload, type),
  ),
);

export const logoutSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.logoutActionTypes.ACTION_SUCCEEDED,
  Actions.logoutSucceded,
);

export const redirectOnLogoutSuccessEpic: Epic = (action$: Observable<any>) => action$.pipe(
  ofType(ActionTypes.LOGOUT_SUCCEDED),
  map(() => authService.removeToken()),
  map(() => redirectToLoginpage()),
  ignoreElements(),
);

export const getCurrentUserEpic: Epic = (action$: Observable<Action>): Observable<Action> => action$.pipe(
  ofType(ActionTypes.GET_CURRENT_USER),
  map(() => AuthRequestActions.getMe.action()),
);

export const registrationEpic: Epic = (action$: Observable<Action>): Observable<Action> => action$.pipe(
  ofType(ActionTypes.REGISTRATION),
  tap(res => console.log(111, res)),
  map(({payload, type}: any) =>
    AuthRequestActions.registration.action(payload, type),
  ),
);

export const registrationSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.registrationActionTypes.ACTION_SUCCEEDED,
  Actions.registrationSucceded,
);

export const redirectOnRegistrationSuccessEpic: Epic = (action$: Observable<any>) => action$.pipe(
  ofType(ActionTypes.REGISTRATION_SUCCEDED),
  map(({payload}) => {
    if (payload.data.login && payload.data.login.hasOwnProperty('authToken')) {
      authService.setToken(payload.data.login.authToken);
    }
  }),
  map(() => redirectToHomepage()),
  ignoreElements(),
);