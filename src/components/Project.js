import React from 'react'
import './css/Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
export default function Project() {
  return (
    <div id="projects" className="projectdiv">
        <h1  className="project"><b>My Projects</b></h1>
        <div className="projectgrid">
      <div className="projectcard">
        <h1 className="heading1">Modish Trade</h1>
        <p className="description1">This website helps us to easily buy,sell,rent,donate and demand products at our wish. We also have sucessfully integrated a payment interface for flawless payment and also integrated a telegram chatbot for user a friendly experience while demanding or donating a product . The buyer can also chat with the seller via the WhatsApp chat link provided in the website.The website is easy to navigate and also provides a great user interface and is also connected to mongodb through mongoose driver which are used for fast transaction speed. </p>
<div className="Technology">
    <div className="techstack">HTML</div>
    <div className="techstack">CSS</div>
    <div className="techstack">Javascript</div>
    <div className="techstack">MongoDb</div>
    
</div>
<div className="Technology">
<div className="techstack">Nodejs</div>
    <div className="techstack">Api</div>
    <div className="techstack">Figma</div>
    </div>
<div className="date">
    <div>
    <p>June 2023</p>
    </div>
    <div>
    <a href={`https://github.com/sharvil112003/Jamshack_Hackathon`} type="button" class="btn btn-outline-primary"><FontAwesomeIcon icon={faGithub} />Github</a>
    </div>
</div>
      </div>
      <div className="projectcard1">
        <h1 className="heading1">Hotel Management System</h1>
        <p className="description2">Hotel Management System is the website build for for the hotel to mantain their recorders of their customers. Through this website a user can also book the hotel rooms.It can show the availability of room , also contains the details of checkin,checkout, cancel booking,generate the bills.It offers a 2-year 
membership for exclusive access to a particular room. </p>
<div className="Technology">
    <div className="techstack">HTML</div>
    <div className="techstack">CSS</div>
    <div className="techstack">Javascript</div>
    <div className="techstack">SQL</div>
    <div className="techstack">PHP</div>
</div>
<div className="date">
    <div>
    <p>March 2023-April 2023</p>
    </div>
    <div>
    <a href={`https://github.com/Rutuja-Bhandari/Hotel-Management-System`} type="button" class="btn btn-outline-primary"><FontAwesomeIcon icon={faGithub} />Github</a>
    </div>
</div>
      </div>
      <div className="projectcard2">
        <h1 className="heading1">Smart watch integrated chatbot</h1>
        <p className="description3">It is the Chatbot integrated with the sensor GSR,HRV. Sensors are used to measure the Real time data and when it detect stress the chatbot gets activated to reduce the stress by its communication. It's data is used to make it more accurate</p>
<div className="Technology">
    <div className="techstack">RASA</div>
    <div className="techstack">Python</div>
    <div className="techstack">IOT</div>
    <div className="techstack">Github</div>
</div>
<div className="date">
    <div>
    <p>Aug 2022- Nov 2022</p>
    </div>
    <div>
    <button type="button" class="btn btn-outline-primary"><FontAwesomeIcon icon={faGithub} />Github</button>
    </div>
</div>

        
      </div>
      </div>
    </div>
  )
}
