"use client";

import { blogData } from "@/app/components/data/Data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function DetaySayfasi({ params }) {
  const { slug } = params;
  const itemId = parseInt(slug);
  const [item, setItem] = useState();
  useEffect(() => {
    const foundItem = blogData?.find((item) => item.id === itemId);
    setItem(foundItem);
  }, []);
  return (
    <Container>
      <Row className="mt-3">
        <Col className="p-0">
          {item ? (
            <>
              <Image
                className="rounded-3 "
                layout="responsive"
                height={600}
                width={600}
                src={item?.img}
                alt={item.baslik}
              />
              <div className="mt-2 gap-2">
                <h2>{item?.baslik}</h2>
                <p>{item?.detay}</p>
              </div>
            </>
          ) : (
            <p>Veri bulunamadı.</p>
          )}
        </Col>
        <Col>Rezervasyon Componenti</Col>
      </Row>
    </Container>
  );
}
