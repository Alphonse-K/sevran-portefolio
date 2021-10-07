import alexLogo from '../img/logo.PNG';
import { Link } from "react-router-dom";

const Navbar = () => {  
    return (
    <nav className="navbar navbar-expand-lg no-marginLR">
            <div className='container'>
            <Link to="/" className="navbar-brand"><img className='logo' src={alexLogo} alt='logo...'/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Accueil</Link>  
                    </li>
                    <li className="nav-item">
                        <Link to="/qui-suis-je" className="nav-link">Qui suis-je?</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/prestations" className="nav-link">Prestations</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
