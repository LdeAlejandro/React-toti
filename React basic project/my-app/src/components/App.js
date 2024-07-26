import React, { Component } from "react";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Header from "./Header";


function handleOnMouserOver(event) {
  console.log(event);
}

function handleClick(event) {
  console.log(event);
}

//Lembrar importar  do react components
//import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.firstName = "Alejandro";
    this.lastName = "Garcia";
    this.h2styles = {
      fontSize: 42,
      color: "white",
      backgroundColor: "blue",
    };

    this.state = {
      course: "React",
      count: 0,
      date: new Date(),
      party: true
    };

    // vinculando funcção com nova instancia do objeto app
    this.stateHandleClick = this.stateHandleClick.bind(this);
    this.partyHandleClick = this.partyHandleClick.bind(this);
  };

    //esta funcção atualizada a data e hora do site
    tick() {
        this.setState({ date: new Date() });
      }
    
      //esta funcção verificara se o app foi montado e executara a função tick() cada segundos
      componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
      }

      //valida se o componente foi atualizado
      componentDidUpdate(prevProps, prevState){
        console.log(`Previous time: ${prevState.date}`);

      }

      //desmontar componente
      componentWillUnmount(){
        //console.log("will unmount")
        //clearInterval(this.timerId);
      }

  //declarando função dentro da classe funcção contador
  stateHandleClick(event) {
    this.setState((state) => {
      return { count: this.state.count + 1 };
    });

    console.log(this.state.count);
  }

  customMethod() {
    console.log("Ola sou um componente de classe");
  }

  partyHandleClick (){
    this.setState({party: !this.state.party})
  }


  render() {
    return (
      <div>
        <h1>Props e carregando components</h1>
        <Header />
        <h1 style={{ color: "red", backgroundColor: "blue" }}>Hello world!</h1>
        <h2 style={this.h2styles}>test</h2>
        <p>
          (`{this.firstName}, {this.lastName}`)
        </p>
        <p> Ola `{this.state.course}`</p>
        <MainContent />
        <Footer />
        <div></div>
        
         {/*Function clicks y uso de props y estados*/}
        <div>
            <h1>Function clicks y uso de props y estados</h1>

          <div onMouseOver={handleOnMouserOver}>
         
            Passe o mouse em cima de mim!
          </div>
          <button onClick={handleClick}>Me clique!</button> <br />
          <p>Date: {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}</p>
          <p>Counting: {this.state.count}</p>
          <button onClick={this.stateHandleClick}>State click Button</button>
        </div>
         {/* If with jsx */}
         <h1>If react</h1>
         <div>
            <h2> Am I going to party? {this.state.party ? "Yes" : "No..."}</h2>
            {
                this.state.party ? 
                <h3>Party!</h3> :
                <h3>Not in the mood</h3>
            }
            <button onClick={this.partyHandleClick}>Vai para a festar?</button>
         </div>
         <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </div>
    );
  }
}

export default App;
