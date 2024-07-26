import { Component } from "react";

export class CommonForm extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      form: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

  
    this.setState({[name]: value})
  }

  handleSubmit(event) {
    event.preventDefault();

    //descontruindo a data de form do estado,
    /*
      const { form, ...stateData } = this.state;: Esta linha está desestruturando o objeto this.state em duas partes:
      form: Extrai a propriedade form do objeto this.state e a atribui a uma variável chamada form.
      stateData: Usa o operador de resta (...) para agrupar o restante das propriedades de this.state em um novo objeto chamado stateData.
      */
    const { form, ...stateData } = this.state;

    //assignando, os valores atualizados em form
    this.setState({ form: stateData });

    console.log(stateData);
  }

  render() {
    return (
      <div>
        <h2>Common Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="First Name"
            />
          </label>
          <br />

          <label>
            <input
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder="Last Name"
            />
          </label>
          <br />

          <label>
            <input
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
              placeholder="Age"
            />
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
              placeholder="Gender"
            />
            Male
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
              placeholder="Gender"
            />{" "}
            Female
          </label>
          <br />

          <button>Submit</button>
        </form>

        <hr />

        <h2>Entered information:</h2>

        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>
          Your age: {this.state.age} 
        </p>

        <p>
          Your gender: {this.state.gender}
        </p>
        
        
        <h2>Submitted information:</h2>

        <p>
          Your name: {this.state.form.firstName} {this.state.form.lastName}
        </p>
        <p>
          Your age: {this.state.form.age} 
        </p>

        <p>
          Your gender: {this.state.form.gender}
        </p>
    
      </div>
    );
  }
}

export default CommonForm;
