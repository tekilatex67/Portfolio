import React, {useContext} from 'react';
import {IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter} from 'react-icons/io';
import Navigation from '../components/Navigation';
import ParametresBanner from '../components/ParametresBanner';
import { contactDatas } from '../data/languages-data'; 
import LanguageContext from '../components/LanguageContext';
import BlocContact from '../components/BlocContact';
import ContactForm from '../components/ContactForm';
import SocialNetwork from '../components/SocialNetwork';

const Contact = () => {

    const {fr, en } = contactDatas;
    const language = useContext(LanguageContext);

    return (
        <div className="contact">
            <Navigation/>
            <ParametresBanner/>
            <div className="container">
                <h2>.Contact</h2>
                <div className="formBloc">
                    
                    <div className="formHeader">
                        <h3>
                            {language.language === "Shakespeare" ? en.title : fr.title }
                            <span> {language.language === "Shakespeare" ? en.span : fr.span }</span>
                        </h3>
                        <p>{language.language === "Shakespeare" ? en.p : fr.p }</p>
                    </div>
                    
                    <div className="formContains">
                        
                        <div className="contactInfo">
                            <BlocContact icon={IoLogoLinkedin} type={"Linkedin"} text={"Nicolas Klipfel"}/>
                            <BlocContact icon={IoLogoInstagram} type={"Instagram"} text={"don_key.shot_devfront"}/>
                            <BlocContact icon={IoLogoTwitter} type={"Twitter"} text={"Don CodeShot"}/>
                        </div>
                        
                        <ContactForm />

                    </div>

                </div>
            </div>
            <SocialNetwork/>
        </div>
        
    );
};

export default Contact;