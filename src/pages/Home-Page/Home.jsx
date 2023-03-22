import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import ProductCard from "../../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const URL = "https://fakestoreapi.com/products";
    axios.get(URL).then((res) => setProducts(res.data.results));
  }, []);

  return (
    <>
      <div class='flip-card'>
        <div class='flip-card-inner'>
          <div class='flip-card-front'>
            <h2>You Better Flip Me</h2>
          </div>
          <div class='flip-card-back'>
            <h2>Check the products before the timer ends</h2>
          </div>
        </div>
      </div>
      <ProductCard product={products} />
    </>
  );
}
