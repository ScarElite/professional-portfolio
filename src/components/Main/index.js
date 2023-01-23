import React from 'react';

function Main() {
  return (
    <div id="About" className="mt-36 about-body flex flex-col">
      <header className="flex justify-center text-center font-mono text-7xl font-bold about-header">
        <span>HELLO, I'M MITCHELL ARMSTRONG</span>
      </header>
      <div className="grid flex-col justify-items-center my-5">
        <section className="about-section text-center my-10">
          <p className="about-section-text">
            I'm a graduate of the UNC Chapel Hill Coding BootCamp that teaches
            students how to become a Fullstack Web Developer. This BootCamp is
            an intense, fast-paced environment and has made me an efficient web
            developer with a lot of the tools and skills needed to succeed.
            Ready to get out there and continue working on what I love doing and
            learn as much as I can. I've worked with some great web developers
            during my time in the BootCamp and I'm eager to work with other
            developers outside of that !{' '}
            <span className="about-span">
              <a href="/contact">Let's make something awesome!</a>
            </span>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Main;
