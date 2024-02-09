"use client";
import { Montserrat } from "next/font/google";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/navbars/Navbars";
import Footer from "./components/footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
const montserrat = Montserrat({ subsets: ["latin"] });
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { NextAuthProvider } from "./Providers";
import { usePathname } from "next/navigation";
const queryClient = new QueryClient();
// const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/dashboard");
  return (
    <html lang="en">
      <body className={montserrat.className} suppressHydrationWarning={true}>
        <NextAuthProvider>
          <Toaster />
          <QueryClientProvider client={queryClient}>
            <Container className="app-container" fluid>
              <Row className={`justify-content-center`}>
                <Col
                  lg={!isAdminPage && 10}
                  className={`justify-content-center ${isAdminPage && "p-0"} `}
                >
                  <Navbars />
                  {children}
                </Col>
              </Row>
            </Container>
            <Footer />
          </QueryClientProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
