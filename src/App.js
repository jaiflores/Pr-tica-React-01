import React, { Component } from 'react';
import maracuja from './img/maracuja.jpg';
import "./App.css"

class App extends Component{

  state = {
    nome: "Jaianny",
    idade: "30",
    comidafavorita: "comida de caldo com farofa",
    musicas:["I Lived - OneRepublic", "Raise Your Glass - Pink", "Mais uma vez - Renato Russo"], 
    
  }
  

  render(){
    return(
      <section>
        <h1>Meu nome é {this.state.nome}</h1>
        <h2>Tenho {this.state.idade} anos.</h2>
        <h3>Minha comida favorita é {this.state.comidafavorita}.</h3>
        <div>
          <p>Minhas músicas favoritas são:</p>
          <ol>
            <li>{this.state.musicas[0]}</li>
            <li>{this.state.musicas[1]}</li>
            <li>{this.state.musicas[2]}</li>
            
          </ol>
        </div>
        <div>
          <p class="t1-fruta" >Minha fruta favorita é maracujá!!!!</p>
          <figure>
            <img  class="fruta" src={maracuja} alt="maracuja"/>
          </figure>
        </div>
      </section>
    )
    
  }  
}

export default App


