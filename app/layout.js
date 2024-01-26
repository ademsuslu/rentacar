"use client";
import { Montserrat } from "next/font/google";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/navbars/Navbars";
import Footer from "./components/footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { QueryClientProvider, QueryClient } from "react-query";
const montserrat = Montserrat({ subsets: ["latin"] });

const queryClient = new QueryClient();
export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body className={montserrat.className}>
    //     <QueryClientProvider client={queryClient}>
    //       <Container className="" fluid>
    //         <Row className="justify-content-center">
    //           <Col lg={10}>
    //             <Navbars />
    //             {children}
    //             <Footer />
    //           </Col>
    //         </Row>
    //       </Container>
    //     </QueryClientProvider>
    //   </body>
    // </html>
    <html lang="en">
      <body className={montserrat.className}>
        <QueryClientProvider client={queryClient}>
          <Container className="app-container" fluid>
            <Row className="justify-content-center">
              <Col lg={10}>
                <Navbars />
                {children}
              </Col>
            </Row>
          </Container>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
