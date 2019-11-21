import {createStore} from 'redux';
import reducers from '../reducers';

const configure=()=>{
    const store=createStore(reducers);
    return store;
}
export default configure;