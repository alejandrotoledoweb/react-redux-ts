import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import recorderReducer from "./recorder";
import userEventsReducer from "./user-events";

const rootReducer = combineReducers({
  eventsEvents: userEventsReducer,
  recorder: recorderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
