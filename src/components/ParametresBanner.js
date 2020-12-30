import React, { useContext, useEffect } from 'react';
import LanguageContext from '../components/LanguageContext';

const ParametresBanner = () => {
    
    useEffect(() => { 
        Array.from(document.querySelectorAll('.languages label')).map(label =>{
            if(label.id === language.language){
                label.classList.add('lang-active')
            }
        })
      });


    //LANGUAGE _____

    const language = useContext(LanguageContext);

    const onChangeLanguage = e=>{
        language.updateLanguage(e.target.value);
        
        Array.from(document.querySelectorAll('.languages label')).map(label =>{
            if(label.id != language.language){
                label.classList.add('lang-active')
            }else{
                label.classList.remove('lang-active');
            }
        })
   
    }

    

    // RENDER ____________

    return (
        <header className="parametresBanner grid">
            <h1>{language.language === "Shakespeare" ? `< Front-end developer />` : `< Developpeur front-end />` }</h1>
            <div className="languages" onChange={onChangeLanguage}>
                <p>lang: </p>
                <label htmlFor="Moliere" id="Moliere">Moliere
                    <input type="radio" name="language" value="Moliere" />
                </label>
                
                <label htmlFor="Shakespeare" id="Shakespeare">Shakespeare
                    <input type="radio" name="language" value="Shakespeare"/>
                </label>
            </div>
        </header>
    );
};

export default ParametresBanner;