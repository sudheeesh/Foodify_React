import { Component } from "react"
import User from "./User"
import UserClass from "./UserClass"
import React from "react"

class About extends Component{
   
    constructor(props){
        super(props)
    
        this.state = {
            count:7,
            count1:8
        }
        console.log("parent constructor")
    }

    componentDidMount() {
        console.log("parent did mount")
    }

    
   render(){
    console.log("parent render")
     return(
    <div className="about">
        <h1>This the best food app around the world</h1>
        <UserClass name={"Jisha"}/>
        <UserClass name={"Sudheesh"}/>
    </div>
     )
   
   }

}

export default About