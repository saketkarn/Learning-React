import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userInfo:{
                name:"Default Name",
                location:"Default Location"
            }
        }
        // console.log(this.props.name+" constructor called");
    }

    async componentDidMount(){
        // console.log(this.props.name+" didMount called");
        const data = await fetch("https://api.github.com/users/saketkarn")
        const json=await data.json()
        console.log(json);
        this.setState({
            userInfo:json
        })

    }

    render(){
        // console.log(this.props.name+" render called");
        const {name,location, avatar_url}= this.state.userInfo
        const {contact} = this.props
        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name : {name}</h2>
                <h3>Location : {location} </h3>
                <h4>Contact : {contact}</h4>
            </div>
        )
    }
}

export default UserClass