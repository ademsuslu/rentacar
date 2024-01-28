"use client";
import React from "react";
import { Button, Form } from "react-bootstrap";

export const renderStepContent = (form, step, carData, Citys) => {
  let a;
  a = carData;
  const {
    register,
    formState: { errors },
  } = form;
  switch (step) {
    case 1:
      return (
        <>
          <Form.Label>Select a car</Form.Label>
          <Form.Select
            {...register("car", { required: "Car is required" })}
            name="car"
            id="car"
            autoComplete="false"
            aria-label="select example"
          >
            {carData?.map((opt) => (
              <option key={opt._id} value={`${opt._id},${opt.fiyat}`}>
                {opt.marka}
              </option>
            ))}
          </Form.Select>
          <p className="text-white fw-bold ">{errors.car?.message}</p>
        </>
      );

    case 2:
      return (
        <>
          <Form.Group controlId="names">
            <Form.Label>Adı</Form.Label>
            <Form.Control
              {...register("names", { required: "Name is required" })}
              autoComplete="false"
              type="text"
              name="names"
            />
            <p className="text-white fw-bold ">{errors.names?.message}</p>
          </Form.Group>{" "}
          <Form.Group controlId="surname">
            <Form.Label>Soyad</Form.Label>
            <Form.Control
              {...register("surname", { required: "Surname is required" })}
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
              {...register("tc", { required: "Tc id  is required" })}
              autoComplete="false"
              type="number"
              name="tc"
            />
            <p className="text-white fw-bold ">{errors.tc?.message}</p>
          </Form.Group>
          <Form.Group controlId="age">
            <Form.Label>Yaş</Form.Label>
            <Form.Control
              {...register("age", { required: "Age  is required" })}
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
              {...register("phone", { required: "Phone  is required" })}
              autoComplete="false"
              type="number"
              name="phone"
            />
            <p className="text-white fw-bold ">{errors.phone?.message}</p>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              {...register("email", { required: "Email  is required" })}
              autoComplete="false"
              type="email"
              name="email"
            />
            <p className="text-white fw-bold">{errors.email?.message}</p>
          </Form.Group>
        </>
      );
    case 5:
      return (
        <>
          {" "}
          <Form.Label>Alış Subesi</Form.Label>
          <Form.Select
            {...register("aSube", { required: "Shopping branch  is required" })}
            autoComplete="false"
            aria-label="select example"
          >
            {Citys?.map((item) => {
              return (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              );
            })}
            <p className="text-white fw-bold ">{errors.aSube?.message}</p>
          </Form.Select>
          <Form.Group controlId="alış-saati">
            <Form.Label>Alış tarihi</Form.Label>
            <Form.Control
              {...register("aTarihi", {
                required: "Shopping Date  is required",
              })}
              autoComplete="false"
              type="datetime-local"
              name="alış-saati"
              onChange={(e) => {
                form.setValue("aTarihi", e.target.value);
              }}
            />
            <p className="text-white fw-bold ">{errors.aTarihi?.message}</p>
          </Form.Group>
        </>
      );
    case 6:
      return (
        <>
          <Form.Label>Teslim Subesi</Form.Label>
          <Form.Select
            {...register("vSube", {
              required: "Shopping Date  is required",
            })}
            autoComplete="false"
            aria-label="select example"
          >
            {Citys?.map((item) => {
              return (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              );
            })}
            <p className="text-white fw-bold ">{errors.vSube?.message}</p>
          </Form.Select>
          <Form.Group controlId="teslim-saati">
            <Form.Label>Teslim tarihi</Form.Label>
            <Form.Control
              {...register("vTarihi", {
                required: "Buying Date  is required",
              })}
              type="datetime-local"
              name="teslim-saati"
              onChange={(e) => {
                form.setValue("vTarihi", e.target.value);
              }}
            />
            <p className="text-white fw-bold ">{errors.vTarihi?.message}</p>
          </Form.Group>
        </>
      );
    case 7:
      return (
        <>
          <Form.Group className="mb-3" id="formGridCheckboxs">
            <Form.Check
              name="formGridCheckboxs"
              {...register("koltuk")}
              type="checkbox"
              label="Çocuk Koltuğu"
            />
          </Form.Group>
          <Form.Group className="mb-3" id="formGridCheckboxss">
            <Form.Check
              name="formGridCheckboxss"
              {...register("sigorta")}
              type="checkbox"
              label="Sigorta"
            />
          </Form.Group>
        </>
      );
    // ... (Yukarıdaki kodları buraya ekleyin)

    case 8:
      const calculateTotal = (formData) => {
        const { koltuk, sigorta, car } = formData;
        const aTarihi = new Date(formData.aTarihi);
        const vTarihi = new Date(formData.vTarihi);
        const carInfo = formData.car.split(",");
        const carId = carInfo[0];
        const carPrice = parseInt(carInfo[1]);

        const dateDiff = (date1, date2) => {
          const diff = new Date(date2).getTime() - new Date(date1).getTime();
          return Math.ceil(diff / (1000 * 60 * 60 * 24));
        };

        const cars = a.find((item) => item._id === carId);
        console.log(cars);
        const gun = dateDiff(aTarihi, vTarihi);
        const koltukUcreti = koltuk ? 10 : 0;
        const sigortaUcreti = sigorta ? 100 : 0;

        const toplamUcret = gun * carPrice + koltukUcreti + sigortaUcreti;
      };
      return (
        <>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              {...register("sözleşme", {
                required: "Sözleşme is required",
              })}
              type="checkbox"
              label="Satış sözleşmesini okudum onaylıyorum"
            />
          </Form.Group>{" "}
          <div>
            <Button
              variant="primary"
              onClick={() => calculateTotal(form.getValues())}
            >
              Hesapla
            </Button>
          </div>
        </>
      );

    default:
      return null;
  }
};
