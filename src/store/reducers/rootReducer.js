import { combineReducers } from 'redux';
import fetchMovies from './fetchMovies.js';

const rootReducer = combineReducers({
    data: fetchMovies
})
export default rootReducer;