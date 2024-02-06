import Link from "next/link";
import React from "react";

export default function SearchResult(results) {
  return (
    <ul className="p-0">
      {results?.results?.data?.map((item) => (
        <li className="list-unstyled" key={item._id}>
          <hr />
          <Link
            href="/"
            className="d-flex align-items-center text-decoration-none saklıdır"
          >
            <span className="me-3">
              {item.marka}/{item.model}
            </span>
            <div
              className="ms-auto"
              style={{ maxWidth: "80px", maxHeight: "60px" }}
            >
              <img
                src={item.image}
                alt={item.marka}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
