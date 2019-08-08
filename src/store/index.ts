import {combineEpics, createEpicMiddleware} from "redux-observable";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {reducer as reduxFormReducer} from 'redux-form';
import { loginEpic } from "./auth/epics";
import {StateType} from "typesafe-actions";

import {
  epics as authRequestEpics,
  reducer as authRequestReducer,
} from './auth-requests';


const rootEpic = combineEpics(
  ...authRequestEpics,
  loginEpic,
);

export type RootState = StateType<typeof rootReducer>;

const rootReducer = combineReducers({
  form: reduxFormReducer,
  authRequest: authRequestReducer,
});

const epicMiddleware = createEpicMiddleware();

const index = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);

export default index