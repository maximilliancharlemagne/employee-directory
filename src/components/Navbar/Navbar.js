import React from 'react';
import './Navbar.css'

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img src="https://i2.wp.com/files.123freevectors.com/wp-content/uploads/new/animals/370-cartoon-dog-vector-image.png?w=60" alt="dog" className = "navbar-img"/>
      <a class="navbar-brand" href="#">DataHound</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar