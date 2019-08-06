import {combineEpics, createEpicMiddleware} from "redux-observable";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { reducer as reduxFormReducer } from 'redux-form';

const rootEpic = combineEpics(

);

const rootReducer = combineReducers({
  form: reduxFormReducer
});

const epicMiddleware = createEpicMiddleware();

const index = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);

export default index