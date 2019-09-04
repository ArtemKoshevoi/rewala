import { User } from '../../shared/interfaces/user';

export interface UsersState {
  entities: { [key: string]: User };
  ids: string[];
  currentUserId: string | null;
}
