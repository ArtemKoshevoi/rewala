import { createSelector } from 'reselect';
import { RootState } from '..';
import { CountriesConfig } from './state';

export const getConfigState = (state: RootState) => state.config;

export const getCountries = createSelector(
  getConfigState,
  (state: CountriesConfig) => state.countries,
);