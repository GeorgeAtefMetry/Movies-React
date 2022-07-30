import React from 'react'

export function SetMovies(data) {
    return{
        type:'set_movies',
        payload:data
    }
}
export function DelMovies(data){
    return{
        type:"del_movies",
        payload:data
    }
}