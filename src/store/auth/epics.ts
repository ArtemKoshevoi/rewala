import {Epic, ofType} from "redux-observable";
import {ActionTypes} from "./actions";
import {map} from "rxjs/operators";


export const loginEpic: Epic = (action$: any) => action$.pipe(
    ofType(ActionTypes.LOGIN),
    map(({ payload, type }: any) =>
        console.log(payload, type)
    ),
);