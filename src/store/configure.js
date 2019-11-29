import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { createLogger } from 'redux-logger';
/**
 * Store congifure
 * you can set reducers and middleware in store
 */
const configure=()=>{
    const logger = createLogger(); 
    const store=createStore(reducers,applyMiddleware(logger));
    return store;
}
export default configure;