import { Epic } from 'redux-observable';
import { Action } from 'typesafe-actions';
import { Observable } from 'rxjs';
import { asyncActionHandlerFactory } from '../../utils/async-action-helper';
import { authRequestsService } from '../service';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<undefined, any, Error>('GET_ME_REQUEST');

const epic: Epic = (actions$: Observable<Action>) => effect(
  actions$,
  () => authRequestsService.getMe(),
);

export { epic, reducer, Actions, ActionTypes };