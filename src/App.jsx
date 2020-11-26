import "./App.scss";
import { MdPlayArrow, MdPause, MdClose } from "react-icons/md";
import React, { useState } from "react";
import logo from "./logo.png";
import audiosrc from "./Spoiler.mp3";
import ReactPlayer from "react-player";

const App = () => {
  const [musicPlay, setMusicPlay] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);

  return (
    <>
      <div className="app">
        <div
          className="card"
          style={
            cardOpen ? { height: "0px", border: "none" } : { height: "500px" }
          }
        >
          <div className="icon">
            <img id="logo" src={logo} alt="" />
          </div>
          <nav>
            <a href="#t" onClick={() => setCardOpen(true)}>
              about
            </a>
            <a
              href="https://github.com/ValentinMitran"
              target="_blank"
              rel="noreferrer"
            >
              projects
            </a>
            <a
              href="https://www.linkedin.com/in/valentinmitran/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </a>
            <a
              href="https://drive.google.com/file/d/1BC63TwSXivTFdvMOA_C5QK_O6dwYr3Jy/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              resume
            </a>
          </nav>
        </div>

        <div
          className="card"
          style={
            cardOpen ? { height: "500px" } : { height: "0px", border: "none" }
          }
        >
          <div className="content">
            <MdClose
              onClick={() => {
                setCardOpen(false);
              }}
            />
            <h1>Hello</h1>
            <p>
              I'm Valentin, a web developer that loves what he does ! <br /> I
              couldn't ask for a better field to be in.
            </p>
            <p>
              The ability to bring my own thoughts and ideas to life by creating
              websites and web apps fascinates me.
            </p>
            <p>
              Oh, yeah, and if you haven't figured it out yet... <br />
              <span id="cyberpunk-p">
                <br />i love the <span id="cyberpunk"> cyberpunk</span> genre
              </span>
            </p>
          </div>
        </div>
        <div className="music-player">
          <span>Hyper - Spoiler</span>
          {musicPlay ? (
            <MdPause
              onClick={() => {
                setMusicPlay(!musicPlay);
              }}
            />
          ) : (
            <MdPlayArrow
              onClick={() => {
                setMusicPlay(!musicPlay);
              }}
            />
          )}
          <ReactPlayer
            url={audiosrc}
            playing={musicPlay}
            volume="0.2"
            loop="true"
            style={{ display: "none" }}
          />
        </div>
      </div>
    </>
  );
};
export default App;
