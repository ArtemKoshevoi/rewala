import { Observable } from 'rxjs';
import { Action } from 'typesafe-actions';
import { asyncActionHandlerFactory } from '../../utils/async-action-helper';

import { Epic } from 'redux-observable';
import { UserInput } from '../../../shared/Interfaces';
import { authRequestsService } from '../service';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<UserInput, any, Error>('REGISTRATION_REQUEST');

const epic: Epic = (actions$: Observable<Action>) => effect(
  actions$,
  (payload) => authRequestsService.registration(payload),
);

export { epic, reducer, Actions, ActionTypes };