"use client";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { renderStepContent } from "../stpes/Steps";

import { useCarData } from "@/app/hooks/getallcar/getAllcar";
import { useCityData } from "@/app/hooks/city/city";

// use formu import et
import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import { Carcalculate, createCalc } from "@/app/hooks/calc/calc";
import { IoIosClose } from "react-icons/io";

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
        fiyat: "",
      },
      names: "",
      surname: "",
      tc: "",
      age: "",
      phone: "",
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

  const { handleSubmit, reset } = form;
  const mutation = useMutation({
    mutationFn: (Merge) => createCalc(Merge),
    onError: (error) => {
      console.log(error.message);
    },
  });
  const onSubmit = (data) => {
    const { aTarihi, vTarihi, koltuk, sigorta, car } = data;

    const MergeForm = { aTarihi, vTarihi, koltuk, sigorta, car };
    const Merge = {
      MergeForm,
      carData,
    };
    mutation.mutate(Merge);
    reset();
    handleNext();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title>Rent A Car</Modal.Title>
        <button
          className="bg-transparent border-0 "
          onClick={() => {
            props.onHide();
            reset();
            setStep(1);
          }}
        >
          <IoIosClose className="fs-2" />
        </button>
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
            className={step === 8 ? "btn btn-primary" : "d-none"}
            type="submit"
            onClick={handleSubmit(onSubmit)}
            variant="btn"
          >
            ileri
          </Button>
        )}
        {step > 8 && (
          <Button
            type="submit"
            onClick={() => alert("Tamamla")}
            variant="btn btn-orange"
          >
            Tamamla
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
