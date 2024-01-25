"use client";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { blogData } from "../components/data/Data";
export default function Page() {
  return (
    <Container fluid>
      <Row className="my-3 gap-2 justify-content-center   ">
        {blogData.map((item) => {
          return (
            <Col sm={3} key={item.id} className="  p-0">
              <div class="image-container">
                <img
                  src={item.img}
                  alt="Hover Image"
                  style={{ width: "100%" }}
                />
                <div class="overlay">
                  <Link href={`/blog/${item.id}`}>{item.baslik}</Link>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
