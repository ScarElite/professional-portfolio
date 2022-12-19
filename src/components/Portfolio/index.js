import React from "react";
import { Modal } from "react-responsive-modal";
import { AiFillGithub } from "react-icons/ai";
import { SiHeroku } from "react-icons/si";
import mealMaker from "../../assets/images/meal-maker.PNG";
import alternativeEndings from "../../assets/images/alternative-endings.PNG";
import JATE from "../../assets/images/JATE.PNG";
import techBlog from "../../assets/images/tech-blog-dashboard.PNG";
import codingQuiz from "../../assets/images/Coding-Quiz.png";
import workDayScheduler from "../../assets/images/work-day-scheduler-preview.PNG";

function Portfolio() {
  const [modalOne, setOpenFirst] = React.useState(false);
  const [modalTwo, setOpenSecond] = React.useState(false);
  const [modalThree, setOpenThird] = React.useState(false);
  const [modalFour, setOpenFourth] = React.useState(false);
  const [modalFive, setOpenFifth] = React.useState(false);
  const [modalSix, setOpenSixth] = React.useState(false);

  const littleLorem = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
      risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
      risus, sed porttitor quam.
    </p>
  );

  const project1Text = (
    <div>
      <h3 className="text-2xl font-medium border-b-2 border-black mb-4 pb-2 w-52">
        About the project
      </h3>
      <p className="text-lg pb-4">
        Alternative Endings is a creative writing website for movie buffs and
        anyone else who enjoys movies to leave their review, thoughts, and/or
        their ideal alternative ending to the movie they watched and are writing
        about. Users can create an account and leave a review on a movie they
        have watched. While visiting the website users can search for a movie,
        see upcoming movie, movies currently in theaters, and reviews other
        users have written. When a user clicks on a movie a modal will appear
        and populate with some info about the movie as well as a button that
        will redirect them to a page to leave a review.
      </p>
      <p className="text-lg">
        This was the 2nd project in the UNC Chapel Hill Coding BootCamp and was
        a collaborative project. I worked on this project with 3 other
        developers who helped create this. I primarily worked on the backend and
        using the API data that we called on from "TheMovieDB".
      </p>
      <h3 className="text-2xl font-medium border-b-2 border-black mb-4 pb-2 py-4">
        Check out the GitHub Repo or the deployed Heroku application
      </h3>
      <div className="mt-8">
        <ul className="flex text-8xl justify-center">
          <li className="px-20 animate-pulse">
            <a
              href="https://github.com/ScarElite/Alternative-Endings"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub></AiFillGithub>
            </a>
          </li>
          <li className="px-20 animate-pulse">
            <a
              href="https://alternative-endings.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <SiHeroku></SiHeroku>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto">
      <Modal open={modalOne} onClose={() => setOpenFirst(false)} center>
        <p className="text-4xl font-bold text-center mb-4">
          Alternative Endings
        </p>
        <div className="rounded-xl border-2 border-black mb-4">
          <img src={alternativeEndings} alt="" className="rounded-xl" />
        </div>
        {project1Text}
      </Modal>
      <Modal open={modalTwo} onClose={() => setOpenSecond(false)} center>
        <p className="text-4xl font-bold text-center mb-4">Meal Maker</p>
        <div className="rounded-xl border-2 border-black mb-4">
          <img src={mealMaker} alt="" className="rounded-xl" />
        </div>
        {littleLorem}
      </Modal>
      <Modal open={modalThree} onClose={() => setOpenThird(false)} center>
        <p className="text-4xl font-bold text-center mb-4">JATE</p>
        <div className="rounded-xl border-2 border-black mb-4">
          <img src={JATE} alt="" className="rounded-xl" />
        </div>
        {littleLorem}
      </Modal>
      <Modal open={modalFour} onClose={() => setOpenFourth(false)} center>
        <p className="text-4xl font-bold text-center mb-4">Tech Blog</p>
        <div className="rounded-xl border-2 border-black mb-4">
          <img src={techBlog} alt="" className="rounded-xl" />
        </div>
        {littleLorem}
      </Modal>
      <Modal open={modalFive} onClose={() => setOpenFifth(false)} center>
        <p className="text-4xl font-bold text-center mb-4">Coding Quiz</p>
        <div className="rounded-xl border-2 border-black mb-4">
          <img src={codingQuiz} alt="" className="rounded-xl" />
        </div>
        {littleLorem}
      </Modal>
      <Modal open={modalSix} onClose={() => setOpenSixth(false)} center>
        <p className="text-4xl font-bold text-center mb-4">
          Work Day Scheduler
        </p>
        <div className="rounded-xl border-2 border-black mb-4">
          <img src={workDayScheduler} alt="" className="rounded-xl" />
        </div>
        {littleLorem}
      </Modal>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <div
          className="project project-1 flex justify-center bg-gray-100 border-2 border-gray-300 rounded-xl group hover:border-black"
          onClick={() => setOpenFirst(true)}
        >
          <img
            src={alternativeEndings}
            alt=""
            className="rounded-xl group-hover:opacity-60"
          />
        </div>
        <div
          className="project project-2 flex justify-center bg-gray-100 border-2 border-gray-300 rounded-xl group hover:border-black"
          onClick={() => setOpenSecond(true)}
        >
          <img
            src={mealMaker}
            alt=""
            className="rounded-xl group-hover:opacity-60"
          />
        </div>
        <div
          className="project project-3 flex justify-center bg-gray-100 border-2 border-gray-300 rounded-xl group hover:border-black"
          onClick={() => setOpenThird(true)}
        >
          <img
            src={JATE}
            alt=""
            className="rounded-xl group-hover:opacity-60"
          />
        </div>
        <div
          className="project project-5 flex justify-center bg-gray-100 border-2 border-gray-300 rounded-xl group hover:border-black"
          onClick={() => setOpenFourth(true)}
        >
          <img
            src={techBlog}
            alt=""
            className="rounded-xl group-hover:opacity-60"
          />
        </div>
        <div
          className="project project-6 flex justify-center bg-gray-100 border-2 border-gray-300 rounded-xl group hover:border-black"
          onClick={() => setOpenFifth(true)}
        >
          <img
            src={codingQuiz}
            alt=""
            className="rounded-xl group-hover:opacity-60"
          />
        </div>
        <div
          className="project project-7 flex justify-center bg-gray-100 border-2 border-gray-300 rounded-xl group hover:border-black"
          onClick={() => setOpenSixth(true)}
        >
          <img
            src={workDayScheduler}
            alt=""
            className="rounded-xl group-hover:opacity-60"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
