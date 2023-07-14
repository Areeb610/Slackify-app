import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import landing from "../../assets/workspace_bg.png";
import './Workspace.css'
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="landingPage">
        <div className="d-flex justify-content-center ">
          <h1 className="slackify mt-3">Slackify</h1>
        </div>
        <Container className="mt-3">
          <Row>
            <Col sm={6}>
              <h1 className="workspace ">Create a new Slack workspace</h1>
              <p className="team">
                Slackify gives your team a home — a place where they can talk
                and work together. To create a new workspace, click the button
                below.
              </p>
              <Link to="/profilepage">
                <Button variant="primary" className="create-btn">
                  Create workspace
                </Button>
              </Link>
            </Col>
            <Col sm={6}>
              <img className="img-fluid" src={landing} alt="landing" />
            </Col>
          </Row>
        </Container>


        {/* <div className="bg-white rounded p-4 workspace mx-auto">
          <div>
            <h5>Workspaces for faizannaseem789@gmail.com</h5>
          </div>
          <div className="d-flex justify-content-between">
            <h6>Workspace 1</h6>

            <Button variant="warning">Launch</Button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default LandingPage;
