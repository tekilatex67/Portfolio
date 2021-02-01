import React from 'react';


const ProjectInfos = props => {
   
    const { technos, description, number } = props.project;

    return (
               
            <div className="infos-content">
                <h5>0{number}</h5>
                <p className="description">{description.fr.p1}<br /> {description.fr.p2} <br /> {description.fr.p3}</p>
                <p className="technos">{technos}</p>   
            </div> 
       
    )
}

export default ProjectInfos;