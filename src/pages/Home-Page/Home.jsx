import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import ProductCard from "../../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const URL = "https://fakestoreapi.com/products";
    axios
      .get(URL)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div class='flip-card'>
        <div class='flip-card-inner'>
          <div class='flip-card-front'>
            <h2>You Better Flip Me</h2>
          </div>
          <div class='flip-card-back'>
            <h2>
              Check the products before the timer ends. Keep in mind the timer
              (which is random)
            </h2>
          </div>
        </div>
      </div>

      <div className='container'>
        {products.map((product) => {
          const { id, title, image } = product;

          return <ProductCard key={id} id={id} image={image} title={title} />;
        })}
      </div>
    </>
  );
}
