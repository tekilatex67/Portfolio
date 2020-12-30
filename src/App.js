import React, { useState} from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Works from './pages/Works';
import Contact from './pages/Contact';
import LanguageContext from './components/LanguageContext';



const App = () => {
    
    const [language, setLanguage] = useState('Shakespeare');
    const contextValue = {
        language,
        updateLanguage : setLanguage
    }
    
    return (
        <LanguageContext.Provider value={contextValue}>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' exact component={About}/>
            <Route path='/skills' exact component={Skills}/>
            <Route path='/works' exact component={Works}/>
            <Route path='/contact' exact component={Contact}/>
        </Switch>
        </LanguageContext.Provider>
    );
};

export default App;