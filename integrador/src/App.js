import Header from './Componentes/Header'
import Tarjetas from './Componentes/Tarjetas'
import Footer from './Componentes/Footer'
import React, {Component} from "react";

export default class App extends Component { 

    //Constructor, contiene el arrayTarjetas donde se van pegando todas las traidas por la API y resetear, que la usamos para
    // devolver las tarjetas originales
    constructor(props){
      super(props);
      this.state = {
        arrayTarjetas: [],
        resetear: []
      }
    };

    //Fetch que trae a las 20 tarjetas originales de la API
    componentDidMount(){
      fetch("https://randomuser.me/api/?results=21")
      .then(r => r.json())
      .then(resultado => {
        this.setState({arrayTarjetas: resultado.results, resetear: resultado.results});
        
      })
      .catch((e)=> console.log(e))
    }

    //Funcion agregar tarjetas (un if entre 0 y 10 tarjetas)
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

    //Funcion resetear (muestra las tarjetas originales en caso de haber agregado +)
    resetear(){
      this.setState({arrayTarjetas: this.state.resetear})
    }

    // Funcion para filtrar (un if que contiene otro if con las parametros a buscar)
    filtrarTarjetas(){
      let filterData = document.querySelector(".filterData").value
      let filtrarPor = document.querySelector(".filterBy").value
      console.log(filterData)
      console.log(filtrarPor)
     
      if(filterData != ""){

          if (filtrarPor === "años"){
              let resultado = this.state.arrayTarjetas.filter( (item)=> {
                  let años = item.dob.age
                  let años2 = años.toString()
                   return años2.includes(filterData);
              })
              this.setState({arrayTarjetas: resultado});
              console.log(this.state.arrayTarjetas)
          }
          else if(filtrarPor === "nombre"){
              let filterDataMayus = filterData.toUpperCase()
              

              let resultado = this.state.arrayTarjetas.filter( (item)=> {
                  let itemDataMayus = item.name.first.toUpperCase()
                  return itemDataMayus.includes(filterDataMayus);
              })
              this.setState({arrayTarjetas: resultado});
          }
           else if(filtrarPor == "nacionalidad"){
              let filterDataMayus = filterData.toUpperCase()            
              let resultado = this.state.arrayTarjetas.filter( (item)=> {
                  let itemDataMayus = item.location.country.toUpperCase()
                  return itemDataMayus.includes(filterDataMayus);
              })
              this.setState({arrayTarjetas: resultado});
           }
      }
      else{
          this.setState({
              arrayTarjetas: this.state.resetear
          })
      }}


  // Render, lo que vamos a ver el front-end
  render() {
    return (
    <div className="App">

          {/* Header */}
          <header className="App-header">
            <div className="Header">
              <Header />
            </div>
          </header>  

      {/* Parametros para agregar tarjetas */}
      <div className="Agregartarjeta"> 
        <div>
        <h5>Cuantos usuarios quieres añadir?</h5>
        </div>  
        <input type="number" className="cantidadTarjetas"  placeholder="Cantidad de usuarios a añadir"/>
          <button className="botonAgregar" onClick={() => this.agregarTarjetas(document.querySelector('.cantidadTarjetas').value)}>
              Añadir
          </button>
      </div>

      {/* Parametros de filtrado */}
      <div className="seccionFiltro">
        <h5>Filtrar por:</h5>
          <select style={{padding: "0.5%"}} className="filterBy" name="filterBy">
            <option value="años">Edad</option>
            <option value="nombre">Nombre</option>
            <option value="nacionalidad">Nacionalidad</option>
          </select>
        <input style={{margin: "1%", padding: "0.5%"}} onInput={this.filtrarTarjetas.bind(this)} className="filterData" name="filterData" type= "text"/>
     </div>
  
      {/* MAP, loop para mostrar las tarjetas */}
      <div className="grid-container">
              {this.state.arrayTarjetas.map((item) => {
                return <Tarjetas 
                  key = {item.id} 
                  elemento = {item} 
                  // onDelete = {this.borrarTarjeta.bind(this)}
                /> })
              }
      </div>
 
      {/* Boton resetear */}
      <div className="botonResetear" style={{textAlign: "center"}}>
            <button onClick={this.resetear.bind(this)}>Ver tarjetas originales</button>
      </div>


    {/* Footer */}
    <footer className="Footer">
              <Footer />
    </footer>


    </div>
    );
}}


