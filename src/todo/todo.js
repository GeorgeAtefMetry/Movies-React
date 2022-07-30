import {useState} from 'react'
import Form from './Form'
import './todo.css'



function Todo(){

<div>
{/*  const [input, setInput] = useState("")
    
        const handleInput = (e) =>{
            // e.preventDefault();
        
            if(e.target.name == 'name'){
            setInput({
                ...input,
                inputValue:e.target.value,
            })
            }
        } */}
{/* //////////////////////////////////////////// */}
{/* const addToDo = ()=>{
            return(
                <>
                {input.map((ele)=>{
                    return (
                    <ShowValue key={ele} name={input.inputValue}>{ele}</ShowValue>
                    )
                })}
                </>
            )
} */}
</div>

    const [Value,setValue]  = useState('')
    const [todo, setTodo] = useState([])

    const createTask = (e) => {
        setValue(e.target.value) // save value in Value
    }
    const addTask = (e) =>{
        e.preventDefault()
        todo.push(Value)
        setValue('')
    }
    const deleteComplete = (index) => {
        setTodo((item) => item.filter((nada,i) => i !== index ))
    }
    const Complete = (t) => {
        // t.currentTarget.style.backgroundColor = 'salmon'
        setTodo(todo.map
            (todo=>todo===t ? t+"✅" : todo))
        // t.style.textDecoration='line-through'
    }
    
    return (
        <>
        <div className='container background' style={{marginTop:'120px'}}>
            <h1 style={{color:'#C69F09'}}>To-Do App</h1>
            {/* <input type="text" className="form-control" name="name" value={input} onChange={(e) => {setInput(e.target.value)}} /> */}
            <form
                    onSubmit={(e)=>{addTask(e)}}
                    >
                <input  type="text" className="form-control" onChange={(e)=>{createTask(e)}}/>
                <button className='btn ' type="submit">Add</button>
            </form>
            {/* <ShowValue name={input.inputValue}></ShowValue> */}
        </div>

        <div className='container values'>
            <div>
            {
                todo.map(((text,index) => {
                    return(
                        <div>
                            <h4 className="field" key={text} id={text}>
                                {text}
                            </h4>
                            <button className='btn btn-success' onClick={() => Complete(text)}>Done</button>
                            <button className='btn btn-danger' onClick={() => deleteComplete(index)}>Delete</button>
                        </div>
                    )
                
                }) )
            }
            </div>      
            <div className='value'></div>
        </div>
        </>
    )
}
export default Todo