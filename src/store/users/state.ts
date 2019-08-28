import { UserValues } from '../../shared/interfaces/userValues';

export interface UsersState {
  entities: { [key: string]: UserValues };
}
