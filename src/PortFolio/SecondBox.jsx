import React from 'react'
import guy from '../Assests/guy.png'

const SecondBox = () => {
  return (
    <>
    <div className="secondbox">
      <h1 className="text" style={{color:'#FCA738'}}>Hi,I am Thammali Abhishek</h1>
      <h1 className="text" style={{color:'white'}}>A Front-end-Developer</h1>
      <h6 className="textone" style={{color:'#FBF3E4'}}>Get ready to turn ideas into reality</h6>
      <button className="btn btn-info btn1">Hire Me</button>
      <button className="btn btn-warning btn2">Get Resume</button>
      <div>
      <img src={guy} 
       className="guy"
       alt=''/>
      </div>
      

    </div>
    </>
   
  )
}

export default SecondBox