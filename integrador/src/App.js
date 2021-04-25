import Header from './Componentes/Header'
import Tarjetas from './Componentes/Tarjetas'
import Footer from './Componentes/Footer'
import React, {Component} from "react";

export default class App extends Component { 
  render() {
    return (
    <div className="App">
   <header className="App-header">
        <div className="Header">
              <Header />
        </div>
    </header>  
 <div   >

   
 <Tarjetas />
 </div>
 



<footer className="Footer">
 <Footer />
 </footer>


    </div>
    );
}}


