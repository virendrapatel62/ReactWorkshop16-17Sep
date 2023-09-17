import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Orders from "./pages/Orders";

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import OrderDetails from "./pages/OrderDetails";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function AuthenticatedRoute(props) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);

  return <props.Page></props.Page>;
}

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <a
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              Logout
            </a>
          </li>
        </ul>
      </header>

      <main>
        <Routes>
          <Route path="" element={<AuthenticatedRoute Page={Home} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/orders"
            element={<AuthenticatedRoute Page={Orders} />}
          ></Route>
          <Route
            path="/products"
            element={<AuthenticatedRoute Page={Products} />}
          ></Route>
          <Route
            path="/product/:id"
            element={<AuthenticatedRoute Page={ProductDetails} />}
          ></Route>
          <Route
            path="/orders/:id"
            element={<AuthenticatedRoute Page={OrderDetails} />}
          ></Route>
          <Route path="*" element={<h1>Not Found</h1>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
