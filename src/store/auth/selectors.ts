import {RootState} from "../index";


export const getState = (state: RootState) => state.authRequest;

export const setToken = (storageName: string, token: string ) => {
  localStorage.setItem(storageName, token)
};

export const getToken = () => {
  return localStorage.getItem('token')
};

export const removeToken = () => {
  localStorage.removeItem('token')
};



