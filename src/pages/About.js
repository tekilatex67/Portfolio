import React, { useContext} from 'react';

import Navigation from '../components/Navigation';
import ParametresBanner from '../components/ParametresBanner';
import LanguageContext from '../components/LanguageContext';
import SocialNetwork from '../components/SocialNetwork';


const About = () => {
    return (
        <div className='about'>
            
            <Navigation />
            <ParametresBanner/>
            
            <div className="container">
                
                <div className="title">
                    <h2>Bienvenue</h2>
                    <p>dans mon univers numérique</p>
                    
                </div>
                <SocialNetwork/>
            </div>
        </div>
    );
};

export default About;