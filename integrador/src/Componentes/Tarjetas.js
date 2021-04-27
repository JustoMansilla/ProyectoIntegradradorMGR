import React, {Component} from 'react'

class Tarjetas extends Component {

    constructor(props){
        super(props);
        this.state = {
            color1: props.color,              
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

   

    render () {
        return(
       
        <div className="Personaje-1"
        style = {{backgroundColor: this.state.color}}
        onMouseEnter={this.colorEnter.bind(this)}
        >

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
           

           
            
        </div>
    
       
    );
}
        
    };


export default Tarjetas;