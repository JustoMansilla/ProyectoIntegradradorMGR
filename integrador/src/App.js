import Header from './Componentes/Header'
import Tarjetas from './Componentes/Tarjetas'
import Footer from './Componentes/Footer'
import React, {Component} from "react";

export default class App extends Component { 

    constructor(props){
      super(props);
      this.state = {
        arrayTarjetas: [],
        resetear: []
      }
    };

    componentDidMount(){
      fetch("https://randomuser.me/api/?results=21")
      .then(r => r.json())
      .then(resultado => {
        this.setState({arrayTarjetas: resultado.results, resetear: resultado.results});
        
      })
      .catch((e)=> console.log(e))
    }

    agregarTarjetas(cantidad){
      if ((cantidad <= 10 && cantidad > 0)) {
        fetch("https://randomuser.me/api/?results=" + cantidad)
        .then(Respuesta => Respuesta.json())
        .then((resultado)=>{
        this.setState({
          arrayTarjetas: this.state.arrayTarjetas.concat(resultado.results)});
        })
        .catch((e)=> console.log(e))
      }else{
        alert("No te pases de vivo, menos de 10 y por lo menos 1.")
      }  
    }

    resetear(){
      this.setState({arrayTarjetas: this.state.resetear})
    }



  render() {
    return (
    <div className="App">

          <header className="App-header">
            <div className="Header">
              <Header />
            </div>
          </header>  

      <div className="Agregartarjeta"> 
        <div>
          Cuantos usuarios quieres añadir?
        </div>  
        <input type="number" className="cantidadTarjetas"  placeholder="Cantidad de usuarios a añadir"/>
          <button className="botonAgregar" onClick={() => this.agregarTarjetas(document.querySelector('.cantidadTarjetas').value)}>
              Añadir
          </button>
      </div>
  

      <div className="grid-container">
              {this.state.arrayTarjetas.map((item) => {
                return <Tarjetas 
                  key = {item.id} 
                  elemento = {item} 
                  // onDelete = {this.borrarTarjeta.bind(this)}
                /> })
              }
      </div>
 
      
      <div className="botonResetear" style={{textAlign: "center"}}>
            <button onClick={this.resetear.bind(this)}>Resetear</button>
      </div>



    <footer className="Footer">
              <Footer />
    </footer>


    </div>
    );
}}


