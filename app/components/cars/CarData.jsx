import React from "react";
import "./Car.css";
import Image from "next/image";

const CarData = ({ item }) => {
  return (
    <div className="car-card   rounded-3  ">
      <div className="car-image-wrapper ">
        <Image
          src={item?.image}
          alt={`${item.marka} ${item.model}`}
          className="resposive car-image rounded"
          width={100}
          height={100}
          layout="responsive"
        />
        <div className="d-flex p-1 justify-content-between">
          <h6>{item.marka}</h6>
          <p className="text-success fw-semibold">{item.durum}</p>
        </div>

        <div className="d-flex justify-content-between p-1">
          <p className="text-success fw-semibold">${item.fiyat}/Day</p>
          <p className="car-model text-secondary ">{item.model}</p>
        </div>
        <div className=" p-1">
          <button className="btn btn-orange w-100  ">Seç</button>
        </div>
      </div>
    </div>
  );
};

export default CarData;
