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
      <Row>
        <Col className="p-0">
          {item ? (
            <>
              <h1>{item?.baslik}</h1>
              <Image
                className="rounded-3 "
                width={600}
                height={600}
                src={item?.img}
                alt={item.baslik}
              />
              <p>{item?.detay}</p>
            </>
          ) : (
            <p>Veri bulunamadı.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}
