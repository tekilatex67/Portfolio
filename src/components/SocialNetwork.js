import React from 'react';
import {IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter} from 'react-icons/io';

const SocialNetwork = () => {

    const handleIcon = ()=>{
        
        const navLinks = document.querySelectorAll('.social-list a');
        navLinks.forEach(link =>{
            link.addEventListener('mouseover', (e)=>{

                let posX = e.offsetX - 20;
                let posY = e.offsetY - 20;

                link.style.transform = `translate(${posX}px, ${posY}px)`;
            })
            link.addEventListener('mouseleave', ()=>{
                link.style.transform = '';
            })
        })
    }
    


    return (
        <div className="social-network">
            <ul className="social-list">
                <a href="https://www.linkedin.com/in/nicolas-klipfel-7871a21b3/" target='blank' rel="noopener noreferrer" onMouseOver={handleIcon}>
                    <li><IoLogoLinkedin size={25}/></li>
                </a>
                <a href="https://www.instagram.com/don_key.shot_devfront/" target='blank' rel="noopener noreferrer" onMouseOver={handleIcon}>
                    <li><IoLogoInstagram size={25}/></li>
                </a>
                <a href="https://twitter.com/DCodeshot" target='blank' rel="noopener noreferrer" onMouseOver={handleIcon}>
                    <li><IoLogoTwitter size={25}/></li>
                </a>
            </ul>            
        </div>
    );
};

export default SocialNetwork;