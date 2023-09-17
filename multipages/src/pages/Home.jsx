import React, { useEffect, useState } from "react";

import { api } from "../api";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api
      .get("https://dummyjson.com/products")
      .then((response) => response.data)
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      <ul>
        {products?.map((p) => (
          <li>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
