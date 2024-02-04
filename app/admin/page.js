"use client";
import { useMutation } from "@tanstack/react-query";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { createSetting } from "../hooks/setting/setting";
import toast from "react-hot-toast";

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
    formState: { dirtyFields, errors },
  } = form;
  const { handleSubmit, reset } = form;
  const mutation = useMutation({
    mutationFn: (data) => createSetting(data),
    onError: (error) => {
      console.log(error.message);
    },
    onSuccess: (data) => {
      toast.success("Fiyatlar değiştirildi!");
      form.reset(data);
    },
  });

  function dirtyValues(dirtyFields, allValues) {
    // If any item in an array was modified, the entire array must be submitted, because there's no way to indicate
    // "placeholders" for unchanged elements. dirtyFields is true for leaves.
    if (dirtyFields === true || Array.isArray(dirtyFields)) return allValues;
    // Here, we have an object
    return Object.fromEntries(
      Object.keys(dirtyFields).map((key) => [
        key,
        dirtyValues(dirtyFields[key], allValues[key]),
      ])
    );
  }

  const onSubmit = (data) => {
    const body = dirtyValues(dirtyFields, data);
    mutation.mutate(body);
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
                placeholder="20%"
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
                placeholder="15%"
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
                placeholder="10%"
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
