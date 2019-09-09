import { createSelector } from 'reselect';
import { RootState } from '../index';

export const getState = (state: RootState) => state.authRequest;

export const getLoginRequestState = createSelector(
  getState,
  (state) => state.loginRequest,
);

export const getRegistrationRequestState = createSelector(
  getState,
  (state) => state.registrationRequest,
);