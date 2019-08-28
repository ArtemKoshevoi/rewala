import { Epic, ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { PayloadAction } from 'typesafe-actions';
import { UserValues } from '../../shared/interfaces/userValues';
import { ActionTypes as AuthActionTypes } from '../auth/actions';
import { Actions } from './actions';

export const setCurrentUserEpic: Epic = (actions$) =>
  actions$.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCEDED),
    map((action: PayloadAction<AuthActionTypes.LOGIN_SUCCEDED, UserValues>) => action.payload),
    map((user) => Actions.setUsers([user])),
  );

export const epics = [
  setCurrentUserEpic,
];