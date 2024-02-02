"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Carcalculate } from "@/app/hooks/calc/calc";
import Image from "next/image";
import { Form } from "react-bootstrap";

export const renderStepContent = (form, step, carData, Citys) => {
  const {
    register,
    formState: { errors },
  } = form;
  switch (step) {
    case 1:
      return (
        <>
          <Form.Label className="my-1">Bir araba seçiniz</Form.Label>
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
            <Form.Label className="my-1">Adı</Form.Label>
            <Form.Control
              {...register("names", {
                required: "Name is required",
                minLength: 3,
              })}
              autoComplete="false"
              type="text"
              name="names"
            />
            <p className="text-white fw-bold ">{errors.names?.message}</p>
          </Form.Group>{" "}
          <Form.Group controlId="surname">
            <Form.Label className="my-1">Soyad</Form.Label>
            <Form.Control
              {...register("surname", {
                required: "Surname is required",
                minLength: 3,
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
            <Form.Label className="my-1">TC Kimlik Numarası</Form.Label>
            <Form.Control
              {...register("tc", {
                required: "Tc id  is required",
                minLength: 11,
              })}
              autoComplete="false"
              type="number"
              name="tc"
            />
            <p className="text-white fw-bold ">{errors.tc?.message}</p>
          </Form.Group>
          <Form.Group controlId="age">
            <Form.Label className="my-1">Yaş</Form.Label>
            <Form.Control
              {...register("age", {
                required: "Age  is required",
                min: 18,
                max: 60,
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
            <Form.Label className="my-1">Telefon</Form.Label>
            <PhoneInput
              country={"tr"}
              {...register("phone")} // react-hook-form ile register kullanımı
              onChange={(phone) => form.setValue("phone", phone)} // react-hook-form ile setValue kullanımı
            />

            <p className="text-white fw-bold ">{errors.phone?.message}</p>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label className="my-1">Email</Form.Label>
            <Form.Control
              {...register("email", { required: "Email  is required" })}
              aria-invalid={errors.email ? "true" : "false"}
              autoComplete="false"
              type="email"
              name="email"
            />
            {errors.mail && <p role="alert">{errors.email.message}</p>}
          </Form.Group>
        </>
      );
    case 5:
      return (
        <>
          {" "}
          <Form.Label className="my-1">Alış Subesi</Form.Label>
          <Form.Select
            {...register("aSube", { required: "Shopping branch  is required" })}
            autoComplete="false"
            aria-label="select example"
          >
            {Citys?.map((item, idx) => {
              return (
                <option key={idx} value={item.name}>
                  {item.name}
                </option>
              );
            })}
            <p className="text-white fw-bold ">{errors.aSube?.message}</p>
          </Form.Select>
          <Form.Group controlId="alış-saati">
            <Form.Label className="my-1">Alış tarihi</Form.Label>
            <Form.Control
              {...register("aTarihi", {
                required: "Shopping Date  is required",
              })}
              autoComplete="false"
              type="datetime-local"
              name="alış-saati"
              onChange={(e) => {
                if (e.target) {
                  form.setValue("aTarihi", e.target.value);
                }
              }}
            />
            <p className="text-white fw-bold ">{errors.aTarihi?.message}</p>
          </Form.Group>
        </>
      );
    case 6:
      return (
        <>
          <Form.Label className="my-1">Teslim Şubesi</Form.Label>
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
            <Form.Label className="my-1">Teslim tarihi</Form.Label>
            <Form.Control
              {...register("vTarihi", {
                required: "Buying Date  is required",
              })}
              type="datetime-local"
              name="teslim-saati"
              onChange={(e) => {
                if (e.target) {
                  form.setValue("vTarihi", e.target.value);
                }
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
    case 8:
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
          </Form.Group>
        </>
      );
    case 9:
      const YourComponent = () => {
        const { data: calcData } = Carcalculate();
        return (
          <div>
            <div className="w-100 ">
              <Image
                src={calcData?.image || ""}
                className="w-100"
                height={200}
                width={200}
                objectFit="cover"
                objectPosition="center"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                alt="car"
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <div className="d-flex  justify-content-center  align-items-center">
                <span className="">Toplam ücret: {"   "}</span>
                <h5 className="text-success fw-bold ms-1">
                  ${calcData?.total}
                </h5>
              </div>
              <div className="d-flex  justify-content-center  align-items-center">
                <span className="">Gün:</span>
                <h6 className="ms-1 p-0 mb-0">{calcData?.Days}</h6>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <div className="d-flex   justify-content-center  align-items-center">
                <span className="">Marka:</span>
                <h6 className="ms-1 p-0 mb-0">{calcData?.marka}</h6>
              </div>
              <div className="d-flex justify-content-center  align-items-center">
                <span className="">Model:</span>
                <h6 className="ms-1 p-0 mb-0">{calcData?.model}</h6>
              </div>
            </div>
          </div>
        );
      };

      return <YourComponent />;

    default:
      return null;
  }
};
