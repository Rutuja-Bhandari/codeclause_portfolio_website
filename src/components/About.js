import React from 'react'
const styles={
    heading:{
        textAlign: "center",
        fontSize: "3rem",
    },
    container:{
        margin:"5vh",
border: "2px solid #18021c",
borderRadius: "4vh",
backgroundColor: "#4d065b",
boxShadow: "2vh 2vh #5e5361",
color:"white",
width:"100vh"
    },
    about:{
        fontSize:"1.3rem",
        padding:"5vh"
    }
}
export default function About() {
  return (
    <div style={styles.container}>
      <p style={styles.heading}>Skills</p>
      <div>
        <div>SQL</div>
        <div>C++</div>
        <div>Java</div>
        <div>Python</div>
      </div>
      <div>
        <div>MongoDB</div>
        <div>NOdejs</div>
        <div>Javascript</div>
        <div>React</div>
      </div>
      {/* <p style={styles.heading}>About Me</p>
      <p style={styles.about}>Hello ! Myself, Rutuja Bhandari I am a student of Computer Engineering at Vishwakarma Institute of Information Technology, Pune (Batch 2025). I am a web Developer, a passionate coder, and an ML enthusiast. I am good at competitive programming. I like to build websites that help solve real-life problems. I also build models for machine learning. On the journey of life, I am always learning.  </p> */}
    </div>
  )
}
