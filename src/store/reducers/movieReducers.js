const INITIAL_STATE ={
    movies:[]
}

export default function MovieReduce(state = INITIAL_STATE, action ) {

    switch (action.type){
        case "set_movies" : 
            return {...state, movies:[...state.movies, action.payload]}
        case "del_movies" : 
            return {...state, movies:action.payload}

        default :
        return {...state}
    }
}
