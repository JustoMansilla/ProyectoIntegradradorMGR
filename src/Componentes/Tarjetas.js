import React, {Component} from 'react'

class Tarjetas extends Component {
    render () {
        return(
        //  <h1>hola</h1>
            <div className="Personaje-1">
            <img src={this.props.elemento.picture.large} alt="" />

            <h4>
                Nombre: 
                {this.props.elemento.name.first}
                {this.props.elemento.name.last}
            </h4> 

            <p>
                Email:
            {this.props.elemento.email}

            </p>

            <p>
                Fecha de nacimiento:
            {this.props.elemento.dob.date}

            </p>

            <div> 
            <button type="button" className="botonBorrar"
                            onClick = {this.props.onDelete.bind(this, this.props.elemento.id)}> Eliminar

    </button>
            </div>
            
            </div>
    
       
    );
}
        
    };


export default Tarjetas;