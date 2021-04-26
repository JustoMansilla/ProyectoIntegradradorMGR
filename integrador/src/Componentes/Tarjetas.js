import React, {Component} from 'react'

class Tarjetas extends Component {
    render () {
        return(
       
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

           
            
            </div>
    
       
    );
}
        
    };


export default Tarjetas;