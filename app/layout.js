import { Inter } from "next/font/google";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/navbars/Navbars";
import Footer from "./components/footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rent a car",
  description: "Rent a car.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbars />
        {children}
        <Footer />
      </body>
    </html>
  );
}
