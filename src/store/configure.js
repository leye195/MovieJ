import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import { createLogger } from "redux-logger";
/**
 * Store congifure
 * you can set reducers and middleware in store
 */
const configure = () => {
  const middlewares = [];
  //if (process.env.NODE_ENV !== `production`) {
  //const logger = createLogger();
  //middlewares.push(logger);
  //}
  const store = createStore(reducers, applyMiddleware(...middlewares));
  return store;
};
export default configure;
