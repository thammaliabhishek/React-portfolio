import React from 'react'
import email from '../Assests/email.png'
import phone from '../Assests/call.png';
import mark from '../Assests/marker.png';
import thankyou from '../Assests/thankyou.png'

const Connect = () => {
  return (
<>
<div className="card connect">
<div className="body-card connectone">
        <h2 className="contact">Contact Me</h2>
     </div>
     <div className="card-body fourcontainer">
      <div className="details">
        <h3 className="send">Let's Connect</h3>
        <p>I am from Telangana state and i will stay in Hyderabad.I will be avaliable on my mail and my phone,You can Contact me at any time</p>
        <p><img className="mail"  src={email} alt=''/>:thammaliabhishek05@gmail.com</p>
        <p ><img className="mail"  src={phone} alt=''/>:7995564800</p>
        <p><img className="mail"   src={mark} alt=''/>:HYDERABAD</p>
      </div>
      <div className="message" > 
          <h3 className="send">Send me a message</h3>
          <div className="formone">
            <form>
             <label>First & LastName</label><br/>
            <input type="text" /><br/>
            <label>Phone Number</label><br/>
            <input type="number" /><br/>
            <label>Email address</label><br/>
            <input type="email" /><br/>
            <label>Message</label><br/>
            <textarea className="textarea"/>
            <button className="btn btn-warning click">Send Message</button>
          </form>
          </div>
        </div>
        <div className="thankyou">
            <img className="thanks" src={thankyou} alt=''/>
          </div>

     </div>
      
</div>
</>


  )
}

export default Connect



/*
 <form>
            <label>First & LastName</label>
            <input type="text" />
            <label>Phone Number</label>
            <input type="number" />
            <label>Email address</label>
            <input type="email" />
            <label>Message</label><br/>
            <textarea style={{marginLeft:'0px',width:'189px'}}/>
            <button className="btn btn-warning" style={{marginLeft:'40px',margin:'5px'}}>Send Message</button>
          </form>


*/