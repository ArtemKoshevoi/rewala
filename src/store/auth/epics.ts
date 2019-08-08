import {Epic, ofType} from "redux-observable";
import {ActionTypes} from "./actions";
import {map, tap} from "rxjs/operators";
import {Actions as AuthRequestActions, ActionTypes as AuthRequestActionTypes} from '../auth-requests';
import {Observable} from "rxjs";
import {Action} from "redux";


export const loginEpic: Epic = (action$: Observable<Action> ): Observable<Action> => action$.pipe(
  ofType(ActionTypes.LOGIN),
  map(({payload, type}: any) =>
    AuthRequestActions.login.action(payload, type),
  ),
  tap(res => console.log(res))
);
