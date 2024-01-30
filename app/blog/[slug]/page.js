"use client";

import CarData from "@/app/components/cars/CarData";
import { blogData } from "@/app/components/data/Data";
import { useCarData } from "@/app/hooks/getallcar/getAllcar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function DetaySayfasi({ params }) {
  const { slug } = params;
  const itemId = parseInt(slug);
  const [items, setItems] = useState();
  useEffect(() => {
    const foundItem = blogData?.find((item) => item.id === itemId);
    setItems(foundItem);
  }, []);

  return (
    <Container fluid className="">
      <Row className="mt-3">
        <Col sm={6} className="p-0">
          {items ? (
            <>
              <Image
                className="rounded-3 "
                layout="responsive"
                height={600}
                width={600}
                src={items?.img}
                alt={items.baslik}
              />
              <div className="mt-2 gap-2">
                <h2>{items?.baslik}</h2>
                <p>{items?.detay}</p>
              </div>
            </>
          ) : (
            <p>Veri bulunamadı.</p>
          )}
        </Col>
        <Col sm={6} className="px-1">
          <h1>Rezervasyon Componenti</h1>
        </Col>
      </Row>
    </Container>
  );
}
