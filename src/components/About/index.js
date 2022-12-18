import React from "react";

function About() {
  return (
    <div>
      <div>
        <header className="flex justify-center font-mono text-5xl about-header">
          About Me
        </header>
        <div className="flex my-5 about-section-main justify-between">
          <section className="about-section-1 flex justify-center ml-40">
            <img
              className="personal-image"
              src="https://via.placeholder.com/250"
              alt="placeholder"
            ></img>
          </section>
          <section className="about-section-2 flex mr-60">
            <aside>
              <p className="text-3xl font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </aside>
          </section>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <section className="about-paragraph-2 text-3xl font-serif">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
