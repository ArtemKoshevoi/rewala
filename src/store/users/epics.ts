import { Epic, ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { PayloadAction } from 'typesafe-actions';
import { User } from '../../shared/interfaces/user';
import { ActionTypes as AuthActionTypes } from '../auth/actions';
import { Actions } from './actions';

export const setUserEpic: Epic = (actions$) =>
  actions$.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCEDED, AuthActionTypes.REGISTRATION_SUCCEDED),
    map((action: PayloadAction<AuthActionTypes.LOGIN_SUCCEDED, User>) => action.payload),
    map((user) => Actions.setUsers([user])),
  );

export const setCurrentUserIdEpic: Epic = (actions$) =>
  actions$.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCEDED),
    map((action: PayloadAction<AuthActionTypes.LOGIN_SUCCEDED, User>) => action.payload),
    map((payload) => Actions.setCurrentUsers(payload._id)),
  );

export const removeUserEpic: Epic = (actions$) =>
  actions$.pipe(
    ofType(AuthActionTypes.LOGOUT_SUCCEDED),
    map(() => Actions.removeUser()),
  );

export const epics = [
  setUserEpic,
  setCurrentUserIdEpic,
  removeUserEpic,
];