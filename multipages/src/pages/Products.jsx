import React from "react";

import { useQuery } from "react-query";
import { api } from "../api";

const fetchProducts = () => {
  return api.get("https://dummyjson.com/products").then((response) => {
    return response.data;
  });
};

export default function Products() {
  const { data, error } = useQuery({
    queryKey: "products",
    queryFn: fetchProducts,
  });

  console.log(data);
  return (
    <div>
      <ul>
        {data?.products?.map((p) => (
          <li>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
