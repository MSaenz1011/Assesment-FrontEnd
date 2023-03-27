import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./productcard.css";

export default function ProductCard({ id, title, image }) {
  const [timer, setTimer] = useState({
    minutes: Math.floor(Math.random() * 3),
    seconds: Math.floor(Math.random() * 59),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevCountdown) => {
        const seconds = prevCountdown.seconds - 1;
        const minutes = prevCountdown.minutes - (seconds < 0 ? 1 : 0);

        return {
          minutes: minutes < 0 ? 0 : minutes,
          seconds: seconds < 0 ? 0 : seconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { minutes, seconds } = timer;
  const isExpired = minutes === 0 && seconds === 0;

  return (
    <article className='card'>
      <div className='card-image'>
        <img src={image} alt='' />
      </div>
      <div className='card-content'>
        <h3>{title}</h3>
      </div>

      <div className='timer'>
        <p>
          {`${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`}
        </p>
        <Link to={`/products/${id}`}>
          {isExpired ? (
            <button className='btn-disable' type='submit' disabled>
              Time's Up
            </button>
          ) : (
            <button className='btn-active' type='submit'>
              Get Product Details
            </button>
          )}
        </Link>
      </div>
    </article>
  );
}
