import { Montserrat } from "next/font/google";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/navbars/Navbars";
import Footer from "./components/footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Rent a car",
  description: "Rent a car.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Container className="" fluid>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Navbars />
              {children}
              <Footer />
            </Col>
          </Row>
        </Container>
      </body>
    </html>
  );
}
