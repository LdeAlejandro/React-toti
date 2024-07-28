import React, { Component } from 'react'
import ThemeContext from "./contexts/Theme";

export default class Footer extends Component{
    static contextType = ThemeContext;

    render (){
        return <div>Im the Footer, with the {this.context} theme</div>
    }
  
}


