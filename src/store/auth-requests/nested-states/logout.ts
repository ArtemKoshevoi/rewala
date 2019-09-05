import { Epic } from 'redux-observable';
import { Observable } from 'rxjs';
import { Action } from 'typesafe-actions';
import { AuthToken } from '../../../shared/interfaces/authToken';
import { asyncActionHandlerFactory } from '../../utils/async-action-helper';
import { authRequestsService } from '../service';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<any, AuthToken, Error>('LOGOUT_REQUEST');

const epic: Epic = (actions$: Observable<Action>) => effect(
  actions$,
  () => authRequestsService.logout(),
);

export { epic, reducer, Actions, ActionTypes };