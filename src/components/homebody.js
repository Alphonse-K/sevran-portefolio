import { Sitting4, Standing2 } from 'react-humaaans';
import { Zoom, Flip, Roll } from 'react-reveal';
import { Link } from 'react-router-dom';

const HomeBody = () => {
   
    return (
        <div className='container-fluid'>
            <div className='home d-flex'>
                <Roll delay={1000}>
                <div className='col-lg-6 quote'>
                        <p className='wow slideInRight'>
                        <i>
                        Vous pouvez avoir un excellent produit, 
                        mais si la communication échoue, 
                        c'est comme regarder un comédien faire un sketch dans une langue complètement différente.
                        </i> 
                        </p> 
                        <h6>- Steve Jobs</h6> 
                </div>
                </Roll>
                <Roll left delay={1000}>  
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
                </Roll>
            </div>
            <div className='container-fluid pt-5'>
                <div className='about-title'><h1>QUI SUIS-JE?</h1></div>
                <div className='about-element'>
                    <Zoom delay={1200} right>
                        <div className='col alex-image'></div>
                    </Zoom>
                    <Flip delay={1200} bottom>
                        <div className='col about-element-paragraph'>
                            <p><b style={{lineHeight: 0.5, textAlign: 'start'}}>Damahou Alexis,</b> c'est mon nom. Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                        </div>
                    </Flip>
                </div>
                <div className='body-button d-flex'>
                    <Roll left delay={1000}>  
                    <Link to='/prestations'><button className=''>PRESTATIONS</button></Link>
                    </Roll>  
                    <Roll right delay={1000}>  
                    <Link to='/contact'><button className=''>CONTACTEZ-MOI</button></Link>
                    </Roll>  
                </div>
            </div>
         </div>
    )
}

export default HomeBody
