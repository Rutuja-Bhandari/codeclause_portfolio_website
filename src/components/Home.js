import React,{ useState, useEffect } from 'react'
import './css/Home.css'
import MyImage from "./photos/Rutu_image.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// import { FaCode } from 'react-icons/fa';
import resume from "./Resume.pdf";

const styles={

//     info:{
//         color: "white",
// margin: "15vh 20vh",
// fontSize: "2.5vh",
    // },
    // container:{
    //     display:'flex',
    //     flexDirection:'row',
    //     // minHeight:"90vh",
    // },
//     box1:{
//         fontSize: "3.0rem",
//         background: "linear-gradient(178deg, red, blue)",
// webkitBackgroundClip: "text",
// webkitTextFillColor: "transparent",
//     },
    // box2:{
    //     fontSize: "3.5rem",
    //     color: "aqua",
    //     textShadow: "4px 4px black",
    // },
    // box3:{
    //     fontSize: "1.1rem",
    // },
//     photo:{
//         width: "50vh",
// height: "50vh",
// borderRadius: "50%",
// marginTop: "15vh",
// backgroundColor: "#bb0084",
// border:" 1vh solid aliceblue",
//     },
    
    
}

export default function Home() {
  const [word, setWord] = useState('Web Developer');
  // const [replacement, setReplacement] = useState('World');

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setWord((prevWord) => (prevWord === 'Web Developer' ? 'ML Enthusiastic' : 'Competitive Programming' || prevWord === 'ML Enthusiastic' ? 'Competitive Programming' : 'Web Developer'|| prevWord === 'Competitive Programming' ? 'Web Developer' : 'ML Enthusiastic'));
  //   }, 1000); // Change the word every 5000 milliseconds (5 seconds)

  //   // Cleanup the interval when the component unmounts
  //   return () => clearInterval(interval);
  // }, []);
 
  useEffect(() => {
    const interval = setInterval(() => {
      if (word === 'Web Developer') {
        setWord('ML Enthusiastic');
      } else if (word === 'ML Enthusiastic') {
        setWord('Competitive Programming');
      } else if (word === 'Competitive Programming') {
        setWord('Web Developer');
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [word]);
  return (
    <div id="home" className="container2" >
      <div className='info' >
        <h2 >Hey there, I'm</h2>
        <h1 className="box4" ><b>Rutuja Bhandari</b></h1>
        <h2 className="box5" ><b>{word}</b></h2>

        <p className="box3" > I am a student of Computer Engineering at Vishwakarma Institute <br/> of Information Technology, Pune (Batch 2025).<br/>I like to build websites and models for machine learning that help solve real-life problems.<br/>I am an enthusiastic and passionate learner who is always keen to learn new technologies.</p>
        
    <div>
    <a href={resume}  type="button" class="btn btn-outline-primary">View Resume</a>
    
   
    </div>
    
      </div>
      
      <div  >
        <img className="photo" src={MyImage} alt="Rutuja"/>
      </div>
    </div>
  )
}


