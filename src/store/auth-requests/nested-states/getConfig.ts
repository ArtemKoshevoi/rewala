import { Epic } from 'redux-observable';
import { Observable } from 'rxjs';
import { Action } from 'typesafe-actions';
import { Countries } from '../../../shared/Interfaces';
import { asyncActionHandlerFactory } from '../../utils/async-action-helper';
import { authRequestsService } from '../service';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<undefined, Countries, Error>('GET_CONFIG_REQUEST');

const epic: Epic = (actions$: Observable<Action>) => effect(
  actions$,
  () => authRequestsService.getConfig(),
);

export { epic, reducer, Actions, ActionTypes };