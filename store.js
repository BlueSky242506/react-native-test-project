import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dogReducer from "./reducers/dog";

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const store = createStore(
  dogReducer,
  applyMiddleware(thunk, logger)
);

export default store;
