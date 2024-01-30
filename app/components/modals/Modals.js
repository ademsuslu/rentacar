"use client";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { renderStepContent } from "../stpes/Steps";

import { useCarData } from "@/app/hooks/getallcar/getAllcar";
import { useCityData } from "@/app/hooks/city/city";

// use formu import et
import { useForm } from "react-hook-form";

export default function Modals(props) {
  const [step, setStep] = useState(1);
  const { data: carData } = useCarData();
  const { data: cityData } = useCityData();

  const Citys = cityData?.data;

  const handleNext = () => {
    if (step < 9) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const form = useForm({
    defaultValues: {
      car: {
        id: "",
        fiyat: 0,
      },
      names: "",
      surname: "",
      tc: 0,
      age: 0,
      phone: 0,
      email: "",
      aSube: "",
      aTarihi: new Date().toISOString().slice(0, 16),
      vSube: "",
      vTarihi: new Date().toISOString().slice(0, 16),
      koltuk: true,
      sigorta: true,
      sözleşme: true,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data) => {
    console.log("click");
    console.log(data);
    // Burada verileri sunucuya gönderme işlemlerini yapabilirsiniz.
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          {renderStepContent(form, step, carData, Citys)}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {step > 1 && (
          <Button variant="secondary" onClick={handlePrev}>
            Geri
          </Button>
        )}

        {step < 9 ? (
          <Button
            variant="primary"
            disabled={!form.formState.isValid}
            onClick={handleNext}
          >
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
