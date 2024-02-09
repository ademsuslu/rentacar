"use client";
import React from "react";
import { Form, Button } from "react-bootstrap";

const PasswordForm = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Şu Anki Şifre</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="new_password">
          <Form.Label>Yeni Şifre</Form.Label>
          <Form.Control type="password" placeholder="New Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="new_password_confirm">
          <Form.Label>Yeni Şifre Tekrar</Form.Label>
          <Form.Control type="password" placeholder="New Password Tekrar" />
        </Form.Group>

        <Form.Group className="mt-3" id="2fa">
          <Form.Check name="2fa" type="checkbox" label="İki Adımlı Doğrulama" />
        </Form.Group>
        <Button className="btn btn-orange mt-2" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default PasswordForm;
