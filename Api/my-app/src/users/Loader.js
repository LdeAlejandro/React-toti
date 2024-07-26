import { Component } from "react";
import User from "./User";


 export default class Loader extends Component {
    constructor(){
        super()

        this.state = {
            user: {}
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response =>
          response.json()
        )
        .then(user => this.setState({user: user}))
      }

 render(){
        //if condicional     
        return this.state.user.name === undefined ?
         <div>Loading...</div> :
        <User user={this.state.user}/>
 }
 
}

