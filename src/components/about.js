import React from 'react';
import Footer from './footer';
import Navbar from './navbar';
import BackToTop from './backtotop';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const About = () => {
    return (
        <div>
            <Navbar />
            <BackToTop />
            <h2 className='h1-about'>Voici un bref aperçu de mon parcours durant
                ces dix(10) dernières années
            </h2>
            <VerticalTimeline className='verticale-timeline'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2020 - 2021"
                    iconStyle={{ background: '#FFA011', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Télévendeur chez Kleekoon</h3>
                    <h4 className="vertical-timeline-element-subtitle">Casablanca, Maroc</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra ullamcorper turpis eu vehicula. Aenean tempor risus et cursus consequat. Donec bibendum, ligula ac tempor accumsan, arcu odio pharetra ante, sit amet laoreet eros dolor eget ex. Maecenas venenatis justo id dignissim congue.                     </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019 - 2020"
                    iconStyle={{ background: 'black', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Manager Général chez Sassandra Technologie</h3>
                    <h4 className="vertical-timeline-element-subtitle">Casablanca, Maroc</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra ullamcorper turpis eu vehicula. Aenean tempor risus et cursus consequat. Donec bibendum, ligula ac tempor accumsan, arcu odio pharetra ante, sit amet laoreet eros dolor eget ex. Maecenas venenatis justo id dignissim congue.                     </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018 - 2019"
                    iconStyle={{ background: '#FFA011', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Téléopérateur chez Paux &#38; José</h3>
                    <h4 className="vertical-timeline-element-subtitle">Casablanca, Maroc</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra ullamcorper turpis eu vehicula. Aenean tempor risus et cursus consequat. Donec bibendum, ligula ac tempor accumsan, arcu odio pharetra ante, sit amet laoreet eros dolor eget ex. Maecenas venenatis justo id dignissim congue.                     </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2015-2018"
                    iconStyle={{ background: 'black', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Télévendeur chez Emarka</h3>
                    <h4 className="vertical-timeline-element-subtitle">Casablanca, Maroc</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra ullamcorper turpis eu vehicula. Aenean tempor risus et cursus consequat. Donec bibendum, ligula ac tempor accumsan, arcu odio pharetra ante, sit amet laoreet eros dolor eget ex. Maecenas venenatis justo id dignissim congue.                     </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2013-2015"
                    iconStyle={{ background: '#FFA011', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Auto-entrepreneur</h3>
                    <h4 className="vertical-timeline-element-subtitle">Togo, Lomé</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra ullamcorper turpis eu vehicula. Aenean tempor risus et cursus consequat. Donec bibendum, ligula ac tempor accumsan, arcu odio pharetra ante, sit amet laoreet eros dolor eget ex. Maecenas venenatis justo id dignissim congue.                     </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2011 - 2013"
                    iconStyle={{ background: 'black', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Commercial Terrain chez X-Smart</h3>
                    <h4 className="vertical-timeline-element-subtitle">Togo, Lomé</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra ullamcorper turpis eu vehicula. Aenean tempor risus et cursus consequat. Donec bibendum, ligula ac tempor accumsan, arcu odio pharetra ante, sit amet laoreet eros dolor eget ex. Maecenas venenatis justo id dignissim congue.                     </p>
                </VerticalTimelineElement>
             </VerticalTimeline>
            <Footer />
        </div>
    )
}; 

export default About