import { useState } from "react";
import classes from './register.module.css'
const Register = () =>{

    const [user, setUser] = useState({
        userName:"",
        userUserName:"",
        userEmail:"",
        userPassword:"",
        userConfirmPassword:""
    })

    const [errors, setErrors] = useState({
        NameError:null,
        UserNameError:null,
        EmailError:null,
        PasswordError:null,
        ConfirmPasswordError:null
    })

    const handleChange = (e) => {
        if(e.target.name == "name"){
            setUser({
                ...user,
                userName:e.target.value
            })
            setErrors({
                ...errors,
                NameError:
                (e.target.value.length == 0)?"You need to enter a Name":
                (e.target.value.length < 3)?"You need to enter a valid Name":
                null
            })
        }
        else if(e.target.name == "userName"){
            setUser({
                ...user,
                userUserName:e.target.value
            })
            setErrors({
                ...errors,
                UserNameError:
                (e.target.value.length == 0)?"You need to enter a valid Name":
                (e.target.value.length == " ")?"You need to enter a valid Name":
                !new RegExp(/^[A-Za-z]*$/).test(e.target.value)?"Must not Contain a space":
                null
            })
        }
        else if(e.target.name == "email"){
            setUser({
                ...user,
                userEmail:e.target.value
            })
            setErrors({
                ...errors,
                EmailError:
                (e.target.value.length==0)?"length is too small":
                !RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(e.target.value)?"Wrong Email":
                null
            })
        }
        else if(e.target.name == "password"){
            setUser({
                ...user,
                userPassword:e.target.value
            })
            setErrors({
                ...errors,
                PasswordError:
                (e.target.value.length==0)?"You need to enter a password":
                !new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).test(e.target.value)?"Password should have at least one lowercase letter and uppercase letter and special character and must be at least 8 characters long":
                null
            })
        }
        // else if(user.userPassword.value !== user.userConfirmPassword.value){
        //     alert('not the same')
        // }
        else if(e.target.name == "confirmPassword"){
            setUser({
                ...user,
                userConfirmPassword:e.target.value
            })
            setErrors({
                ...errors,
                ConfirmPasswordError:
                (e.target.value.length==0)?"You need to enter a password":

                // (e.target.value.match(!user.userPassword.value))?"not the same":
                console.log(user.userPassword)
                (e.target.value !== user.userPassword)?"Error":
                null
            })
        }
    }



return(
    <>
    <div className={`container ${classes.all}`} style={{marginTop:'120px',backgroundColor:'rgb(2 37 50 / 58%)', padding:'20px'}}> 
    <form>

        <div class="col-md-12" style={{marginBottom:'20px'}}>
            <label htmlFor="inputEmail4" class="form-label">Name</label>
            <input type="text" class="form-control" name="name"
            onChange={(e)=>handleChange(e)}
            />
            <small>{errors.NameError}</small>
        </div>

        <div class="col-md-12" style={{marginBottom:'20px'}}>
            <label htmlFor="inputEmail4" class="form-label">UserName</label>
            <input type="text" class="form-control" name="userName"
            onChange={(e)=>handleChange(e)}
            />
            <small>{errors.UserNameError}</small>
        </div>

        <div class="col-md-12" style={{marginBottom:'20px'}}>
            <label htmlFor="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4" name="email"
            onChange={(e)=>handleChange(e)}
            />
            <small>{errors.EmailError}</small>
        </div>

        <div class="col-md-12" style={{marginBottom:'20px'}}>
            <label htmlFor="inputPassword4" class="form-label">Password</label>
            <input type="text" class="form-control" id="inputPassword4" name="password"
            onChange={(e)=>handleChange(e)}
            />
            <small>{errors.PasswordError}</small>
        </div>

        <div class="col-md-12" style={{marginBottom:'20px'}}>
            <label htmlFor="inputPassword4" class="form-label">Confirm Password</label>
            <input type="text" class="form-control" id="inputPassword4" name="confirmPassword"
            onChange={(e)=>handleChange(e)}
            />
            <small>{errors.ConfirmPasswordError}</small>
        </div>

        <button className="btn btn-success">Register</button>
    </form>
    </div>
    </>
)




}
export default Register