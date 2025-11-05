import React from "react";
import reactLogo from "./assets/react.png";
import domIm from "./assets/dom.png";
import comImg from './assets/compp.png'

const About = () => {
  return (
    <>
      <h1 style={{ marginTop: "80px" }}>What Makes React Special</h1>
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="row container d-flex justify-content-center ">
          <div className=" col-sm-12 col-md-6 col-lg-4">
            <h2 style={{ textDecoration: "", color: "#0B1C2C" }}>
              What is React?
            </h2>
            <div style={{ minHeight: "100px", minWidth: "100px" }} className="forimg">
              <img  style={{
    width: '100%',
    maxWidth: '250px',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  }} className="img-fluid ms-5" src={reactLogo} alt="" />
            </div>
          </div>
          <div className=" col-sm-12 col-md-6 col-lg-4">
            <p style={{ color: "#4a4a4a" }}>
              React is an open-source JavaScript library created by Facebook to
              simplify UI development. It lets developers build interactive,
              component-based, and scalable user interfaces with ease. Instead
              of refreshing entire pages, React efficiently updates only what’s
              changed — creating smooth, app-like experiences.
            </p>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "80%",
          margin: "40px auto",
          border: "1px solid #00b3e6",
        }}
      />

      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="row  d-flex justify-content-center gap-5 ">
          <div className=" col-sm-12 col-md-6 col-lg-4">
            <p style={{ color: "#4a4a4a" }}>
              React uses a concept called the Virtual DOM — a lightweight copy
              of the actual DOM. When your data changes, React compares both
              versions (diffing) and updates only the affected elements. This
              makes rendering ultra-fast and efficient.
            </p>
          </div>
          <div className=" col-sm-12 col-md-6 col-lg-4">
            <h3 style={{ textDecoration: "", color: "#0B1C2C" }}>
              {" "}
              How React Works
            </h3>
            <div style={{ minHeight: "100px", minWidth: "300px" }} className="forimg">
              <img  style={{
    width: '100%',
    maxWidth: '250px',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  }} className="img-fluid ms-5" src={domIm} alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "80%",
          margin: "40px auto",
          border: "1px solid #00b3e6",
        }}
      />

      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="row container d-flex justify-content-center ">
          <div className=" col-sm-12 col-md-6 col-lg-4">
            <h4 style={{ textDecoration: "", color: "#0B1C2C" }}>
              Component-Based Architecture
            </h4>
            <div style={{ minHeight: "90px", minWidth: "150px" }} className="forimg">
              <img style={{
    width: '100%',
    maxWidth: '250px',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  }} className="img-fluid ms-5" src={comImg} alt="" />
            </div>
          </div>
          <div className=" col-sm-12 col-md-6 col-lg-4">
            <p style={{ color: "#4a4a4a" }}>
              React applications are built from independent, reusable pieces
              called components. Each component handles its own logic,
              structure, and styling — just like small building blocks. These
              components can be reused, nested, or composed together, allowing
              developers to build complex interfaces faster and cleaner
            </p>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "80%",
          margin: "40px auto",
          border: "1px solid #00b3e6",
        }}
      />
    </>
  );
};

export default About;
