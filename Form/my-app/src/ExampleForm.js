import { Component } from "react";

export class ExampleForm extends Component{

  constructor(){
    super();

    this.state = {
      user: {},
      inputText: 'initial value',
      inputSelect: 'Green',
      inputCheckBox: true
                
  };


    this.handleInputText = this.handleInputText.bind(this);
    this.handleInputSelect = this.handleInputSelect.bind(this);
    this.handleInputCheckBox = this.handleInputCheckBox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //api
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response =>
      response.json()
    )
    .then(user => this.setState({user: user}))
  }

  handleInputText(event){
    this.setState({ inputText: event.target.value})

  }

  handleInputSelect(event){
    this.setState({inputSelect: event.target.value})
  }

  handleInputCheckBox(){
    this.setState({inputCheckBox: !this.state.inputCheckBox})
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("submitting form")
    console.log(this.state)
  }


  render(){
    const user = this.state.user;
    console.log(user.name)
    
    return (
  
      <div>
        <h1>{user.name}</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Text Fields</legend>
            <fieldset>
              <label>Ucontrolled input</label>
              <input type="text"  defaultValue={this.state.inputText}/>
            </fieldset>
            <fieldset>
              <label>Controlled input</label>
              <input 
              type="text"
              value={this.state.inputText} 
              onChange={this.handleInputText}/>
              <br />
              Here is the value: {this.state.inputText}
            </fieldset>

            <legend>Select Fields</legend>
            <fieldset>
              <label>Ucontrolled Select</label>
              <select defaultValue={this.state.inputSelect}>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
              </select>
            </fieldset>
            <fieldset>
              <label>Controlled Select</label>
              <select
              value={this.state.inputSelect}
              onChange={this.handleInputSelect}>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
              </select>
              <br />
              Here is the value: {this.state.inputSelect}
            </fieldset>

            <legend>Checkbox Fields</legend>
            <fieldset>
              <label>Ucontrolled Checkbox</label>
               <input type="checkbox" defaultChecked={this.state.inputCheckBox} />
            </fieldset>
            <fieldset>
              <label>Controlled CheckBox</label>
              <input type="checkbox"
              checked={this.state.inputCheckBox}
              onChange={this.handleInputCheckBox}/>
              <br />
              Here is the value: {this.state.inputCheckBox.toString()}
            </fieldset>
           
            </fieldset>
          
          <button type="submit">Submit</button>
        </form>

      </div>
      
    )
  }
}

export default ExampleForm;