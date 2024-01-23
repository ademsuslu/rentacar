"use client";
import Image from "next/image";
import { kiralamaKosullari } from "../components/data/Data";
import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const KiralamaKosullari = () => {
  return (
    <Container>
      {kiralamaKosullari.map((kosul, index) => (
        <Row key={index} className="my-4">
          <Col>
            <ListGroup variant="flush" className="bg-transparent border-0">
              <ListGroup.Item
                className="bg-transparent border-0 "
                variant="secondary"
              >
                <h4> {kosul.baslik}</h4>
              </ListGroup.Item>
              {kosul.liste.map((madde, idx) => (
                <ListGroup.Item key={idx} className="bg-transparent border-0 ">
                  {madde}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <Image
              width={150}
              height={150}
              className="rounded cursor-pointer"
              src="https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Car"
            />
            Araba seçenekleri gösterilicek
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default KiralamaKosullari;
