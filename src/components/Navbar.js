import React from 'react'

const Navbar = () => {
  return (
    
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <a class="navbar-brand logo-text" href="*">MADHANAM INN</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">

          <li class="nav-item">
            <a class="nav-link" href="#home">Home</a>
          </li>
          <li class="nav-item">
             <a class="nav-link" href="#services">Services</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#portfolio">Portfolio</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#features">Features</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#team">Team</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#testimonials">Testimonials</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#contact">Contact</a>
           </li>
        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navbar