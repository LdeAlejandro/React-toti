import React, { Component } from 'react';
import ThemeContext from "./contexts/Theme";

export default class Body extends Component{
    static contextType = ThemeContext;

    render (){
        return <section>Im the Body, with this {this.context} theme</section>
    }
  
}


