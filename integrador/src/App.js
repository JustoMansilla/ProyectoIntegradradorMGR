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
    //componentDidMount se hace antes del primer render una vez que se monta el componente.
    componentDidMount(){
      fetch("https://randomuser.me/api/?results=21")
      .then(r => r.json())
      .then(resultado => {
        this.setState({arrayTarjetas: resultado.results, resetear: resultado.results});
        
      })
      .catch((e)=> console.log(e))
    }

    //Funcion agregar tarjetas (un if entre 0 y 10 tarjetas)
    //setState se usa para pasarr un objeto con la clave valor de lo que quiero modificar
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
    borrarTarjeta(idTarjeta){
      let borrar = this.state.arrayTarjetas.filter((tarjeta) => {
        return tarjeta.id !== idTarjeta
      })
      this.setState({
        arrayTarjetas: borrar
      })

    };

    //Funcion resetear (muestra las tarjetas originales en caso de haber agregado +)
    resetear(){
      this.setState({arrayTarjetas: this.state.resetear})
    }

    
    // Funcion filtrar (el || es un "or" que agarra first name, last name, age)
      filtrarTarjetas(persona) {
        let parametroFiltro = this.state.arrayTarjetas.filter ((usuario) => {
          return usuario.name.first.toLowerCase() === persona.toLowerCase() ||
          usuario.name.last.toLowerCase() === persona.toLowerCase() ||
          parseInt(usuario.dob.age) === parseInt(persona)
        })
        this.setState ({
          arrayTarjetas: parametroFiltro
        })
        console.log(parametroFiltro);
      }


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
      <div className = "parametrosFiltro"> 
                    <h5>Filtrar (Nombre, apellido o edad)</h5> 
        <input type="text" className="persona" placeholder="Escribir..." style={{padding: "0.5%"}} onChange = {(evento) => this.setState({search: evento.target.value})}/> 
        <button onClick = {() => this.filtrarTarjetas(document.querySelector('.persona').value)}> 
                        Buscar 
        </button> 
      </div>

      {/* Boton resetear */}
      <div className="botonResetear" style={{textAlign: "center"}}>
            <button onClick={this.resetear.bind(this)}>Ver tarjetas originales</button>
      </div>

      {/* MAP, loop para mostrar las tarjetas */}
      <div className="grid-container">
              {this.state.arrayTarjetas.map((item) => {
                return <Tarjetas 
                  key = {item.id} 
                  elemento = {item} 
                  color="white"
                  displayDetalle="none"
                  onDelete = {this.borrarTarjeta.bind(this)}/>

                   })
              }
      </div>
 

    {/* Footer */}
    <footer className="Footer">
              <Footer />
    </footer>


    </div>
    );
}}


