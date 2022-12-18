import React from "react";

function About() {
  return (
    <div className="flex my-5 me-5 about-section">
      <section className="justify-content-center">
        <img
          className="personal-image"
          src="https://via.placeholder.com/250"
          alt="placeholder"
        ></img>
      </section>
      <section className="">
        <aside>
          <h1 className="text-center about-title">Who Am I?</h1>
          <p className="about-paragraph-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </aside>
      </section>
    </div>
  );
}

export default About;
