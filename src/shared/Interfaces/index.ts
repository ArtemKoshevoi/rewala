import {Action} from "redux";


export interface CustomAction extends Action {
  payload: any
}

export interface LoginFormValues {
  Email: string,
  Password: string;
}

