import React, { useState } from "react";
import "./ProfilePage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import work from "../../assets/work.png";

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <Container className="pt-5">
        <Row>
          <Col>
            <h2 className="name">Who else is on the team?</h2>
            <p className="mt-4">Add coworker by email.</p>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Ex. alex@gmail.com"
              className="mt-4"
            />
          </Col>
          <Col>
            <img className="img-fluid" src={work} alt="work" />
          </Col>
        </Row>
      </Container>
  
            <div className="d-flex justify-content-end">
              <Link to="/chats">
                <Button variant="dark" className="button-dark mt-5">
                  Next
                </Button>
              </Link>
            </div>
     
    </div>
  );
};

export default ProfilePage;