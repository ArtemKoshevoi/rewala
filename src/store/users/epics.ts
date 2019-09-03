import { Epic, ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { PayloadAction } from 'typesafe-actions';
import { UserValues } from '../../shared/interfaces/userValues';
import { ActionTypes as AuthActionTypes } from '../auth/actions';
import { Actions } from './actions';

export const setCurrentUserEpic: Epic = (actions$) =>
  actions$.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCEDED, AuthActionTypes.REGISTRATION_SUCCEDED),
    map((action: PayloadAction<AuthActionTypes.LOGIN_SUCCEDED, UserValues>) => action.payload),
    map((user) => Actions.setUsers([user])),
  );

export const removeCurrentUserEpic: Epic = (actions$) =>
  actions$.pipe(
    ofType(AuthActionTypes.LOGOUT_SUCCEDED),
    map(() => Actions.removeUser()),
  );

export const epics = [
  setCurrentUserEpic,
  removeCurrentUserEpic,
];