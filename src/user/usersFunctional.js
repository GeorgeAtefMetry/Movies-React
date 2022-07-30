import { useState, useEffect } from "react"

export default function UsersFunctional (){

    const [users, setUsers] = useState(
        [
            {name:"George",email:"george@gmail.com",isAdmin:true},
            {name:"ahmed",email:"ahmed@gmail.com",isAdmin:true},
            {name:"omira",email:"omimra@gmail.com",isAdmin:false}
        ]
    )   
    const [isAuth, setAuth] = useState(true)

    useEffect(()=>{
        
    },[])


    const handleChange = ()=> {

        setAuth((isAuth)?false:true)

        setUsers(users.map((user)=>{
            // eslint-disable-next-line eqeqeq
            if(user.name == "George"){
                return {...user,name:'hazem'}
            }else{
                return user
            }
        }))
    }

    return (
        <>
        {isAuth ?
        <ul>
            {users.map((user,index)=>{
                if(user.isAdmin){
                    return <li key={index}>{user.name}</li>

                }
            })}
        </ul> : <p>Please register first</p> }
        
        <button onClick={()=>{handleChange()}} className="btn btn-primary">Change Auth</button>
        <br></br>
        </>
    )
}