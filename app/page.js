"use client";
import Hero from "./components/Hero/Hero";
import { useCarData } from "@/app/hooks/getAllCar";
import { Col, Container, Row } from "react-bootstrap";
import { SyncLoader } from "react-spinners";
import CarData from "./components/cars/CarData";
export default function Home() {
  const { data, status } = useCarData();
  return (
    <div>
      <Hero />
      <h1 className="my-5">Rezervasyon Componenti</h1>
      <Container fluid>
        <Row className="my-3 gap-2 justify-content-center     ">
          {data?.data.map((item) => {
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
            if (status === "error") {
              return (
                <Container>
                  <Row className="justify-content-center my-3  align-items-center ">
                    <Col
                      sm
                      className="d-flex justify-content-center align-items-center"
                    >
                      <h2>Car is not defined or false get </h2>
                    </Col>
                  </Row>
                </Container>
              );
            }

            return (
              <Col key={item._id} sm={3} className="p-0">
                <CarData item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
