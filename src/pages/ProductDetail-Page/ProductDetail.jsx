import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./productdetail.css";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const URL = `https://fakestoreapi.com/products/${id}`;
    axios
      .get(URL)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const { title, image, description, rating } = product;

  return (
    <section className='vessel'>
      <div className='detail-card'>
        <div className='product-img'>
          <img className='' src={image} alt='' />
        </div>
        <div className='product-description'>
          <h1 className='product-title'>{title}</h1>
          <p className=''>{description}</p>
          <div className='product-rating'>
            <h2>Rating</h2>
            <strong>{rating.rate}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
