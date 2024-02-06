"use client";
import { IoSearchCircleOutline } from "react-icons/io5";
import axios from "axios";
import { useState } from "react";
import SearchResult from "./searchresult/SearchResult";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState();

  const handleSearch = async () => {
    try {
      // POST isteği
      setQuery("");
      const body = JSON.stringify(query);

      const response = await axios.post(
        "http://localhost:3000/api/car/search",
        body
      );
      setResults(response.data);
      return response;
    } catch (error) {
      console.error("Arama hatası:", error);
    }
  };
  setTimeout(() => {
    setResults(null);
  }, 15000);
  return (
    <div className="bg-white w-40  rounded p-2">
      <div className="d-flex align-items-center justify-content-between ">
        <input
          type="text"
          style={{ outline: "none" }}
          className="border-0"
          value={query}
          placeholder="Arama yapın..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-white border-0 outline-none"
          onClick={() => handleSearch()}
        >
          <IoSearchCircleOutline className="fs-3  saklıdır" />
        </button>
      </div>
      <div className={`  ${results ? "d-block" : "d-none"}`}>
        <SearchResult results={results} />
      </div>
    </div>
  );
}
