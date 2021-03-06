import { Observable } from 'rxjs';
import { Action } from 'typesafe-actions';
import { asyncActionHandlerFactory } from '../../utils/async-action-helper';

import { Epic } from 'redux-observable';
import { InputValue } from '../../../shared/Interfaces';
import { authRequestsService } from '../service';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<{ email: string, password: string }, InputValue, Error>('LOGIN_REQUEST');

const epic: Epic = (actions$: Observable<Action>) => effect(
  actions$,
  (payload) => authRequestsService.login(payload),
);

export { epic, reducer, Actions, ActionTypes };