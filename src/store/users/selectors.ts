import { createSelector } from 'reselect';
import { RootState } from '..';
import { UsersState } from './state';

export const getUsersState = (state: RootState) => state.users;

export const getUser = createSelector(
  getUsersState,
  (state: UsersState) => state.entities,
);

export const getCurrentUserId = createSelector(
  getUsersState,
  (state: UsersState) => state.currentUserId,
);