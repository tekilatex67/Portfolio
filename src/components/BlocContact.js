import React from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";

const BlocContact = props => {
    
    

    return (
        <div className="BlocContact">
            <div className="text">    
                <h4>{props.type}</h4>
                <CopyToClipboard text={props.text}>
                    <p 
                        className="clipboard" 
                        onClick={() => {alert(`${props.type} copié`);}}
                    >
                        {props.text}
                    </p>
                </CopyToClipboard>
            </div>   
            
            <div className="icon"><props.icon size={35}/></div>
        </div>
    )
}

export default BlocContact;
