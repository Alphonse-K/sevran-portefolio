import React, {useEffect} from 'react';
import { Sitting4, Standing2 } from 'react-humaaans';
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';

const HomeBody = () => {
   
    return (
        <div className='container-fluid'>
            <div className='home d-flex'>
                <Roll>
                <div className='col-lg-6 quote'>
                        <p className='wow slideInRight'>
                        <i>
                        Vous pouvez avoir un excellent produit, 
                        mais la communication échoue, 
                        c'est comme regarder un comédien faire un sketch dans une langue complètementdifférente.
                        </i> 
                        </p> 
                        <h6>- Steve Jobs</h6> 
                </div>
                </Roll>
                <Slide left>  
                <div className='d-flex inner-home'>
                         <div>
                             <Standing2
                                height={200}
                                hairColor="#000000"
                                skinColor="#FDA7DC"
                                shoeColor="#000000"
                                pantColor="#FFA011"
                                shirtColor="#FFAB11"
                                coatColor="#FF0E11"
                                hatColor="#FFFFEE"
                            />
                        </div>
                        <div>
                            <Sitting4
                                height={200}
                                hairColor="#000000"
                                skinColor="#FDA7DC"
                                shoeColor="#000000"
                                pantColor="#424141"
                                shirtColor="#FFAB11"
                                coatColor="#FF0E11"
                                objectColor="#FFA011"
                                hatColor="#FFFFEE"
                                wheelchairColor="#FFBBEE"
                            />
                        </div>
                </div>
                </Slide>
            </div>
         </div>
    )
}

export default HomeBody
