import React from "react";
import { Component } from "react";

export default function withTask(WrappedComponent){

    return class extends Component {
        constructor (props){
            super(props)

            this.state = {
                tasks: []
            }
        }

        componentDidMount(){
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then (response => response.json())
            .then (tasks => this.setState({tasks}))
        }

        render(){
            return <WrappedComponent tasks = {this.state.tasks} {...this.props}/> 
        }
    }

}