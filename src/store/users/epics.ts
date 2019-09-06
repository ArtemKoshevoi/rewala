import { Epic, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { PayloadAction } from 'typesafe-actions';
import { User } from '../../shared/interfaces/user';
import { ActionTypes as AuthActionTypes } from '../auth/actions';
import { RootActions, RootState } from '../index';
import { Actions } from './actions';
import { getCurrentUserId } from './selectors';

export const setUserEpic: Epic = (actions$) =>
  actions$.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCEDED, AuthActionTypes.REGISTRATION_SUCCEDED, AuthActionTypes.GET_CURRENT_USER_SUCCEDED),
    map((action: PayloadAction<AuthActionTypes.LOGIN_SUCCEDED, User>) => action.payload),
    map((user) => Actions.setUsers([user])),
  );

export const setCurrentUserIdEpic: Epic = (actions$) =>
  actions$.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCEDED, AuthActionTypes.REGISTRATION_SUCCEDED, AuthActionTypes.GET_CURRENT_USER_SUCCEDED),
    map((action: PayloadAction<AuthActionTypes.LOGIN_SUCCEDED, User>) => action.payload),
    map((payload) => Actions.setCurrentUsers(payload._id)),
  );

export const removeUserEpic: Epic = (action$: Observable<RootActions>, state$: Observable<RootState>) =>
  action$.pipe(
  ofType(AuthActionTypes.LOGOUT_SUCCEDED),
  switchMap(() =>
    state$.pipe(
      map((state) => getCurrentUserId(state)),
      map((userId) => ({
        currentUserId: userId,
      })),
      take(1),
    ),
  ),
  map((currentUserId) => Actions.removeUser(currentUserId)),
);

export const epics = [
  setUserEpic,
  setCurrentUserIdEpic,
  removeUserEpic,
];