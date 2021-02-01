import React, {useEffect} from 'react';

import { projects } from "../../data/projects-data";
import Project from "./Project";




const Projects = () => {
    
    const { project1, project2, project3} = projects;
    
    function handleScript (id, source){
    
        if(document.querySelector(`#${id}`)){
            document.querySelector(`#${id}`).parentNode.removeChild(document.querySelector(`#${id}`));
        }
        let script = document.createElement("script");
        script.src = source;
        script.id = id;
        script.async = false
        document.body.appendChild(script);
    }


    useEffect(() => {

        handleScript('anime', "./assets/anime/lib/anime.min.js" )
        handleScript('pieces', "./assets/pieces/dist/pieces.min.js" )
        handleScript('mypieces', "./assets/mypiece/pieces.js" )
        
    }, []);
   
    
    return (
        <main className="projects-container js">
            <div className="pieces-slider">
                <Project project={project1} /> 
                <Project project={project2} /> 
                <Project project={project3} />
                
                <canvas className="pieces-slider__canvas"></canvas>
                
                <button className="pieces-slider__button pieces-slider__button--prev">prev</button>
                <button className="pieces-slider__button pieces-slider__button--next">next</button>

                <div className="projects-list">

                    
                    <span className="handFont">&lt;ul class="projects-list"&gt;</span>
                    <ul>
                        <li data-index="0" className="active">
                            li
                            <span className="green">&nbsp;id</span>
                            <span className="white">=</span>
                            <span className="yellow">"Kingdom of Colchis"</span>

                        </li>

                        <li data-index="1">
                            li
                            <span className="green">&nbsp;id</span>
                            <span className="white">=</span>
                            <span className="yellow">"Sushi Bar"</span>

                        </li>
                        
                        <li data-index="2">
                            li
                            <span className="green">&nbsp;id</span>
                            <span className="white">=</span>
                            <span className="yellow">"Bibliflix"</span>
                        </li>   
                    </ul>
                    <span className="handFont">&lt;/ul&gt;</span> 

                </div>
                

            </div>          
        </main>
    )
}

export default Projects;