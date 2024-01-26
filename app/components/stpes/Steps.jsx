"use client";

import { Form } from "react-bootstrap";

export const renderStepContent = (step, form, carData, city) => {
  const { register, formState } = form;

  // dışarıdan gelen şehirler
  const Citys = city?.data?.data;

  const { errors } = formState;
  switch (step) {
    case 1:
      return (
        <>
          <Form.Label>Select a car</Form.Label>
          <Form.Select
            {...register("carId", {
              required: {
                value: true,
                message: "Car is Required",
              },
            })}
            autoComplete="false"
            aria-label="select example"
          >
            {carData?.map((opt) => {
              return (
                <>
                  <option key={opt._id} value={opt._id}>
                    {opt.marka}
                  </option>
                </>
              );
            })}
          </Form.Select>
          <p className="text-white fw-bold ">{errors.carId?.message}</p>
        </>
      );
    case 2:
      return (
        <>
          <Form.Group controlId="names">
            <Form.Label>Adı</Form.Label>
            <Form.Control
              {...register("names", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
              autoComplete="false"
              type="text"
              name="names"
            />
            <p className="text-white fw-bold ">{errors.names?.message}</p>
          </Form.Group>{" "}
          <Form.Group controlId="surname">
            <Form.Label>Soyad</Form.Label>
            <Form.Control
              {...register("surname", {
                required: {
                  value: true,
                  message: "Surname is Required",
                },
              })}
              autoComplete="false"
              type="text"
              name="surname"
            />
            <p className="text-white fw-bold ">{errors.surname?.message}</p>
          </Form.Group>
        </>
      );
    case 3:
      return (
        <>
          <Form.Group controlId="tc">
            <Form.Label>TC Kimlik Numarası</Form.Label>
            <Form.Control
              {...register("tc", {
                required: {
                  value: true,
                  message: "Person id  is Required",
                },
              })}
              autoComplete="false"
              type="number"
              name="tc"
            />
            <p className="text-white fw-bold ">{errors.tc?.message}</p>
          </Form.Group>
          <Form.Group controlId="age">
            <Form.Label>Yaş</Form.Label>
            <Form.Control
              {...register("age", {
                required: {
                  value: true,
                  message: "Person id  is Required",
                },
              })}
              autoComplete="false"
              type="number"
              name="age"
            />
            <p className="text-white fw-bold ">{errors.age?.message}</p>
          </Form.Group>
        </>
      );
    case 4:
      return (
        <>
          <Form.Group controlId="phone">
            <Form.Label>Telefon</Form.Label>
            <Form.Control
              {...register("phone", {
                required: {
                  value: true,
                  message: "Person id  is Required",
                },
              })}
              autoComplete="false"
              type="number"
              name="phone"
            />
            <p className="text-white fw-bold ">{errors.phone?.message}</p>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              {...register("email", {
                required: {
                  value: true,
                  message: "Person id  is Required",
                },
              })}
              autoComplete="false"
              type="email"
              name="email"
            />
            <p className="text-white fw-bold ">{errors.email?.message}</p>
          </Form.Group>
        </>
      );
    case 5:
      return (
        <>
          {" "}
          <Form.Label>Alış Subesi</Form.Label>
          <Form.Select
            {...register("aSube", {
              required: {
                value: true,
                message: "Alış şubesi  is Required",
              },
            })}
            autoComplete="false"
            aria-label="select example"
          >
            {Citys?.map((item) => {
              return (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              );
            })}
            <p className="text-white fw-bold ">{errors.aSube?.message}</p>
          </Form.Select>
          <Form.Group controlId="alış-saati">
            <Form.Label>Alış tarihi</Form.Label>
            <Form.Control
              {...register("aDate", {
                required: {
                  value: true,
                  message: "Alış Saati  is Required",
                },
              })}
              autoComplete="false"
              type="datetime-local"
              name="alış-saati"
            />
            <p className="text-white fw-bold ">{errors.aDate?.message}</p>
          </Form.Group>
        </>
      );
    case 6:
      return (
        <>
          <Form.Label>Teslim Subesi</Form.Label>
          <Form.Select
            {...register("vSube", {
              required: {
                value: true,
                message: "Teslim şubesi  is Required",
              },
            })}
            autoComplete="false"
            aria-label="select example"
          >
            {Citys?.map((item) => {
              return (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              );
            })}
            <p className="text-white fw-bold ">{errors.vSube?.message}</p>
          </Form.Select>
          <Form.Group controlId="teslim-saati">
            <Form.Label>Teslim tarihi</Form.Label>
            <Form.Control
              {...register("vSube", {
                required: {
                  value: true,
                  message: "Teslim tarihi  is Required",
                },
              })}
              type="datetime-local"
              name="teslim-saati"
            />
            <p className="text-white fw-bold ">{errors.vDate?.message}</p>
          </Form.Group>
        </>
      );
    case 7:
      return (
        <>
          <Form.Group className="mb-3" id="formGridCheckboxs">
            <Form.Check
              {...register("koltuk")}
              type="checkbox"
              label="Çocuk Koltuğu"
            />
          </Form.Group>
          <Form.Group className="mb-3" id="formGridCheckboxs">
            <Form.Check
              {...register("sigorta")}
              type="checkbox"
              label="Sigorta"
            />
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
