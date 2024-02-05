"use client";
import axios from "axios";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const debounce = (func, delay) => {
    let timeoutId;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const handleSearch = async () => {
    try {
      // POST isteği

      const response = await axios.post(
        "http://localhost:3000/api/searchs",
        JSON.stringify({ query })
      );
      console.log("*****************");
      console.log(response);
      return response;
      // return await response.json();
    } catch (error) {
      console.error("Arama hatası:", error);
    }
  };

  const debouncedSearch = debounce(handleSearch, 500); // 500 milisaniyelik gecikme

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(); // Debounced fonksiyonu çağır
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
    </div>
  );
}
