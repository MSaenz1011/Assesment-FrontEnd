import React from "react";
import "./productcard.css";

export default function ProductCard({ id, title, image }) {
  return (
    <article className='card'>
      <div className='card-image'>
        <img src={image} alt='' />
      </div>
      <div className='card-content'>
        <h3>{title}</h3>
      </div>
    </article>
  );
}
