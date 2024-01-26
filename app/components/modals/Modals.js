"use client";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { renderStepContent } from "../stpes/Steps";
import { useForm } from "react-hook-form";
import { useCarData } from "@/app/hooks/getAllCar";
import { useCityData } from "@/app/hooks/getAllCity";

export default function Modals(props) {
  const [step, setStep] = useState(1);
  const { data } = useCarData();
  const { data: city } = useCityData();

  const carData = data?.data;
  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePrev = () => {
    setStep(step - 1);
  };

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    reset(); // formu yolladıkdan sonra formdaki verileri siliyor
  };
  const form = useForm({
    defaultValues: {
      carId: 0, // burada hem arabanın idsini hemde fiyatını göndermeli
      names: "",
      surname: "",
      tc: 0,
      age: 0,
      phone: "",
      email: "",
      aSube: "",
      aDate: new Date(),
      vSube: "",
      vDate: new Date(),
      koltuk: false,
      sigorta: false,
      sözleşme: false,
    },
  });

  const { handleSubmit, reset } = form;
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          {renderStepContent(step, form, carData, city)}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {step > 1 && (
          <Button variant="secondary" onClick={handlePrev}>
            Geri
          </Button>
        )}
        {step < 9 ? (
          <Button variant="primary" onClick={handleNext}>
            İleri
          </Button>
        ) : (
          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            variant="btn btn-orange"
          >
            Alışverişi Tamamla
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
