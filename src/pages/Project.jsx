import React from "react";
import "../style.css";

function Project(props) {
    return (
        props.projects.map((project, index) => (
        <div className="card w-25" key={index}>
          <div className="card-header">
            <h2>{project.name}</h2>
          </div>
          <div className="card-body">
            <img src={project.img} width="300" height="200"></img>
          </div>
          <div className="card-footer">
            <a href={project.github}>See The GitHub Repository</a>
            <br></br>
            <a href={project.live}>See The Deployed Application</a>
          </div>
        </div>
        )
    ));
}

export default Project;