
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
    // console.log(resultado)
    this.setState({
      arrayTarjetas: resultado.results});
    
  })
  .catch((e)=> console.log(e))
}

agregarTarjetas(numero){
  if ((numero <= 30 && numero > 1)) {
    fetch("https://randomuser.me/api/?results=" + numero)
    .then(r => r.json())
    .then((resultado)=>{
    this.setState({
      arrayTarjetas: this.state.arrayTarjetas.concat(resultado.results)});
    })
    .catch((e)=> console.log(e))
  }else{
    alert("No te pases de vivo, menos de 30")
  }  
}

borrarTarjeta(Persona){
  let tarjetaNueva = this.state.arrayTarjetas.filter((tarjeta) => {
    return tarjeta.id !== Persona
  })
  this.setState({
    arrayTarjetas: tarjetaNueva
  })
  console.log(tarjetaNueva);
};
render(){
  return (
    <div className="App">

    <header className="App-header">
        <div className="Header">
              <Header />
        </div>
    </header>

<div className="Agregartarjeta"> 

<input type="number" className="cantidadTarjetas"  placeholder="Cantidad de usuarios"/>
                <button className="botonAgregar" onClick={() => this.agregarTarjetas(document.querySelector('.cantidadTarjetas').value)}>
                  Añadir
                </button>


</div>
        

         
 <div   >
 {this.state.arrayTarjetas.map((item) => {
  return <Tarjetas 
  key = {item.id} 
  elemento = {item} 
  onDelete = {this.borrarTarjeta.bind(this)}
  /> })}
 </div>
 



<footer className="Footer">
 <Footer />
 </footer>


</div>
    
  )
}}
