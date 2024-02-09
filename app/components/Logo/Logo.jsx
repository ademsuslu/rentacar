import { usePathname } from "next/navigation";
import React from "react";

const Logo = () => {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/dashboard");
  return (
    <div className="d-flex gap-1 font-monospace logo">
      <span className="logo-a">Rent </span>
      <span className={`${isAdminPage ? "text-white" : "text-dark"}`}>A</span>
      <span className="logo-a">Car</span>
    </div>
  );
};

export default Logo;
