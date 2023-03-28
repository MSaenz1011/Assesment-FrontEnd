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
    <React.Fragment>
      {Object.keys(product).length ? (
        <section className='vessel'>
          <div className='detail-card'>
            <div className='product-img'>
              <img className='' src={image} alt='' />
            </div>
            <div className='product-description'>
              <h1 className='product-title'>{title}</h1>
              <p className='product-d'>{description}</p>
            </div>
            <div className='product-rating'>
              <h2>Rating</h2>
              <strong>{rating?.rate}</strong>
              {rating?.rate <= 3.0 ? (
                <p>Not a good score</p>
              ) : rating?.rate >= 3.1 && rating?.rate <= 4.0 ? (
                <p>Good Score</p>
              ) : (
                <strong>Excellent Score</strong>
              )}
            </div>
          </div>
        </section>
      ) : (
        <div class='dots-bars-2'></div>
      )}
    </React.Fragment>
  );
}
