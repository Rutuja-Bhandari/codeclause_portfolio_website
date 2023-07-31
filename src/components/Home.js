import React, { useState, useEffect } from "react";
import "./css/Home.css";
import MyImage from "./photos/Rutu_image.png";
import resume from "./Resume.pdf";

export default function Home() {
  const [word, setWord] = useState("Web Developer");
  useEffect(() => {
    const interval = setInterval(() => {
      if (word === "Web Developer") {
        setWord("ML Enthusiastic");
      } else if (word === "ML Enthusiastic") {
        setWord("Competitive Programming");
      } else if (word === "Competitive Programming") {
        setWord("Web Developer");
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [word]);
  return (
    <div id="home" className="container2">
      <div className="info">
        <h2>Hey there, I'm</h2>
        <h1 className="box4">
          <b>Rutuja Bhandari</b>
        </h1>
        <h2 className="box5">
          <b>{word}</b>
        </h2>

        <p className="box3">
          {" "}
          I am a student of B.Tech Computer Engineering at Vishwakarma Institute{" "}
          <br /> of Information Technology, Pune (Batch 2025).
          <br />I like to build websites and models for machine learning that
          help solve real-life problems.
          <br />I am an enthusiastic and passionate learner who is always keen
          to learn new technologies.
        </p>

        <div>
          <a href={resume} type="button" class="btn btn-outline-primary">
            View Resume
          </a>
        </div>
      </div>

      <div>
        <img className="photo" src={MyImage} alt="Rutuja" />
      </div>
    </div>
  );
}
