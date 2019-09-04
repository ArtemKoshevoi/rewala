import { Epic } from 'redux-observable';
import { Observable } from 'rxjs';
import { Action } from 'typesafe-actions';
import { AuthToken } from '../../../shared/interfaces/authToken';
import { RegistrationFormValues } from '../../../shared/interfaces/registrationFormValues';
import { asyncActionHandlerFactory } from '../../utils/async-action-helper';
import { authRequestsService } from '../service';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<RegistrationFormValues, AuthToken, Error>('REGISTRATION_REQUEST');

const epic: Epic = (actions$: Observable<Action>) => effect(
  actions$,
  (payload) => authRequestsService.registration(payload),
);

export { epic, reducer, Actions, ActionTypes };