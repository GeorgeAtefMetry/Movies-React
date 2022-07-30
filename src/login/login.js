import { useState } from "react"
import classes from './login.module.css'
const Login = ()=> {

    const [ user, setUser] = useState({
        userEmail:"",
        userPassword:""
    })

    const [errors, serErrors] = useState ({
        emailErrors:null,
        passwordErrors:null
    })

    const [passwordShow, setPasswordShow] = useState(false)

    // Show and Hide Password
    const hide = ()=>{
        setPasswordShow((!passwordShow))
    }

    const handleInputCh = (e)=>{

        if(e.target.name == "userEmail"){
            setUser({
                ...user,
                userEmail:e.target.value
            })
            serErrors({
                ...errors,
                emailErrors:
                (e.target.value == " ")?"you need to enter a email":
                (e.target.value.length==0)?"length is too small":
                !new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(e.target.value)?"Wrong Email":
                null
            })

        }else if(e.target.name == "userPassword"){
            setUser({
                ...user,
                userPassword:e.target.value
            })
            serErrors({
                ...errors,
                passwordErrors:
                (e.target.value.length==0)?"You need to enter a password":
                (e.target.value.length<8)?"Password must be more than 8 characters":
                null
            })
        }

        console.log(e.target.name)
    }



    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <>
        <div className={`container ${classes.all}`} style={{marginTop:'120px',backgroundColor:'rgb(2 37 50 / 58%)', padding:'20px'}}>
        <div className="row">
        <form onSubmit={(e)=>{handleSubmit(e)}}>
        <div class="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                <input 
                type="text" 
                className="form-control" 
                value={user.userEmail}
                name="userEmail"
                onChange={(e)=>{handleInputCh(e)}}
                />
                <small>{errors.emailErrors}</small>
            </div>
                <div class="mb-3 col-md-12">  
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input 
                    type={passwordShow ? "text" : "password"} 
                    className="form-control" 
                    value={user.userPassword} 
                    name="userPassword" 
                    onChange={(e)=>{handleInputCh(e)}}

                    >
                    </input>
                    <small>{errors.passwordErrors}</small>
                </div>
                    <button onClick={()=>{hide()}} className="btn" style={{marginRight:'20px'}}>Show Password</button>


            <button type="submit" className="btn">Login</button>
        </form>
        </div>
        </div>
        </>
    )
}
export default Login