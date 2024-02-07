import { getCarDetay } from "@/app/actions";

import { Container, Row, Col, Image } from "react-bootstrap";

export default async function Detay({ params }) {
  const data = await getCarDetay(params?.slug);
  return (
    <Container>
      <h1>Ürün Detayı</h1>
      <Row>
        <Col xs={12} md={6}>
          <Image src={data.image} alt={data.title} fluid />
        </Col>
        <Col xs={12} md={6}>
          <h2>{data.marka}</h2>
          <p>{data.model}</p>
          <p>Fiyat: {data.fiyat} TL</p>
          <p>Yıl: {data.yil}</p>
          <p>Durum: {data.durum} TL</p>
          {/* Diğer veri alanları */}
        </Col>
      </Row>
    </Container>
  );
}
