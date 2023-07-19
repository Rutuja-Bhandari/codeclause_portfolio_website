import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EnvelopeFill } from 'react-bootstrap-icons';
// import { AiOutlineMail } from 'react-icons/ai';
import { faWhatsapp,faInstagram,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaCode } from 'react-icons/fa';
const styles={
    nav:{
        backgroundColor:"black",
    //     minHeight:"10vh"
    },
    text:{
        color:"white"
    },
    icon:{
        display:"inline-flex",
        flexDirection:'row'
    },
    icon1:{
        color:"aqua",
        height:"5vh",
        margin:"1vh",
        width:"5vh"
    },
    icon2:{
        height:"4vh",
        width:"4vh"
    }
}

export default function Navbar() {
  return (
    <div style={styles.nav}>
      <nav class="navbar navbar-expand-lg navbar-light">
  <span class="navbar-brand" style={styles.text}>Rutuja</span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#" style={styles.text}>Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" style={styles.text}>Link</a>
      </li>
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
      
      <div style={styles.icon}>
        
    <div style={styles.icon1}>
      <FontAwesomeIcon style={styles.icon2} icon={faLinkedin} />
    </div>
    
    <div style={styles.icon1}>
      <FontAwesomeIcon style={styles.icon2} icon={faGithub} />
    </div>
    <div style={styles.icon1}>
      <FaCode style={styles.icon2} />
    </div>
    
    <div style={styles.icon1}>
      <FontAwesomeIcon style={styles.icon2} icon={faInstagram} />
    </div>
    <div style={styles.icon1}>
        <FontAwesomeIcon style={styles.icon2} icon={faWhatsapp} />
        </div>
        <div style={styles.icon1}>
      <EnvelopeFill style={styles.icon2}/>
    </div>
    </div>
    </form>
  </div>
</nav>
    </div>
  )
}
