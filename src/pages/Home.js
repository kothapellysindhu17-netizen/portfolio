import React from "react";
import profile from "../profile.jpg";

function Home() {
  return (
    <div className="container">
      <h1>Sindhu Kothapally</h1>

      <img
        src={profile} 
        alt="profile" 
        className="profile-img"
      />

      <h2>About Me</h2>
      <p>I am a B.Tech student interested in Web Development and Machine Learning.</p>

      <h2>Research Interests</h2>
      <p>Machine Learning, NLP, React Development</p>

      <h2>Personal Details</h2>
      <p>Phone: 9876543210</p>
      <p>Email: kothapellysindhu17@gmail.com</p>
      <p>College Email: se23umcs028@mahindrauniversity.edu.in</p>

      {/* 👉 ADD HERE */}
      <p>
        <b>GitHub:</b>{" "}
        <a 
          href="https://github.com/kothapellysindhu17-netizen" 
          target="_blank" 
          rel="noreferrer"
        >
          View Profile
        </a>
      </p>

      <h2>Skills</h2>
      <ul>
        <li>Java</li>
        <li>MySQL</li>
        <li>React</li>
        <li>Python</li>
      </ul>
    </div>
  );
}

export default Home;