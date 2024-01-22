import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavData, BlogData } from "../data/Data";
import Link from "next/link";

import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-between">
        <Col className="px-2">
          <h4> Yola Çık!</h4>
          <p>
            Yolculuklarınıza renk katmak, her anınızı özel kılmak için
            buradayız. Geniş araç seçeneklerimiz, uygun fiyatlarımız ve 24/7
            destek ekibimizle, siz değerli müşterilerimize en kaliteli hizmeti
            sunuyoruz. Siz sadece sürün, gerisini bize bırakın. Güvenli,
            konforlu ve keyif dolu bir yolculuk için bize katılın!
          </p>
        </Col>
        <Col className="px-2">
          <h4>
            Rent <span className="saklıdır">A</span> Car
          </h4>
          <span className="mt-2">
            Araç kiralama konusundaki güvenilir adresiniz olarak, konforlu ve
            güvenli seyahatlerinizi destekliyoruz. Geniş araç filomuz, uygun
            fiyatlarımız ve kaliteli hizmet anlayışımızla sizlere en iyi
            deneyimi sunuyoruz. Yolculuklarınızda yanınızda olmaktan mutluluk
            duyarız. İyi yolculuklar dileriz, birlikte nice güzel anılara!
          </span>
        </Col>
        <Col className=" px-2">
          <h4>Blog</h4>
          {BlogData.map((item) => (
            <Link key={item.name} className={`nav-link`} href={item.url}>
              {item.name}
            </Link>
          ))}
          <div className="d-flex justify-content-start gap-3 mt-2  ">
            <Link
              target="_blank"
              href={"https://instagram.com"}
              className="nav-link"
            >
              <IoLogoInstagram className="fs-4" />
            </Link>
            <Link
              target="_blank"
              href={"https://facebook.com"}
              className="nav-link"
            >
              <FaFacebookF className="fs-4" />
            </Link>
            <Link
              target="_blank"
              href={"https://youtube.com"}
              className="nav-link"
            >
              <AiOutlineYoutube className="fs-4" />
            </Link>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="d-flex justify-content-center ">
          <p className="mt-2">
            © 2024 <span className="saklıdır">Rent A Car</span> Tüm hakkı
            saklıdır.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
