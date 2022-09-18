import React from 'react'
import guytwo from '../Assests/guytwo.png'
import html from '../Assests/html.png' 
import css from '../Assests/css.png'
import js from '../Assests/js.png'
import netlify from '../Assests/netlify.png'
import bootstrap from '../Assests/bootstrap.png'
import react from '../Assests/react.png'
import github from '../Assests/github.png'







const ThirdCont = () => {
  return (
    <>
     <div className="card cardsone" style={{backgroundColor:'lightgray'}}>
         <div className="card-body thirdcontainer" >
            <img src={guytwo} alt='' height="400px" className="guytwo"/>
             <div>
             <h3 className="about">About Me</h3>
             <p className="aboutme" style={{color:'green'}}>I'm a web designer & Front-End developer.Completed training and learning skills in PREPBYTES for 6 months.I am familiar with skills and technologies like HTML,CSS,JAVASCRIPT,REACT for the front-end part of the web application or the web page design.My main focus is on giving the best user experience with all my skills and creativity.I am more passionate on the web applications and web designs. </p>
             <p className="aboutme"  style={{color:'green'}}>I enjoy working  on the complex problems or the designs. I will learn new skills from experience developer and i will  work on it to resolve the problem in a simple way.With all my skills,creativity,passion of learning new technologies i wanna build a real-time project according to the new technologies. </p>
             <div className="tech">
              <h5 className="tech"style={{color:'green'}}>Languages/Technologies/Library</h5>
                <img className="logos"  src={html} alt='' />
                <img className="logos"  src={css} alt='' />
                <img className="logos"  src={js} alt='' />
                <img  className="logos" src={netlify} alt='' />
                <img  className="logos" src={bootstrap} alt='' />
                <img  className="logos" src={react} alt='' height="50px" />
                <img  className="logos" src={github} />

             </div>
             </div>
         </div>
       
         
     

          

    </div>
    </>
   
  )
}

export default ThirdCont