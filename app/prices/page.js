"use client";
import Table from "react-bootstrap/Table";
import { useCarData } from "../hooks/getallcar/getAllcar";
import { Col, Container, Row } from "react-bootstrap";

export default function Page() {
  const { data, status } = useCarData();

  return (
    <Container>
      <Row>
        <Col className=" rounded-2 mt-5 bg-white p-1 ">
          <Table hover responsive style={{ borderColor: "#ff690f" }}>
            <thead>
              <tr>
                <th>Durum</th>
                <th>Fiyat</th>
                <th>Marka</th>
                <th>Model</th>
                <th>Renk</th>
                <th>Yil</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={index}>
                  <td
                    className={` fw-bolder ${
                      item.durum === "Active" ? "text-success  " : "text-danger"
                    }`}
                  >
                    {" "}
                    {item.durum}
                  </td>
                  <td>${item.fiyat}</td>
                  <td> {item.marka}</td>
                  <td> {item.model}</td>
                  <td> {item.renk}</td>
                  <td> {item.yil}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
