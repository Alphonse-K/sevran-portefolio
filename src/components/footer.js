import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

 const Footer = () => {
    return (
        <>
            <div className='footer-element d-md-flex d-sm-flex flex-colum'>
                <div className='d-md-flex d-ms-flex flex-colum '>
                    <Link to='/' className=''><div className='footer-logo'></div></Link> 
                    <div className='parent-site-content'>
                        <h3>Plan du site</h3>
                        <Link to='/' className='site-content'>Accueil</Link>
                        <Link to='/qui-suis-je' className='site-content'>Qui suis-je?</Link>
                        <Link to='/prestations' className='site-content'>Prestations</Link>
                        <Link to='/contact' className='site-content'>Contact</Link>
                    </div>
                </div>
                <div className='address-contact d-md-flex d-ms-flex flex-colum'>
                    <div>
                        <h3>Coordonnées</h3>
                            <div className='address'>
                                <p>Oulfa, Hay Hassani</p>
                                <p>20000 Casablanca</p>                        
                            </div>
                            <div className='phone'>
                                <p><FaPhoneAlt className='phone-alt' />(+212) 06 43 60 31 66</p>
                                <p><FaWhatsapp className='whatsapp-alt' />+212 643 603 166</p>
                            </div>
                            <div className='phone'>
                                <p>Suivez-moi!</p>
                                <a href='https://www.facebook.com/profile.php?id=100012244326961' target='_blank'>
                                    <FaFacebook className='facebook-alt' />
                                </a>
                            </div>
                    </div>
                    <div>
                        <h3>CONTACTEZ-MOI</h3>  
                        <Link to='/contact' >
                            <button className='contact'>
                                <FaEnvelope className='envelope-alt' />
                                M'ÉCRIRE ICI
                            </button>
                        </Link>                                   
                    </div>
                </div>
            </div>
            {/* <div className='maker'>
                <p>site réalisé par Alphonse Kaman, Vinmartech</p>
            </div> */}
        </>
    )
}


export default Footer
