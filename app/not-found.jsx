import React from "react";
import Link from "next/link";
const PageNotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-2 ">
      <h1>Not found – 404!</h1>
      <div>
        <Link className="saklıdır" href="/">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
