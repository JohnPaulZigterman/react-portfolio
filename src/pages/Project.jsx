import React from "react";
import "../style.css";

function Project(props) {
    return (
        props.projects.map((project) => (
        <div class="card w-25">
          <div class="card-header">
            <h2>{project.name}</h2>
          </div>
          <div class="card-body">
            <img src={project.img} width="300" height="200"></img>
          </div>
          <div class="card-footer">
            <a href={project.github}>See The GitHub Repository</a>
            <br></br>
            <a href={project.live}>See The Deployed Application</a>
          </div>
        </div>
        )
    ));
}

export default Project;