"use client";
import { kiralamaKosullari } from "../components/data/Data";
import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useCarData } from "../hooks/getallcar/getAllcar";
import CarData from "../components/cars/CarData";
import { SyncLoader } from "react-spinners";

const KiralamaKosullari = () => {
  const { data, status } = useCarData();

  return (
    <Container fluid className="p-0  Conditions">
      <Row className="my-4 flex-column ">
        {kiralamaKosullari.map((kosul, index) => (
          <Col key={index} className="p-0">
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
        ))}
      </Row>

      <Row className="my-4 flex-column ">
        {data?.map((item) => {
          if (status === "error") {
            return (
              <Container>
                <h1>Hatalı işlem</h1>
              </Container>
            );
          }
          if (status === "loading") {
            return (
              <Container>
                <Row className="justify-content-center my-3  align-items-center ">
                  <Col
                    sm
                    className="d-flex justify-content-center align-items-center"
                  >
                    <SyncLoader color="#ff690f" />
                  </Col>
                </Row>
              </Container>
            );
          }

          return (
            <Col md={12} key={item._id} className="mb-4">
              <CarData item={item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default KiralamaKosullari;
