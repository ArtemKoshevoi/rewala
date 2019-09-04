import { createSelector } from 'reselect';
import { RootState } from '../index';

export const getState = (state: RootState) => state.auth;

export const getIsAuthorized = createSelector(
  getState,
  (authState) => authState.isAuthorized,
);

export const getToken = createSelector(
  getState,
  (authState) => authState.token,
);
