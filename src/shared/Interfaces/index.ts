import {Action} from "redux";


export interface CustomAction extends Action {
  payload: any
}

export interface LoginFormValues {
  email: string,
  password: string;
}
