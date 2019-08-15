import { Action } from 'redux';
import { Epic, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { ignoreElements, map } from 'rxjs/operators';
import { redirectToHomepage, redirectToLoginpage } from '../../shared/services/nav.service';
import { Actions as AuthRequestActions, ActionTypes as AuthRequestActionTypes } from '../auth-requests';
import { transferActionEpicFactory } from '../utils/transfer-action';
import { Actions, ActionTypes } from './actions';
import { authService } from '../../shared/services/auth.service';

export const loginEpic: Epic = (action$: Observable<Action>): Observable<Action> => action$.pipe(
  ofType(ActionTypes.LOGIN),
  map(({payload, type}: any) =>
    AuthRequestActions.login.action(payload, type),
  ),
);

export const logoutEpic: Epic = (action$: Observable<Action>): Observable<Action> => action$.pipe(
  ofType(ActionTypes.LOGOUT),
  map(({payload, type}: any) =>
    AuthRequestActions.logout.action(payload, type),
  ),
);

export const getCurrentUserEpic: Epic = (action$: Observable<Action>): Observable<Action> => action$.pipe(
  ofType(ActionTypes.GET_CURRENT_USER),
  map(() => AuthRequestActions.getMe.action()),
);

export const loginSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.loginActionTypes.ACTION_SUCCEEDED,
  Actions.loginSucceded,
);

export const logoutSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.logoutActionTypes.ACTION_SUCCEEDED,
  Actions.logoutSucceded,
);

export const redirectOnLoginSuccessEpic: Epic = (action$: Observable<any>) => action$.pipe(
  ofType(ActionTypes.LOGIN_SUCCEDED),
  map((action) => action.payload),
  map((payload: string) => authService.setToken(payload)),
  map(() => redirectToHomepage()),
  ignoreElements(),
);

export const redirectOnLogoutSuccessEpic: Epic = (action$: Observable<any>) => action$.pipe(
  ofType(ActionTypes.LOGOUT_SUCCEDED),
  map(() => authService.removeToken()),
  map(() => redirectToLoginpage()),
  ignoreElements(),
);