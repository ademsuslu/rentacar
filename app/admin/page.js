"use client";
import { useMutation } from "@tanstack/react-query";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { createSetting } from "../hooks/setting/setting";

export default function Page() {
  const form = useForm({
    defaultValues: {
      vatRate: "",
      profitPerpentage: "",
      serviceFee: "",
    },
  });
  const {
    register,
    formState: { errors },
  } = form;
  const { handleSubmit, reset } = form;
  const mutation = useMutation({
    mutationFn: (data) => createSetting(data),
    onError: (error) => {
      console.log(error.message);
    },
  });
  const onSubmit = (data) => {
    mutation.mutate(data);
    reset();
  };

  return (
    <div>
      <h1>Settings</h1>
      <div>
        <h2>Pricing</h2>
        <div className="d-flex gap-3">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="vatRate" className="my-4">
              <Form.Label>Vat Rate</Form.Label>
              <Form.Control
                {...register("vatRate")}
                autoComplete="false"
                type="text"
                name="vatRate"
                inputMode="numeric"
              />
              <p className="text-white fw-bold ">{errors.vatRate?.message}</p>
            </Form.Group>
            <Form.Group className="my-4" controlId="profitPerpentage">
              <Form.Label>Profit Perpentage</Form.Label>
              <Form.Control
                {...register("profitPerpentage")}
                autoComplete="false"
                type="text"
                name="profitPerpentage"
                inputMode="numeric"
              />
            </Form.Group>
            <Form.Group className="my-4" controlId="serviceFee">
              <Form.Label>Service Fee</Form.Label>
              <Form.Control
                {...register("serviceFee")}
                autoComplete="false"
                type="text"
                name="serviceFee"
                inputMode="numeric"
              />
            </Form.Group>
            <Button onClick={handleSubmit(onSubmit)} className="btn btn-orange">
              Set
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
