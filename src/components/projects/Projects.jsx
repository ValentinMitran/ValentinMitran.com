import React from "react";
import "./Projects.scss";
import { MdClose } from "react-icons/md";

const Projects = ({ openProjects, setOpenProjects }) => {
  return (
    <>
      <div
        className={
          openProjects ? "projects open-project" : "projects closed-project"
        }
      >
        <header>
          <MdClose onClick={() => setOpenProjects(false)} />
          <h1
            class="glitch"
            data-text="
        Projects"
          >
            Projects
          </h1>
        </header>

        <section className="project">
          <span>Cyberpunkify</span>
          <span className="underline"></span>
          <div className="project-inner">
            <div className="project-inner-text">
              Cyberpunkify is css library built from scratch by me. The main
              reason for writting this library is pretty basic: I LOVE the
              CYBERPUNK genre.
              <ul>
                <li>Responsive System</li>
                <li>Well-tailored ui elements</li>
                <li>Cyberpunk animations & more.</li>
              </ul>
            </div>
            <div className="img">
              <img src="https://i.imgur.com/jxJ0XFy.png" alt="" />
            </div>
          </div>
          <div className="buttons">
            <button
              className="view-online"
              onClick={() =>
                window.open("https://cyberpunkify.netlify.app", "_blank")
              }
            >
              DEMO
            </button>
            <button
              className="view-source"
              onClick={() =>
                window.open(
                  "https://github.com/ValentinMitran/Cyberpunkify",
                  "_blank"
                )
              }
            >
              Source Code
            </button>
          </div>
        </section>
        <section className="project" style={{ paddingBottom: "50px" }}>
          <span>Freelancer's Guardian</span>
          <span className="underline"></span>
          <div className="project-inner">
            <div className="project-inner-text">
              I started this project because I know how frustrating and
              difficult the life of a freelancer is.
              <ul>
                <li>CRM system</li>
                <li>Statistics</li>
                <li>Hand-picked features</li>
                <li>Free. Forever.</li>
              </ul>
            </div>
            <div className="img">
              <img src="https://i.imgur.com/JN22AwK.png" alt="" />
            </div>
          </div>
          <div className="buttons">
            <button
              className="view-online"
              onClick={() =>
                window.open("https://freelancersguardian.netlify.app", "_blank")
              }
            >
              DEMO
            </button>
            <button
              className="view-source"
              onClick={() =>
                window.open(
                  "https://github.com/ValentinMitran/FreelancersGuardian",
                  "_blank"
                )
              }
            >
              Source Code
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
