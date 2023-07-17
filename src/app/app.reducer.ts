import { createReducer, on } from '@ngrx/store';
import { login } from './auth.actions';

export interface authReducer {
  username: string;
}

export const initialState: authReducer = {
  username: ''
};

export const authReducer = createReducer(
  initialState,
  on(login, (state, { username }) => ({ ...state, username }))
);
