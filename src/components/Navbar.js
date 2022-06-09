import React, { Component } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export default class Navbar extends Component {

  constructor(){
    super();
    this.state={
        show: true,
    }
}

  render(){
  return (
    
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
    <div className="container">
      <a className="navbar-brand logo-text" href="*">MADHANAM INN</a>
      <button className="navbar-toggler border border-info text-info" 
                    onClick={ ()=>{ this.setState({show: !this.state.show}) } } >
                        {this.state.show ? <MenuIcon color='secondary'/> : <CloseIcon color='primary'/>}
      </button>
      <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
             <a className="nav-link" href="#services">Services</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#portfolio">Portfolio</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#features">Features</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#team">Team</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#testimonials">Testimonials</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#contact">Contact</a>
           </li>
        </ul>
      </div>
    </div>
  </nav>

  )
}

}