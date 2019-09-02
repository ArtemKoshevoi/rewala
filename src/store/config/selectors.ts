import { createSelector } from 'reselect';
import { RootState } from '..';

export const getState = (state: RootState) => state.config;