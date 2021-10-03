import React, {useState, useEffect} from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className='header-wrapper'>
           <div className='main-info'>
                <h1>Communication d'entreprise & Marketing Digital</h1>
                <br />    
                <Typed className='typed-text'
                    strings={[
                        'Analyse et Synthèse d\'information',
                        'Gestion de prestataire externe',
                        'Négociations diverses',
                        'Gestion de la relation client...']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
           </div> 
        </div>
    )
}

export default Header
