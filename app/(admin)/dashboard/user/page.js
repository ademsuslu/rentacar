import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UyelıkForm from "../../UyelıkForm/UyelikForm";
import PasswordForm from "../../PasswordForm/PasswordForm";
export default function Page() {
  return (
    <Container fluid>
      <Row>
        <Col md={6} className="mb-2">
          <h1 className="saklıdır">Üyelik Bilgilerim</h1>
          <div>
            <UyelıkForm />
          </div>
        </Col>

        <Col md={6}>
          <h1 className="saklıdır">Şifre Güncelleme</h1>
          <div>
            <PasswordForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
