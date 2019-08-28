import { Epic, ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { Actions as AuthRequestActions } from '../auth-requests';
import { ActionTypes } from './actions';

export const getConfigEpic: Epic = (action$) => action$.pipe(
  ofType(ActionTypes.GET_CONFIG),
  map(() => AuthRequestActions.getConfig.action()),
);