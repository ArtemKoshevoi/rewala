import { CountriesConfigValues } from '../../shared/interfaces/countriesConfigValues';

export interface CountriesConfig {
  entities: { [key: string]: CountriesConfigValues };
}