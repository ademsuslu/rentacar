"use client";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
export default function Page() {
  return (
    <Container className="mt-3 p-0">
      <Row>
        <h1 className="hesaplarımız-head">BANKA HESAPLARIMIZ</h1>
        <Col className="my-2">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>ENPARA (FİNANSBANK)</Accordion.Header>
              <Accordion.Body>
                <ListGroup className="bg-transparent">
                  <ListGroup.Item className="bg-transparent border-0">
                    Ünvan: En Şirket adı Tic. Ltd.şti
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent border-0">
                    Şube/Şube no: İnlice/9
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent border-0">
                    {" "}
                    Hesap no: +12345
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent border-0">
                    {" "}
                    İban: TR11 1111 0000 1111 1111 1111 11
                  </ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>İŞBANKASI</Accordion.Header>
              <Accordion.Body>
                <ListGroup className="bg-transparent">
                  <ListGroup.Item className="bg-transparent border-0">
                    Ünvan: En Şirket adı Tic. Ltd.şti
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent border-0">
                    Şube/Şube no: İnlice/9
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent border-0">
                    {" "}
                    Hesap no: +12345
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent border-0">
                    {" "}
                    İban: TR11 1111 0000 1111 1111 1111 11
                  </ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}
