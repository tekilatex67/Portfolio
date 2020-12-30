import React, { useContext} from 'react';
import Navigation from '../components/Navigation';


import ParametresBanner from '../components/ParametresBanner';
import LanguageContext from '../components/LanguageContext';

import PeriodicSkills from '../components/PeriodicSkills';
import SocialNetwork from '../components/SocialNetwork';


const Home = () => {

    const language = useContext(LanguageContext);
   
    return (
        <div className="home">
            <Navigation/>
            <ParametresBanner/>
            <div className="container ">                
                    <h2>.Klipfel  Nicolas</h2>                                
                <PeriodicSkills />
                
            </div> 
            <SocialNetwork/>
        </div>
    );
};

export default Home;