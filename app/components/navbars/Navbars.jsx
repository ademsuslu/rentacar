"use client";
import { SlCalender } from "react-icons/sl";
import { IoMdLogIn } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { NavData } from "../data/Data";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import Modals from "../modals/Modals";
import { signIn, signOut, useSession } from "next-auth/react";

import { usePathname } from "next/navigation";
function Navbars() {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/dashboard");
  const [activeLink, setActiveLink] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const { status } = useSession();
  return (
    <Container fluid className={`${isAdminPage && "d-none"}`}>
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
              <div className="m-3">
                {status === "authenticated" ? (
                  <>
                    <IoMdLogIn
                      className="cursor-pointer fs-4"
                      onClick={() => signOut()}
                    />
                  </>
                ) : (
                  <RiLogoutCircleLine
                    className="cursor-pointer fs-4"
                    onClick={() => signIn("google")}
                  />
                )}
              </div>

              <Button
                onClick={() => setModalShow(true)}
                className="fs-6 btn-orange  font-normal"
              >
                <SlCalender />
              </Button>
              <Modals show={modalShow} onHide={() => setModalShow(false)} />
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Navbars;
