import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
    
        this.state = {
            count:7,
            count1:8
        }
        console.log(this.props.name + "child constructor")
    }

    componentDidMount() {
        console.log(this.props.name + "child did mount")
    }

    render(){
        const {name} = this.props
        const {count,count1} = this.state
        console.log(this.props.name + "child render")
        return(
            <div className="user-card">
                <h1>count:{count}</h1>
                <h1>count1{count1}</h1>
                <button onClick={() => {
                    this.setState({
                   count : this.state.count + 1,
                   count1 : this.state.count + 2 
                })
                }}>Increase</button>
                
                <h1>Name:{name}</h1>
                <h3>Location:Banglore</h3>
                <h4>Contact:@Jishagangadaran</h4>
            </div>
        )
    }


}

export default UserClass