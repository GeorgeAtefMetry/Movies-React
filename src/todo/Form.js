import { useState } from "react"
import React from "react"


const useInputValue = () =>{
    const [value, setValue] = useState()

    return {
        value,
        onChange:e => setValue(e.target.value), // Listen to changes in the input
        resetInput: () => setValue("")
    }
}


const Form = ({onSubmit}) =>{

    const {resetInput, ...text} = useInputValue("")

    return(
        <>
        <form
        onSubmit={e => {
            e.preventDefault()
            onSubmit(text.value)
            resetInput()
        }}
        >
            <input  type="text" className="form-control"  {...text}/>
            <button className='btn btn-primary' type="submit">Add</button>
        </form>
        {/* <input value={value} onChange={(e) => {setValue(e.target.value)}}/> */}
        {/* <div className="btn-danger">{props.name}</div> */}
        </>

    )

}

export default Form