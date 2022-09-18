import React from 'react'
import resume from '../Assests/resume.png'
import lin from '../Assests/in.png'
import facebook from '../Assests/fb.png'
import github from '../Assests/github.png'

const Education = () => {
  return (
    <>
    <div className="card resumeone">
     <div style={{margin:'5px'}}>
            <h1 className="resumeform">Resume</h1>
          </div>
          <div className="card-body work" >
             <h2 className="workexp">Work Experience</h2>
             <h3 className="stack">⚪FULL STACK DEVELOPER📰💻📲 (undergone-Training🧑‍💻)</h3>
             <h5 className="stack">🔹PREPBYTES🧑‍💻🧑‍💻 <span> 6 Months</span></h5>
          </div>
          <div className="card-body work">
            <h2 className="educ"><b>Education</b></h2>
            <h3 className="grad"><b>⚪GRADUATION🧑‍🎓 B.TECH</b><b className="year">2017-2022</b></h3>
            <h4 className="grad">🔹College Name:Sri Indu College Of Engineering And Technology🏫</h4>
            <h5 className="grad">🔹Branch: ELECTRONICS AND COMMUNICATION ENGINEERING⚡</h5>
            <h3 className="grad"><b>⚪Intermediate🖊️</b> <b className="yeari">2015-2017</b></h3>
            <h4 className="grad">🔹College Name: Sri Chaitanya Jr Kalasala🏫</h4>
            <h5 className="grad">🔹Branch:MPC</h5>
           <h3 className="grad"><b>⚪SCHOOLING✏️</b><b className="yearsc">2014-2015</b></h3>
            <h4 className="grad" >🔹School Name:ST.PAUL'S HIGH SCHOOL🏫</h4>
            <h5 className="grad">🔹SSC</h5>
          </div>
          <div className="thumb">
              <img className="resumeimg" src={resume}/>
              <div className="web">
              <a href="https://github.com/thammaliabhishek" target="blank">  <img className="githubi" src={github}/></a>
                <a href="https://www.linkedin.com/in/thammali-abhishek-b820301a2/" target="blank"><img className="githubl" src={lin}/></a>
                <img className="githubl" src={facebook} />
              </div>
            </div>
    </div>
    </>
  )
}

export default Education