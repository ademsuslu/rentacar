"use client";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Modals(props) {
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePrev = () => {
    setStep(step - 1);
  };

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""],
      phNumbers: [{ number: "" }],
      age: 0,
      dob: new Date(),
    },
  });
  const {
    register,
    control,
    handleSubmit,
    formState,
    getValues,
    setValue,
    watch,
    reset,
  } = form;
  const { errors } = formState;

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Form.Select
              {...register("username", {
                required: {
                  value: true,
                  message: "User name is Required",
                },
              })}
              autoComplete="false"
              aria-label="select example"
            >
              <option>Select a Car</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <p className="text-white fw-bold ">{errors.username?.message}</p>
          </>
        );
      case 2:
        return (
          <>
            <Form.Group controlId="name">
              <Form.Label>Ad</Form.Label>
              <Form.Control type="text" name="name" />
            </Form.Group>
            <Form.Group controlId="surname">
              <Form.Label>Soyad</Form.Label>
              <Form.Control type="text" name="surname" />
            </Form.Group>
          </>
        );
      case 3:
        return (
          <>
            <Form.Group controlId="tc">
              <Form.Label>TC Kimlik Numarası</Form.Label>
              <Form.Control type="number" name="tc" />
            </Form.Group>
            <Form.Group controlId="age">
              <Form.Label>Yaş</Form.Label>
              <Form.Control type="number" name="age" />
            </Form.Group>
          </>
        );
      case 4:
        return (
          <>
            <Form.Group controlId="phone">
              <Form.Label>Telefon</Form.Label>
              <Form.Control type="number" name="phone" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" />
            </Form.Group>
          </>
        );
      case 5:
        return (
          <>
            <Form.Select aria-label="select example">
              <option>Alış Şubesi</option>
              <option value="konya">Konya</option>
              <option value="istanbul">Istanbul</option>
              <option value="Afyon">Afyon</option>
            </Form.Select>
            <Form.Group controlId="alış-saati">
              <Form.Label>Alış tarihi</Form.Label>
              <Form.Control type="datetime-local" name="alış-saati" />
            </Form.Group>
          </>
        );
      case 6:
        return (
          <>
            <Form.Select aria-label="select example">
              <option>Teslim Şubesi</option>
              <option value="konya">Konya</option>
              <option value="istanbul">Istanbul</option>
              <option value="Afyon">Afyon</option>
            </Form.Select>
            <Form.Group controlId="teslim-saati">
              <Form.Label>Teslim tarihi</Form.Label>
              <Form.Control type="datetime-local" name="teslim-saati" />
            </Form.Group>
          </>
        );
      case 7:
        return (
          <>
            <Form.Group className="mb-3" id="formGridCheckboxs">
              <Form.Check type="checkbox" label="Çocuk Koltuğu" />
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckboxs">
              <Form.Check type="checkbox" label="Sigorta" />
            </Form.Group>
          </>
        );
      case 8:
        return (
          <>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="Satış sözleşmesini okudum onaylıyorum"
              />
            </Form.Group>
          </>
        );

      default:
        return null;
    }
  };

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    reset(); // formu yolladıkdan sonra formdaki verileri siliyor
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Rent A Car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>{renderStepContent()}</Form>
      </Modal.Body>
      <Modal.Footer>
        {step > 1 && (
          <Button variant="secondary" onClick={handlePrev}>
            Geri
          </Button>
        )}
        {step < 8 ? (
          <Button variant="primary" onClick={handleNext}>
            İleri
          </Button>
        ) : (
          <Button onClick={props.onHide} variant="btn btn-orange">
            Alışverişi Tamamla
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
