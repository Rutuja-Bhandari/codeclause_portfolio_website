import React from 'react'
import MyImage from "./photos/Rutu_image.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// import { FaCode } from 'react-icons/fa';


const styles={

    info:{
        color: "white",
margin: "15vh 20vh",
fontSize: "2.5vh",
    },
    container:{
        display:'flex',
        flexDirection:'row',
        // minHeight:"90vh",
    },
    box1:{
        fontSize: "3.0rem",
        background: "linear-gradient(45deg, pink, purple)",
webkitBackgroundClip: "text",
webkitTextFillColor: "transparent",
    },
    box2:{
        fontSize: "3.5rem",
        color: "aqua",
        textShadow: "4px 4px black",
    },
    box3:{
        fontSize: "1.1rem",
    },
    photo:{
        width: "50vh",
height: "50vh",
borderRadius: "50%",
marginTop: "15vh",
backgroundColor: "#bb0084",
border:" 1vh solid aliceblue",
    },
    
    
}

export default function Home() {
  return (
    <div className="Container" style={styles.container}>
      <div className='info' style={styles.info}>
        <h2 >Hey there, I'm</h2>
        <h1 style={styles.box2}><b>Rutuja Bhandari</b></h1>
        <h2 style={styles.box1}><b>Web Developer</b></h2>
        <p style={styles.box3}> I am a student of Computer Engineering at Vishwakarma Institute <br/> of Information Technology, Pune (Batch 2025).<br/>I like to build websites and models for machine learning that help solve real-life problems.<br/>I am an enthusiastic and passionate learner who is always keen to learn new technologies.</p>
        
    <div>
    <button type="button" class="btn btn-outline-primary">View Resume</button>
    </div>
    
      </div>
      
      <div className='photo' >
        <img src={MyImage} style={styles.photo} alt="Rutuja"/>
      </div>
    </div>
  )
}
