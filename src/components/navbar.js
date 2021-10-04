import React, {useState, useEffect} from 'react';
import alexLogo from '../img/logo.PNG'
const Navbar = () => {
    
    return (
    <nav className="navbar navbar-expand-lg no-marginLR">
            <div className='container'>
            <a className="navbar-brand" href="#"><img className='logo' src={alexLogo} alt='logo...'/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Accueil</a>  
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Qui suis-je?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Prestations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
