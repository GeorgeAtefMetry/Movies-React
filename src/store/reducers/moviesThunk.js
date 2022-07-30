import React from 'react'

export default function moviesThunkReducer(state=[], action) {
    switch(action.type){
        case "set_movies_thunk":
            return action.payload

            default:
                return state
    }
}
