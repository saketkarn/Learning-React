import User from "../components/User"
import UserClass from "../components/UserClass"
import React from "react"
import UserContext from "../utils/UserContext"

class About extends React.Component{
    constructor(props){
        super(props)
        // console.log("Parent constructor called")
    }

    componentDidMount(){
        // console.log("Parent didMount called")
    }

    render(){
         // console.log("Parent render called")
        return(
            <div>
            <h1>About Us Page</h1>
            <UserClass contact="@saketkarn"/>
            <p>
                Logged-in user: 
                <UserContext.Consumer>{({loggedInUser})=><h1 className="text-xl">{loggedInUser}</h1>}</UserContext.Consumer>
            </p>
        </div>
        )
    }
}

export default About