import React from "react";
import "./Home.css";
import HeroImg from "../assets/heroImg.svg"
import Message from "../assets/flow-mess-img.svg";
import Guide from "../assets/flow-guide-img.png";
import Arrow2 from "../assets/Vector3.png";
import Arrow3 from "../assets/Vector4.png";
import IMG1 from "../assets/flow-img1.svg";
import Eclipse from "../assets/eclipse.svg";
import Twitter from "@material-ui/icons/Twitter";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Facebook from "@material-ui/icons/Facebook";

const Home = () => {
  return (
    <div className="landing__page">
      <div className="hero__section">
        <h1><span>Build, Revamp, Compose</span><br />your resume with <span style={{color:"#0C0633;"}}>Resumate</span></h1>
        <p>Elevate your resume from the pile and secure your spot in the interview room with RESUMATE. Craft stylish and stunning, "industry-ready" resumes tailored for your dream job.</p>
        <button>Get Started</button>
        <img src={HeroImg} alt="" />
      </div>
      <div className="flow ">
        <h2
          className="mt-5"
          style={{ fontSize: "40px", fontWeight: "600", textAlign: "center" }}
        >
          <span style={{ color: "#3018CD", marginRight: "5px" }}>Resumate</span>
          Process
        </h2>
        <p style={{ textAlign: "center" }}>How it works</p>
        <div className="flow__01 flex justify-around align-middle mt-5">
          <div className="flow__content">
            <h1>01</h1>
            <h3>Choose a Template</h3>
            <p>
              Customize to fit your needs with styles that define YOU! Whether
              you prefer modern, traditional, or sleek, WE GOT YOU!
            </p>
          </div>
          <img src={IMG1} alt="" />
        </div>
        <img
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
          src={Arrow2}
          alt=""
        />
        <div className="flow__01 flex justify-around align-middle">
          <img src={IMG1} alt="" />
          <div
            className="flow__content"
            style={{ textAlign: "right", marginLeft: "20px" }}
          >
            <h1>01</h1>
            <h3>Choose a Template</h3>
            <p>
              Customize to fit your needs with styles that define YOU! Whether
              you prefer modern, traditional, or sleek, WE GOT YOU!
            </p>
          </div>
        </div>
        <img
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
          src={Arrow3}
          alt=""
        />
        <div className="flow__01 flex justify-around align-middle mt-5">
          <div className="flow__content">
            <h1>01</h1>
            <h3>Choose a Template</h3>
            <p>
              Customize to fit your needs with styles that define YOU! Whether
              you prefer modern, traditional, or sleek, WE GOT YOU!
            </p>
          </div>
          <img src={IMG1} alt="" />
        </div>
      </div>
      <div className="message flex">
        <div className="message__text">
          <h2>
            VOILA!!! You just Revamped your Resume in Just 3 Playful and
            Effortless Steps!
          </h2>
          <p>
            We make an effortless and user-friendly experience. The platform
            simplifies the process, offering intuitive templates and formatting
            options that make your resume look polished and impressive. It's
            hassle-free and allows for easy edits, ensuring you can create a
            standout resume with ease.
          </p>
        </div>
        <img className="message-img" src={Message} alt="" />
      </div>
      <div className="message__guide flex">
        <img src={Guide} alt="" />
        <div className="message__guide__text">
          <h2>
            <span>Badge Up for Glory </span> <br /> The Secret Sauce to
            Elevating Your Profile.
          </h2>
          <p>
            Badges put you on lime lights. Likewise every resume needs certain
            badges to make it out of the crowd. Following additional information
            works as your Badges and helps to elevate your profile
          </p>
          <button>Check Guide</button>
        </div>
      </div>
      <hr
        style={{
          margin: "10px 50px 0 50px",
          strokeWidth: "2px",
          stroke: "rgba(40, 20, 251, 0.40)",
        }}
      />
      <div className="footer">
        <h2>Resumate</h2>
        <p>
          Hello, we are Resumate, Simplifying resume creation with our
          user-friendly platform. Choose from intuitive templates, format
          effortlessly, and edit with ease for a standout result.
        </p>
      </div>
      <hr />
      <div className="desclaimer">
        <img src={Eclipse} alt="" />
        <p>© 2023 Resumate. All Rights Reserved. </p>
        <div className="socials">
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <LinkedIn />
          </a>
          <a href="#">
            <Twitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
