"use client";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { renderStepContent } from "../stpes/Steps";

import { useCarData } from "@/app/hooks/getallcar/getAllcar";
import { useCityData } from "@/app/hooks/city/city";

// use formu import et
import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import { createCalc } from "@/app/hooks/calc/calc";

export default function Modals(props) {
  const [step, setStep] = useState(1);
  const { data: carData } = useCarData();
  const { data: cityData } = useCityData();

  const Citys = cityData?.data;

  const handleNext = () => {
    if (step < 9) {
      setStep((prevState) => prevState + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep((prevState) => prevState - 1);
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

  const { handleSubmit } = form;
  const mutation = useMutation({
    mutationFn: (Merge) => createCalc(Merge),
    onError: (error) => {
      console.log(error.message);
    },
  });
  const onSubmit = (data) => {
    const { aTarihi, vTarihi, koltuk, sigorta } = data;
    const MergeForm = { aTarihi, vTarihi, koltuk, sigorta };
    const Merge = {
      MergeForm,
      carData,
    };

    mutation.mutate(Merge);
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

        {step < 8 ? (
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
