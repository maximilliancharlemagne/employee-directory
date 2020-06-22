import React from 'react';
import './Navbar.css'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src="https://i2.wp.com/files.123freevectors.com/wp-content/uploads/new/animals/370-cartoon-dog-vector-image.png?w=60" alt="dog" className = "navbar-img"/>
      <a className="navbar-brand" href="#">DataHound</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar