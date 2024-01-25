import React from "react";
import "./Car.css";
import Image from "next/image";

const CarData = ({ item }) => {
  return (
    <div className="car-card border rounded shadow-sm ">
      <div className="car-image-wrapper ">
        <Image
          src={item.image}
          alt={`${item.marka} ${item.model}`}
          className="resposive car-image rounded"
          width={100}
          height={100}
          layout="responsive"
        />
      </div>
      <div className="car-details">
        <div className="detail">
          <span className="label">Marka:</span>
          <span className="value">{item.marka}</span>
        </div>
        <div className="detail">
          <span className="label">Model:</span>
          <span className="value">{item.model}</span>
        </div>
        <div className="detail">
          <span className="label">Fiyat:</span>
          <span className="value">${item.fiyat}</span>
        </div>
        <div className="detail">
          <span className="label">Durum:</span>
          <span
            className={`value ${
              item.durum === "Active"
                ? "text-success font-weight-semibold"
                : "text-danger"
            }`}
          >
            {item.durum}
          </span>
        </div>
        <div className="detail">
          <span className="label">Yıl:</span>
          <span className="value">{item.yil}</span>
        </div>
        <div className="detail">
          <span className="label">Renk:</span>
          <span className="value">{item.renk}</span>
        </div>
      </div>
    </div>
  );
};

export default CarData;
