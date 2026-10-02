import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mb-5 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>
      <div
        className="row p-3  text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col p-3 text-center">
          <img
            src="media/images/ShivamMall.png"
            style={{ width: "70%", height: "70%", borderRadius: "100%" }}
          />
          <h4 className="mt-5">Shivam Mall</h4>
          <h6>Developer, Creater</h6>
        </div>
        <div className="col p-3">
            <p>
            Shivam Mall is a Full Stack Developer and MCA student who enjoys
            turning ideas into useful web applications.
            </p> 
            <p>
             He works primarily with React.js, Node.js, Express.js, MongoDB,
             REST APIs, and JWT, and has
            also explored AI-powered applications using the Google Gemini API.
            </p>
            <p>
            From building an AI-powered chat application and a Jira-inspired
            project management system to developing a MERN-based property
            platform, he enjoys working across both frontend and backend
            development.

            </p>
            <p>

            Learning every day. Building every day. Growing into a
            better developer.
            </p>
            <p>
             Connect on 
             <a href="" style={{color:"rgb(0, 128, 255)"}}> LinkedIn </a>
             <a href="" style={{color:"rgb(0, 128, 255)"}}>/ GitHub</a>
            </p>
          
        </div>
      </div>
    </div>
  );
}

export default Team;
