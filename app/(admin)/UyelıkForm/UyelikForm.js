"use client";
import React from "react";
import { Form, Button } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";

const UyelikForm = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="Adı">
          <Form.Label>Adı</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Soyadı">
          <Form.Label>Soyadı</Form.Label>
          <Form.Control type="text" placeholder="Enter Surname" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Adresi</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Telefon</Form.Label>
          <PhoneInput country={"tr"} inputMode="tel" />
        </Form.Group>
        <Form.Group controlId="birthDay">
          <Form.Label className="my-1">Doğum tarihi</Form.Label>
          <Form.Control
            autoComplete="false"
            type="datetime-local"
            name="birthDay"
          />
        </Form.Group>
        <Form.Group className="mt-3" id="kurumsal">
          <Form.Check
            name="kurumsal"
            type="checkbox"
            label="Fırsatlardan Haberdar olmak istiyorum."
          />
        </Form.Group>
        <Button className="btn btn-orange mt-2" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UyelikForm;
