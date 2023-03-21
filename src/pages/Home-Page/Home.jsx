import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const URL = "https://fakestoreapi.com/products";
    axios.get(URL).then((res) => setProducts(res.data.results));
  }, []);

  return <div></div>;
}
