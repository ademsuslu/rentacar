"use client";
import { SlCalender } from "react-icons/sl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { NavData } from "../data/Data";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";

function Navbars() {
  const [activeLink, setActiveLink] = useState("");
  return (
    <Container fluid>
      <Row>
        <Col className="p-0">
          <Navbar expand="md">
            <Link className="navbar-brand " href="/">
              <Logo />
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {NavData.map((item) => (
                  <Link
                    key={item.name}
                    className={`nav-link ${
                      item.url === activeLink ? "active" : ""
                    }`}
                    href={item.url}
                    onClick={() => setActiveLink(item.url)}
                  >
                    {item.name}
                  </Link>
                ))}
              </Nav>
              <Button className="fs-6 btn-orange  font-normal">
                <SlCalender />
              </Button>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Navbars;
