import React, {useEffect, useState} from 'react';


import { projects, projectList } from "../../data/projects-data";
import Project from "./Project";
import ProjectInfos from './ProjectInfos';




const Projects = () => {

    const [index, setIndex] = useState(0)
    
    const { project0, project1, project2} = projects;
    
    const infosTrigger = ()=>{
        const infosDiv = document.querySelector('.infos-project');
        const listProject = document.querySelector('.projects-list ul');
        infosDiv.classList.toggle('active');
        listProject.addEventListener('click', ()=> infosDiv.classList.remove('active'));
        window.addEventListener('keydown', ()=> infosDiv.classList.remove('active'));
        window.addEventListener('wheel', ()=> infosDiv.classList.remove('active'));
        
        //index project
        const currentIndex = document.querySelector('.projects-list .active').dataset.index;
        setIndex(currentIndex);
    }

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
        handleScript('tilt', "./scripts/tilt/vanilla-tilt.js");
        handleScript('anime', "./scripts/anime/lib/anime.min.js" )
        handleScript('pieces', "./scripts/pieces/dist/pieces.min.js" )
        handleScript('mypieces', "./scripts/mypiece/pieces.js" )        
    }, []);    
   
    
    return (
        <main className="projects-container js">
            <div className="pieces-slider">
                <Project project={project0} /> 
                <Project project={project1} /> 
                <Project project={project2} />
                
                <canvas className="pieces-slider__canvas"></canvas>

                <div className="projects-list">                    
                    <span className="handFont">&lt;ul class="projects-list"&gt;</span>
                    <ul>
                        {
                            projectList.projectName.map((project, i)=>{
                                const id = "id";
                                return (
                                    <li key={i} data-index={i} className="">
                                        li 
                                        <span className="green">&nbsp; {id.split('').map((letter, i )=>{
                                                return(
                                                <span data-letter={Math.floor(Math.random() * 5) + 1  } key={i}>{letter}</span>
                                                )
                                            })}
                                        </span>
                                        <span className="white" data-letter="5">=</span>
                                        <span className="yellow">{project.split('').map((letter, i )=>{
                                                return(
                                                <span data-letter={Math.floor(Math.random() * 5) + 1  } key={i}>{letter}</span>
                                                )
                                            })}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <span className="handFont">&lt;/ul&gt;</span> 
                </div>
            </div>


            <article className="infos-project">
                
                <div className="infos-btn">
                    <span className="handFont">&lt;button&gt;</span>
                    <button
                        onClick= {()=>infosTrigger()}
                    >
                        + infos
                    </button> 
                    <span className="handFont">&lt;/button&gt;</span>
                </div>
                
                    <div className="card-container">
                        <div 
                            className="infos-card" 
                            data-tilt 
                            data-tilt-max="25" 
                            data-tilt-speed="400" 
                            data-tilt-glare = "true"
                            
                        >        
                                {Object.entries(projects).map((project, i)=>{
                                    if(i == index){
                                    return <ProjectInfos project={project[1]} key={i}/>   
                                    }                               
                                })}
                        </div>
                    </div>    
            </article>          
        </main>
    )
}

export default Projects;