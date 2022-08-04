import {createStore} from 'redux';
import {combineReducers} from 'redux';
import todo from '../modules/todo_app';

const rootReducer = combineReducers({
  todo,
});

const store = createStore(rootReducer);

export default store;
