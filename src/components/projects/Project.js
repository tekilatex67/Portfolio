import React from 'react'


const Project = props => {

    const {number, title, technos, image, description, backgroundText} = props.project;


    return (
        <div className="pieces-slider__slide">
            <img className="pieces-slider__image" src={image} alt={title}/>
            <div className="pieces-slider__text" data-background={backgroundText}>{title}</div>
        </div>
    )
}

export default Project;