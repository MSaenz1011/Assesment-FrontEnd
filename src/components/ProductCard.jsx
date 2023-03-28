import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./productcard.css";

export default function ProductCard({ id, title, image }) {
  const [timeLeft, setTimeLeft] = useState(Math.floor(Math.random() * 60) + 40);
  const [timerEnded, setTimerEnded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      setTimerEnded(true);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  return (
    <article className='card'>
      <div className='card-image'>
        <img src={image} alt='' />
      </div>
      <div className='card-content'>
        <h3>{title}</h3>
      </div>

      <div className='timer'>
        <p>{formatTime(timeLeft)}</p>
        <Link to={`/products/${id}`}>
          {timerEnded ? (
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
