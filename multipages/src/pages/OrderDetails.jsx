import React from "react";
import { useParams } from "react-router-dom";

export default function OrderDetails() {
  const params = useParams();

  return (
    <div>
      <h1>OrderDetails</h1>

      <h2>Show Order for {params.id}</h2>
    </div>
  );
}
