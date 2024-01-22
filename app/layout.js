import { Montserrat } from "next/font/google";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/navbars/Navbars";
import Footer from "./components/footer/Footer";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Rent a car",
  description: "Rent a car.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbars />
        {children}
        <Footer />
      </body>
    </html>
  );
}
