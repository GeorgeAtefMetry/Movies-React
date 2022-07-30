const INITIAL_STATE = {
    counter :0,
}
export default function counterReducer (state = INITIAL_STATE, action){
    switch (action.type){
        case "set_counter":
            return{...state, counter:action.payload}

            default :
            return {...state}
    }
}