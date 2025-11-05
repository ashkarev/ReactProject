import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <div className="container">
        <h1
          style={{ fontSize: "50px", color: "#0B132B",marginTop:'50px' }}
          className="text-center  text-info"
        >
          React at a Glance
        </h1>

        <p className="mt-5 ">
          React — The Power Behind Modern Web Apps <br />
          Discover how React transformed web development through reusable UI
          components and lightning-fast rendering.
        </p>

        <div className="d-flex justify-content-center">
          <button className="btn btn-primary mt-4 px-4 py-2 ">
           <Link to={'about'} style={{textDecoration:'none'}}> Explore React</Link>
          </button>
        </div>
      </div>

      <Container className=" ">
        <Row className="justify-content-center mb-5">
          <Col className="d-flex justify-content-center" sm={12} lg={6}>
            <Card style={{ width: "18rem", marginTop: "20px" }}>
              <Card.Body className="rounded-3 p-3">
                <Card.Title style={{ color: "#0B132B" }}>
                  📜 History of React
                </Card.Title>
                <Card.Text style={{ color: " #4A4A4A", marginTop: "30px" }}>
                  React was developed at Facebook by Jordan Walke in 2011 to
                  solve performance issues in dynamic UIs <br />
                  It became open-source in 2013 and has since become the
                  foundation of modern front-end development <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center" sm={12} lg={6}>
            <Card
              className="cardHome "
              style={{ width: "18rem", marginTop: "20px" }}
            >
              <Card.Body className="rounded-3">
                <Card.Title style={{ color: "#0B132B" }}>
                  ⚙️ Core Features
                </Card.Title>
                <Card.Text style={{ color: "#4A4A4A", marginTop: "30px" }}>
                  React’s strength lies in its component-based architecture,
                  which makes UI building modular and reusable. The Virtual DOM
                  ensures efficient updates, while one-way data flow makes
                  debugging predictable.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center" sm={12} lg={6}>
            <Card
              className="cardHome "
              style={{ width: "18rem", marginTop: "20px" }}
            >
              <Card.Body className="rounded-3">
                <Card.Title style={{ color: "#0B132B" }}>
                  🚀 Why Developers Love It
                </Card.Title>
                <Card.Text style={{ color: "#4A4A4A", marginTop: "30px" }}>
                  React is fast, scalable, and supported by a massive community.
                  It enables Single Page Applications (SPAs), meaning instant UI
                  updates without page reloads. Its ecosystem of tools and
                  libraries makes it ideal for both small widgets and enterprise
                  apps.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center" sm={12} lg={6}>
            <Card
              className="cardHome "
              style={{ width: "18rem", marginTop: "20px" }}
            >
              <Card.Body className="rounded-3">
                <Card.Title style={{ color: "#0B132B" }}>
                  🧠 React Ecosystem
                </Card.Title>
                <Card.Text style={{ color: "#4A4A4A", marginTop: "30px" }}>
                  React’s ecosystem is vast and evolving — from React Router for
                  navigation to Redux and Context API for state management. UI
                  libraries like React Bootstrap and Material UI help design
                  sleek interfaces quickly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
