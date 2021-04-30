import React, {Component} from 'react'

class Tarjetas extends Component {

    constructor(props){
        super(props);
        this.state = {
            color1: props.color,     
            displayDetalles: props.displayDetalle         
        }
    }

    colorEnter(){
        if(this.state.color === "#lightgray")
        this.setState({
            color: "#lightgray",
        })
        else
        this.setState({
            color: "lightgray",
        })
    }

    colorLeave(){
        if(this.state.color === "#lightgray")
        this.setState({
            color: "#lightgray",
        })
        else
        this.setState({
            color: "#f9f9f9",
        })
    }
    verDetalles(){
        if(this.state.displayDetalles === "none")
            this.setState({ 
                displayDetalles: "inline" 
            })
        else
            this.setState({
                displayDetalles: "none"
            })
    }  
    
//props pasa info de componente padre a uno hijo.
    render () {
        return(
       
        <div className="Personaje-1"
        style = {{backgroundColor: this.state.color}}
        onMouseEnter={this.colorEnter.bind(this)}
        onMouseLeave={this.colorLeave.bind(this)}>

            <div className="img-wrapper">    
                <img className="inner-img" src={this.props.elemento.picture.large} alt="" />
            </div>

            <h4>  
                Nombre: {this.props.elemento.name.first} {this.props.elemento.name.last} 
            </h4> 

            <p>
                Email: {this.props.elemento.email}
            </p>

            <p>
                Fecha de nacimiento: {this.props.elemento.dob.date.substr(0,10)} ({this.props.elemento.dob.age})
            </p>
            <div className="detalles" style={{display:this.state.displayDetalles}}>
                <h4>{this.props.elemento.location.street.number} {this.props.elemento.location.street.name}</h4>
                <h4>{this.props.elemento.location.city} - {this.props.elemento.location.state}</h4>
                <h4>{this.props.elemento.location.country}</h4>
                <h4>{this.props.elemento.location.postcode}</h4>
                <h4>{this.props.elemento.registered.date.substr(0,10)}</h4>
            </div>
           
            <div class="botones">
                 <button type="button" className="boton-borrar" onClick = {this.props.onDelete.bind(this, this.props.elemento.id)}>Borrar Tarjeta </button>
            <button onClick={this.verDetalles.bind(this)}>Ver detalles</button>

            </div>
            
        </div>
    
       
    );
}
        
    };


export default Tarjetas;