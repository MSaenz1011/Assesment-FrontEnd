import React from "react";
import "./about.css";

export default function About() {
  return (
    <div>
      <h1>Hey,hey, people</h1>
      <p>My name is Michael and I will tell you more about me</p>

      <section className='wrapper'>
        <div className='box container-1'>
          <img
            src='https://external-preview.redd.it/JVvHDtVaOoPWks_G7Fk5lDSAKoca7cukp5MedIaYp98.jpg?auto=webp&s=e32e88f7ad10bc4d07c15e504dc4da14303d843b'
            alt='Lonesome Road'
          />
          <p>
            Newbie developer, I still have a long way to go to, at least, become
            a junior developer. I do really like using libraries/frameworks to
            code, but this does not mean to avoid where o how to create the
            logic or designs of it.
          </p>
        </div>

        <div className='box container-2'>
          <div className='text'>
            <h2>What have I learned in Make it Real?</h2>
            <p>
              Here's a short list of the things that I have learned, even though
              I still need more practice:
            </p>
            <ul>
              <li>React (even though I need more practice on Redux) </li>
              <li>Better CSS Practices and styles</li>
              <li>Bootsrap (Not used in this project for my own sake)</li>
              <li>Javascript and its features: Jest, ES6+,etc.</li>
            </ul>
          </div>
        </div>

        <div className='box container-3'>
          <div className='text'>
            <h2>Where to find me?</h2>
            <p>
              If you want to contact me to either know more about me or check
              previous projects I did before, you can find me here:
            </p>
            <ul>
              <li>Github: https://github.com/MSaenz1011 </li>
              <li>Email: michaelsaenz96@hotmail.com</li>
              <li>Instagram: Nope, I don't have that</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
