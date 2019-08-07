import { asyncActionHandlerFactory } from '../../utils/async-action-helper';
import { Action } from 'typesafe-actions';
import { Observable } from 'rxjs';

import { authRequestsService } from '../service';
import {Epic} from "redux-observable";

const {
    effect,
    reducer,
    ActionTypes,
    Actions,
} = asyncActionHandlerFactory<{ email: string, password: string }, any, Error>('LOGIN_REQUEST');

const epic: Epic = (actions$: Observable<Action>) => effect(
    actions$,
    (payload) => authRequestsService.login(payload),
);

export { epic, reducer, Actions, ActionTypes };