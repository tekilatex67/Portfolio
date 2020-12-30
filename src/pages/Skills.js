import React, {useContext, useState} from 'react';
import Navigation from '../components/Navigation';

import IsometricBlock from '../components/IsometricBlock';
import { DiJavascript, DiHtml5, DiCss3Full, DiReact, DiSass } from 'react-icons/di';
import { SiRedux, SiFirebase, SiPhp, SiSymfony, SiMysql, SiGithub, SiGimp, SiInkscape  } from 'react-icons/si';


import LanguageContext from '../components/LanguageContext';
import SocialNetwork from '../components/SocialNetwork';
import ParametresBanner from '../components/ParametresBanner';


const Skills = () => {

    const language = useContext(LanguageContext);
    const [ langState, setLangState ] = useState('');


    const isoBlockHover = (lang)=>{
        setLangState(lang)
    }
    
    return (
        <div className="skills">
            <Navigation/>
            <ParametresBanner/>
            <div className="container">
            <h2>{language.language === "Shakespeare" ? ".Skills" : ".Compétences"}</h2>     
                
                <div className="technos">                   
                    <div className="sections front-end">
                        <ul>
                            <h3>Front-End</h3>
                            <IsometricBlock language={'Html'} icon={ DiHtml5 } color={"#e34b20"} number={10} isoBlockHover={isoBlockHover}/>
                            <li className="vertical"><div className="light"></div></li>
                            <IsometricBlock language={'Css'} icon={ DiCss3Full } color={"#2187d2"} number={8} isoBlockHover={isoBlockHover}/>
                            <li className="horizontal"><div className="light"></div></li>
                            <li className="vertical "><div className="light"></div></li>
                            <IsometricBlock language={'sass'} icon={ DiSass } color={'#c14e88'} number={6} isoBlockHover={isoBlockHover}/>
                            <IsometricBlock language={'Javascript'} icon={ DiJavascript} color={"yellow"} number={7} isoBlockHover={isoBlockHover}/>
                            <li className="horizontal "><div className="light"></div></li>
                            <IsometricBlock language={'React'} icon={ DiReact } color={"#53d2fa"} number={6} isoBlockHover={isoBlockHover}/>
                            <li className="vertical "><div className="light"></div></li>
                            <IsometricBlock language={'Redux'} icon={ SiRedux } color={'#764abc'} number={4} isoBlockHover={isoBlockHover}/>
                            <li className="lang-ho"></li>
                        </ul>
                    </div>

                    <div className="sections back-end">
                        <ul>
                            <h3>Back-End</h3>
                            <IsometricBlock language={'Firebase'} icon={ SiFirebase } color={"#ffcb2b"} number={6} isoBlockHover={isoBlockHover}/>
                            <li className="vertical "><div className="light"></div></li>
                            <IsometricBlock language={'MySQL'} icon={ SiMysql} color={"#00758F"} number={1} isoBlockHover={isoBlockHover}/>
                            <li className="vertical "><div className="light"></div></li>
                            <IsometricBlock language={'Php'} icon={ SiPhp } color={"#8993be"} number={1} isoBlockHover={isoBlockHover}/>
                            <li className="horizontal "><div className="light"></div></li>
                            <IsometricBlock language={'Symfony'} icon={ SiSymfony } color={"#fff"} number={1} isoBlockHover={isoBlockHover}/>
                            <li className="lang-ho">{langState}</li>
                        </ul>    
                    </div>

                    <div className="sections other">
                        <ul>
                            <h3>{language.language === "Shakespeare" ? "Others" : "Autres"}</h3>
                            <IsometricBlock language={'GitHub'} icon={ SiGithub } color={"#000000"} number={5} isoBlockHover={isoBlockHover}/>
                            <li className="vertical "><div className="light"></div></li>
                            <IsometricBlock language={'Gimp'} icon={ SiGimp } color={"#fff"} number={4} isoBlockHover={isoBlockHover}/>
                            <li className="vertical "><div className="light"></div></li>
                            <IsometricBlock language={'Inkscape'} icon={ SiInkscape } color={"#000000"} number={6} isoBlockHover={isoBlockHover}/>
                            <li className="lang-ho"></li>
                        </ul>    
                    </div>
                </div>

            </div>    

            <SocialNetwork/>
        </div>
    );
};

export default Skills;