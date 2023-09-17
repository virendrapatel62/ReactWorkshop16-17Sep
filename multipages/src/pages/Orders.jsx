import React from "react";

import { Routes, Route, Link, useSearchParams } from "react-router-dom";
export default function Orders() {
  const orders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const [query, setQuery] = useSearchParams();

  return (
    <div>
      <h1>Orders</h1>

      <pre>{JSON.stringify(Object.fromEntries(query), null, 2)}</pre>

      <ul>
        {orders.map((order) => (
          <li>
            <Link to={`/orders/${order}`}>Order Number #{order}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
