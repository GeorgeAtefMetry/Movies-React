import React from 'react'

export function ChangeCounter(count) {
    return{
        type:"set_counter",
        payload:count
    }
}
