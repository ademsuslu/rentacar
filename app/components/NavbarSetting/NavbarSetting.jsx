"use client";
import React, { useState } from "react";
import { DashboardNavData } from "../data/Data";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";

import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../Logo/Logo";

export default function NavbarSetting() {
  const [activeLink, setActiveLink] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ height: "100vh" }} className="border-ends">
      <div className="d-flex justify-content-between ">
        <div className="mb-2 d-flex col-2  d-none d-lg-block ">
          <Link className="text-decoration-none    " href="/">
            <Logo />
          </Link>
        </div>
        <div>
          <IoIosMenu
            className="d-lg-none z-1  fs-2 text-white"
            onClick={handleShow}
          />
        </div>
      </div>

      <Offcanvas
        className="p-0   "
        show={show}
        onHide={handleClose}
        responsive="lg"
        style={{ maxWidth: "200px", width: "100%" }}
      >
        <Offcanvas.Header className="dashboard">
          <Link className="text-decoration-none" href="/">
            <Logo />
          </Link>
          <IoIosClose className="fs-2 text-white" onClick={handleClose} />
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex  dashboard flex-column ">
          <div className="mt-2">
            {DashboardNavData.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.url}
                  className="text-decoration-none border-top nav-link"
                >
                  <div
                    className={`nav-item   mb-2 text-white d-flex  justify-content-between align-items-center ${
                      activeLink === item.url ? "active" : ""
                    }`}
                    onClick={() => setActiveLink(item.url)}
                  >
                    <span className="">{item.name}</span>
                    <div
                      onClick={() => setActiveLink(item.url)}
                      className={`fs-4 nav-link ${
                        activeLink === item.url ? "active" : ""
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
