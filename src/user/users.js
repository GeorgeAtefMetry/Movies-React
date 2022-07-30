import React from "react";

export class Users extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()

        this.state = {
            isAuth:true,
            users:[
                {name:"George",email:"george@gmail.com",isAdmin:true},
                {name:"ahmed",email:"ahmed@gmail.com",isAdmin:true},
                {name:"omira",email:"omira@gmail.com",isAdmin:false}
            ]
        }
    }

    render(){
        return (
            <>
            {this.state.isAuth && <ul>
                {this.state.users.map((user, index)=>{
                    if(user.isAdmin){
                        return <li>
                        {user.name}
                    </li>
                    }

                })}
            </ul>}
            
            </>
        )
    }

}