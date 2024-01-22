"use client";
import { SlCalender } from "react-icons/sl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { NavData } from "./NavData";

function Navbars() {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container fluid>
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
            {NavData.map((item) => {
              return (
                <Link key={item.name} className="nav-link" href={item.url}>
                  {item.name}
                </Link>
              );
            })}
          </Nav>
          <Button variant="secondary" className="fs-6 font-normal">
            Rezervasyon <SlCalender />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
