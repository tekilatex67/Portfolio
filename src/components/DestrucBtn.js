import React from 'react'

const DestrucBtn = props => {
    
    const {word} = props;
    
    const handleHover = (e) =>{
        document.querySelectorAll('.btn-contain').forEach(btn => {
            if(btn !== e.target)return;
            
            btn.addEventListener('mouseover', function(){
                btn.querySelectorAll('span').forEach(letter=>{
                letter.style.transform = `translateY(${Math.floor(Math.random()* 5 + -3)}rem)`
                
                })
            })
            btn.addEventListener('mouseout', function(){
                btn.querySelectorAll('span').forEach(letter=>{
                letter.style.transform = `translateY(0rem)`
                })
            })   
        });
    } 
    

    return (
        <button 
            className="btn-contain" 
            onMouseOver={(e)=> handleHover(e)}
            onMouseLeave={(e)=> handleHover(e)}
        >
            {Array.from(word).map((letter, i) =>{
                return(
                    <span key={i} className='letter'>{letter}</span>
                )
            })}
        </button>
    )
}

export default DestrucBtn;