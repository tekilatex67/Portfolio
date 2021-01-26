import React, { useState } from 'react';

const IsometricBlock = props => {

    const [ hoverState, setHoverState ] = useState(false);

    const handleMouseEnter = (e) => {
        setHoverState(true);
    }
     
    const handleMouseLeave = () => {
        setHoverState(false);
    }


    return (
        <li 
            className="iso-list-item"
            key={props.language} 
            onMouseLeave={handleMouseLeave} 
            onMouseEnter={handleMouseEnter}
        >
            <div className="iso-block">
                <span></span>
                {[...Array(props.number)].map((number, i)=>{
                    
                return  <span 
                                key={i}
                                style={{...(hoverState && {transform:`translate(${i*10}px, -${i*10}px)`, opacity:`${(1+i)/10}`})}}
                            ></span>
                })}
                <span style={{...(hoverState && {transform:`translate(${props.number*10}px, -${props.number*10}px)`,opacity:`${props.number/10}` })}}>
                    <props.icon  style={{color: props.color}} size={30}/>
                </span>
            </div>
            <h4>{props.language}</h4>
        </li>
    );
};

export default IsometricBlock;