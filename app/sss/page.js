"use client";
import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { ssSorularCevaplar } from "../components/data/Data";

export default function Page() {
  return (
    <Container className="my-3">
      <Row>
        <Col className="p-0">
          <Accordion defaultActiveKey="0">
            {ssSorularCevaplar.map((soruCevap, index) => (
              <Accordion key={index} defaultActiveKey="0">
                <Accordion.Item eventKey={index.toString()}>
                  <Accordion.Header>{soruCevap.soru}</Accordion.Header>
                  <Accordion.Body>{soruCevap.cevap}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}
