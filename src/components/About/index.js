import React from "react";

function About() {
  return (
    <div className="mt-48">
      <header className="flex justify-center font-mono text-6xl font-bold about-header">
        HELLO, I'M MITCHELL ARMSTRONG
      </header>
      <div className="grid flex-col justify-items-center my-5">
        <section className="about-section text-center my-10">
          <p className="text-3xl font-serif about-section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section className="my-10">
          <img
            className="personal-image"
            src="https://via.placeholder.com/250"
            alt="placeholder"
          ></img>
        </section>
      </div>
    </div>
  );
}

export default About;
