import Header from './Componentes/Header'
import Tarjetas from './Componentes/Tarjetas'
import Footer from './Componentes/Footer'
import React, {Component} from "react";

export default class App extends Component { 

    constructor(){
      super();
      this.state = {
        arrayTarjetas: [],
        search: " ",
      }
    };

    componentDidMount(){
      fetch("https://randomuser.me/api/?results=21")
      .then(r => r.json())
      .then((resultado)=>{
        console.log(resultado)
        this.setState({
          arrayTarjetas: resultado.results});
        
      })
      .catch((e)=> console.log(e))
    }


  render() {
    return (
    <div className="App">
          <header className="App-header">
            <div className="Header">
              <Header />
            </div>
          </header>  


       

        <div className="grid-container">
          {this.state.arrayTarjetas.map((item) => {
            return <Tarjetas 
              key = {item.id} 
              elemento = {item} 
              // onDelete = {this.borrarTarjeta.bind(this)}
            /> })
          }
        </div>
 



        <footer className="Footer">
          <Footer />
        </footer>


    </div>
    );
}}


