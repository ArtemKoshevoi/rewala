import {Epic, ofType} from "redux-observable";
import {ActionTypes} from "./actions";
import {map, tap} from "rxjs/operators";
import {Actions as AuthRequestActions, ActionTypes as AuthRequestActionTypes} from '../auth-requests';


export const loginEpic: Epic = (action$: any) => action$.pipe(
  ofType(ActionTypes.LOGIN),
  map(({payload, type}: any) =>
    AuthRequestActions.login.action(payload, type),
  ),
);

export const loginSuccededEpic: Epic = (action$: any) => action$.pipe(
  ofType(ActionTypes.LOGIN_SUCCEDED),
  tap(res => console.log(res, 111)),
  map((action) => console.log(action))
);

export const loginFaildEpic: Epic = (action$: any) => action$.pipe(
  ofType(ActionTypes.LOGIN_FAILED),
  tap(res => console.log(res, 222)),
  map((action) => console.log(action))
);

export const loginCanceledEpic: Epic = (action$: any) => action$.pipe(
  ofType(ActionTypes.LOGIN_CANCELED),
  tap(res => console.log(res, 333)),
  map((action) => console.log(action))
);




//
// export const redirectOnLoginSuccess: Epic = (action$: Observable<RootActions>) => action$.pipe(
//   ofType(ActionTypes.LOGIN_SUCCEDED),
//   map((action) => action.payload),
//   map((payload: string) => authService.setToken(payload)),
//   map(() => navService.navigate('LoadingScreen')),
//   ignoreElements(),
// );