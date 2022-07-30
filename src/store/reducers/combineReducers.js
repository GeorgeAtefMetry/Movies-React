import {combineReducers} from 'redux'
import MovieReduce from './movieReducers'
import counterReducer from './counterReucer'
import moviesThunkReducer from './moviesThunk'

export default combineReducers({
    MoviesList:MovieReduce,
    Counter:counterReducer,
    movies:moviesThunkReducer,
})