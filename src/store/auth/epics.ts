import {Epic, ofType} from "redux-observable";
import {ActionTypes} from "./actions";
import {map, mergeMap, tap} from "rxjs/operators";
import {Actions as AuthRequestActions} from '../auth-requests';
import {Observable} from "rxjs";
import {Action} from "redux";


export const loginEpic: Epic = (action$: Observable<Action> ): Observable<Action> => action$.pipe(
  ofType(ActionTypes.LOGIN),
  map(({payload, type}: any) =>
    AuthRequestActions.login.action(payload, type),
  ),
);

export const logoutEpic: Epic = (action$: Observable<Action> ): Observable<Action> => action$.pipe(
  ofType(ActionTypes.LOGOUT),
  map(({payload, type}: any) =>
    AuthRequestActions.logout.action(payload, type),
  ),
);



export const getCurrentUserEpic: Epic = (action$: Observable<Action>): Observable<Action> => action$.pipe(
  ofType(ActionTypes.GET_CURRENT_USER),
  map(() => AuthRequestActions.getMe.action()),
);