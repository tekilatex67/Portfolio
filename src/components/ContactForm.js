import React, { useState, useContext } from 'react'
import LanguageContext from '../components/LanguageContext';
import { formDatas } from '../data/languages-data'; 
import emailjs from 'emailjs-com';


const ContactForm = () => {

    const {fr, en } = formDatas;
    const language = useContext(LanguageContext);
    
    const  [name, setName]  = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        let nameInput = document.getElementById('name');
        let mailInput = document.getElementById('email');
        let subjectInput = document.getElementById('subject');
        let messInput = document.getElementById('message');
        let formMess = document.querySelector('.form-message');

        const isEmail = () => {
            let isMail = document.getElementById("not-mail");
            let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if (mail.match(regex)) {
              isMail.style.display = "none";
              return true;
            } else {
              isMail.classList.add("error")
              mailInput.parentNode.classList.add("error");
              return false;
            }
          };

          if ( isEmail() && name && subject && message){
            const templateId = 'template_1i86nbu';
            
            sendFeedback(templateId, {
            name,
            phone,
            mail,
            subject,
            message
          });
          }else{
            formMess.innerHTML = "Merci de remplir correctement les champs requis";           
            formMess.style.opacity = "1";
            formMess.style.color = "#F0503E";
      
            if (!name) {
              nameInput.parentNode.classList.add("error");
            }
            if (!mail) {
              mailInput.parentNode.classList.add("error");
            }
            if(!subject){
                subjectInput.parentNode.classList.add("error");
            }
            if (!message) {
              messInput.parentNode.classList.add("error");
            }
          }
        }
          const sendFeedback = (templateId, variables) => {
            let formMess = document.querySelector(".form-message");
        
            emailjs
              .send("service_51kn2fn", templateId, variables, "user_Zq7OP5sBKGASlkj9zRplj")
              .then((res) => {
                formMess.innerHTML =
                  "Message envoyé ! Nous vous recontacterons dès que possible.";
                formMess.style.opacity = "1";
                formMess.style.color = "#d49417";
        
                document.getElementById("name").classList.remove("error");
                document.getElementById("email").classList.remove("error");
                document.getElementById("message").classList.remove("error");
                setName("");
                setSubject("");
                setPhone("");
                setMail("");
                setMessage("");
        
                setTimeout(() => {
                  formMess.style.opacity = "0";
                }, 5000);
              })
              .catch(
                (err) =>
                  (formMess.innerHTML =
                    "Une erreur s'est produite, veuillez réessayer.")
              );
        };
    
    const handleFocus = (e) =>{
      let parentDiv = e.target.parentNode
        let underline =  parentDiv.querySelector('.underline');
        underline.style.background = '#d49417';
        underline.style.transform = 'scaleX(.9)';
        //mail remove mess
        if( parentDiv.querySelector('label') && parentDiv.querySelector('label').classList.contains('error')){
            parentDiv.querySelector('label').classList.remove('error')
        }
        
    }  
    const handleBlur = (e)=>{
      let underline =  e.target.parentNode.querySelector('.underline');
      underline.style.background = '#66fad3';
      underline.style.transform = 'scaleX(1)'
    }

    const handleChange = (e) =>{  
      if(e.target.parentNode.classList.contains('error') && e.target.value.length > 0){
        e.target.parentNode.classList.remove('error')
      }
    }
    
    
    return (
        <form>
            <div className="coord-line">
               
                <div className="input">
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        required
                        onChange={(e)=> {
                            setName(e.target.value);
                            handleChange(e)
                        }}
                        onFocus={(e)=>handleFocus(e)}
                        onBlur={(e)=> handleBlur(e)}
                        value={name}
                        placeholder={language.language === "Shakespeare" ? en.name : fr.name }
                    />
                  <span className="underline"></span>
                </div>
                
                <div className="email-content input">
                <label id="not-mail">Email non valide</label>
                    
                      <input
                          type="mail"
                          id="email"
                          name="email"
                          required
                          onChange={(e) => {
                            setMail(e.target.value)
                            handleChange(e)
                          }}
                          onFocus={(e)=>handleFocus(e)}
                          onBlur={(e)=> handleBlur(e)}
                          placeholder="Email"
                          value={mail}
                      />
                   <span className="underline"></span>
                </div>
               
                <div className="input">
                  
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        onFocus={(e)=>handleFocus(e)}
                        onBlur={(e)=> handleBlur(e)}
                        placeholder={language.language === "Shakespeare" ? en.phone : fr.phone }
                        value={phone}
                    /> 
                   <span className="underline"></span>
                </div> 
            </div>
            
            <div className="subject-content input">
              
                <input 
                        type="text"
                        id="subject"
                        required
                        name="subject"
                        onChange={(e)=> {
                          setSubject(e.target.value)
                          handleChange(e)
                        }}
                        onFocus={(e)=>handleFocus(e)}
                        onBlur={(e)=> handleBlur(e)}
                        value={subject}
                        placeholder={language.language === "Shakespeare" ? en.subject : fr.subject }
                />
              <span className="underline"></span>
            </div>
            
            <div className="input">
              
                <textarea
                    id="message"
                    name="message"
                    onChange={(e) => {
                        setMessage(e.target.value)
                        handleChange(e)
                    }}
                    onFocus={(e)=>handleFocus(e)}
                    onBlur={(e)=> handleBlur(e)}
                    placeholder="message"
                    value={message}
                    required
                    rows="4"
                />
              <span className="underline"></span>
            </div>
             
            <div className="button">
                <button 
                type="submit"
                onClick={handleSubmit}
            >
                  {language.language === "Shakespeare" ? en.button : fr.button }
                </button>
            </div>
           <div className="form-message">Merci de remplir correctement les champs requis</div>
           
        </form>
    )
}

export default ContactForm;