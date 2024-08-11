import React from "react";
import { Component } from "react";

export class CheckButton extends Component {
 
    constructor(props) {
      super(props);

      this.state = {
        checked: false,
      };

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event){
        this.setState ({checked: event.target.checked});   
      }

    render() {
      return(
        <div>
        <label>Option 1
       <input onChange={this.handleChange} name="option" type="checkbox" />
       </label>

       <label>Option 2
       <input onChange={this.handleChange} name="option" type="checkbox" />
       </label> 

        <p>{this.state.checked.toString()}</p>
      </div>
      );
    }
}
 
export default CheckButton;