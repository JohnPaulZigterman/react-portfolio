import React from "react";
import Project from "./Project";

const projects = [
  {
    name: "Album Review Site",
    img: "../review-site.png",
    github: "https://github.com/JohnPaulZigterman/review-site",
    live: "https://album-review-site-715f772b98d0.herokuapp.com/"
  },
  {
    name: "Text Editor",
    img: "../text-editor.png",
    github: "https://github.com/JohnPaulZigterman/PWA-text-editor",
    live: "https://johns-pwa-text-editor.onrender.com/"
  },
  {
    name: "Itinerary Planner",
    img: "../itinerary.png",
    github: "https://github.com/JohnPaulZigterman/itinerary-planner",
    live: "https://johnpaulzigterman.github.io/itinerary-planner/"
  },
  {
    name: "Note Taker",
    img: "../note-taker.png",
    github: "https://github.com/JohnPaulZigterman/note-taker",
    live: "https://jpz-note-taker-38ded7123bf4.herokuapp.com/"
  },
  {
    name: "Weather App",
    img: "../weather-app.png",
    github: "https://github.com/JohnPaulZigterman/weather-app",
    live: "https://johnpaulzigterman.github.io/weather-app/"
  },
  {
    name: "Workday Scheduler",
    img: "../workday-scheduler.png",
    github: "https://github.com/JohnPaulZigterman/workdayscheduler",
    live: "https://johnpaulzigterman.github.io/workdayscheduler/"
  }
];

function Portfolio() {
    return (
      <div>
        <h1>Portfolio Page</h1>
        <p>
          Just A Sample Of Projects I've Completed
        </p>
        <div class="d-flex flex-row flex-wrap">
          <Project projects={projects} />
        </div>
      </div>
    );
};

export default Portfolio;