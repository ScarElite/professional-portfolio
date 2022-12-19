import React from "react";
import { Modal } from "react-responsive-modal";
import { AiFillGithub } from "react-icons/ai";
import { SiHeroku } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
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

  const project1Modal = (
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
      <p className="text-lg pb-6">
        This was the 2nd project in the UNC Chapel Hill Coding BootCamp and was
        a collaborative project. I worked on this project with 3 other
        developers who helped create this. I primarily worked on the backend and
        using the API data that we called on from "TheMovieDB".
      </p>
      <h3 className="text-2xl font-medium border-t-2 border-black mb-4 pb-2 py-4">
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

  const project2Modal = (
    <div>
      <h3 className="text-2xl font-medium border-b-2 border-black mb-4 pb-2 w-52">
        About the project
      </h3>
      <p className="text-lg pb-4">
        Meal Maker is a website created for foodies and for anyone looking for
        some randomness with their meal. The application functions by taking
        user search criteria, including diet restrictions, and making API calls
        to Spoonacular (for food recipes) and TheCocktailDB (for a random drink
        recipe if the user wants a drink). Once we have the data from each, we
        dynamically generate cards that have basic information about several
        recipes, including an image that users can click to visit the original
        recipe url. Users can also click a "Favorite" button to save recipes
        they like into local storage. These recipes will reappear when the user
        refreshes the page.
      </p>
      <p className="text-lg pb-6">
        This was the 1st project in the UNC Chapel Hill Coding BootCamp and was
        a collaborative project. I worked on this project with 3 other
        developers who helped create this. We all did our fair share of work,
        had a ton of communication, and I loved working with these guys. I
        worked on both the front end and the backend and dealt with most of the
        API calls and data. Overall this was a great experience and I learned a
        lot about working with other developers.
      </p>
      <h3 className="text-2xl font-medium border-t-2 border-black mb-4 pb-2 py-4">
        Check out the GitHub Repo or the deployed GitHub Page
      </h3>
      <div className="mt-8">
        <ul className="flex text-8xl justify-center">
          <li className="px-20 animate-pulse">
            <a
              href="https://github.com/ScarElite/Meal-Maker"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub></AiFillGithub>
            </a>
          </li>
          <li className="px-20 animate-pulse">
            <a
              href="https://pmacdonald07.github.io/Meal-Maker/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt></FaExternalLinkAlt>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  const project3Modal = (
    <div>
      <h3 className="text-2xl font-medium border-b-2 border-black mb-4 pb-2 w-52">
        About the project
      </h3>
      <p className="text-lg pb-4">
        This application was created to give users a text editor in the browser.
        This application persists the data that you input and have stored. Users
        can also click the install button and install it on their computer to
        have access to it anytime they want. The installed application will
        continue to the persist the data from the browser application and will
        also update the browser application if and when changes are made on the
        installed version of this.
      </p>
      <h3 className="text-2xl font-medium border-t-2 border-black mb-4 pb-2 py-4">
        Check out the GitHub Repo or the deployed Heroku application
      </h3>
      <div className="mt-8">
        <ul className="flex text-8xl justify-center">
          <li className="px-20 animate-pulse">
            <a
              href="https://github.com/ScarElite/Text-Editor-PWA"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub></AiFillGithub>
            </a>
          </li>
          <li className="px-20 animate-pulse">
            <a
              href="https://hidden-bastion-66681.herokuapp.com/"
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

  const project4Modal = (
    <div>
      <h3 className="text-2xl font-medium border-b-2 border-black mb-4 pb-2 w-52">
        About the project
      </h3>
      <p className="text-lg pb-4">
        This application was created to be a blog for tech news. This is a site
        where users can signup to be able to post about anything tech related
        and also comment on others' posts. The homepage displays all of the
        recent posts that other users and yourself have posted. When using this
        site for the first time make sure you signup and create an account for
        yourself and then navigate back to the homepage and view all posts
        and/or navigate to your dashboard to create a post of your own.
      </p>
      <h3 className="text-2xl font-medium border-t-2 border-black mb-4 pb-2 py-4">
        Check out the GitHub Repo or the deployed Heroku application
      </h3>
      <div className="mt-8">
        <ul className="flex text-8xl justify-center">
          <li className="px-20 animate-pulse">
            <a
              href="https://github.com/ScarElite/Tech-Blog"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub></AiFillGithub>
            </a>
          </li>
          <li className="px-20 animate-pulse">
            <a
              href="https://guarded-beach-97718.herokuapp.com/"
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

  const project5Modal = (
    <div>
      <h3 className="text-2xl font-medium border-b-2 border-black mb-4 pb-2 w-52">
        About the project
      </h3>
      <p className="text-lg pb-4">
        This website was created to provide you with a JavaScript quiz to test
        your knowledge about things related to JavaScript. The quiz has 10
        questions that will appear in random order each time the quiz is started
        and you will have 100 seconds to complete the quiz. Each question you
        get wrong will result in 10 points being deducted from your final score
        as well as 10 seconds being reduced from your overall time to complete
        this quiz. Once the quiz is finished you will be given a score and can
        provide your initials to save your score to be apart of the high scores
        list. Visit your highscores by clicking on the "View High Scores" at the
        top left of the website. You may also clear your high score data if you
        wish by clicking on the "clear high scores" button. Good luck!
      </p>
      <h3 className="text-2xl font-medium border-t-2 border-black mb-4 pb-2 py-4">
        Check out the GitHub Repo or the deployed GitHub Page
      </h3>
      <div className="mt-8">
        <ul className="flex text-8xl justify-center">
          <li className="px-20 animate-pulse">
            <a
              href="https://github.com/ScarElite/coding-quiz"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub></AiFillGithub>
            </a>
          </li>
          <li className="px-20 animate-pulse">
            <a
              href="https://scarelite.github.io/coding-quiz/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt></FaExternalLinkAlt>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  const project6Modal = (
    <div>
      <h3 className="text-2xl font-medium border-b-2 border-black mb-4 pb-2 w-52">
        About the project
      </h3>
      <p className="text-lg pb-4">
        This website was created to provide you with a scheduler for your
        traditional 9am - 5pm work day and also displays the current day and
        date. Each time block has a middle section for you to input your task or
        other to-do description. The time block also has a blue Save button on
        the end for you to save your description so that it is not lost if you
        close the website and come back later to check it. Each time block also
        has a color indicator that helps you keep track of what tasks are in the
        past and should have been completed, what tasks are in the present time
        and should be worked on now, and what tasks are upcoming in the future.
      </p>
      <h3 className="text-2xl font-medium border-t-2 border-black mb-4 pb-2 py-4">
        Check out the GitHub Repo or the deployed GitHub Page
      </h3>
      <div className="mt-8">
        <ul className="flex text-8xl justify-center">
          <li className="px-20 animate-pulse">
            <a
              href="https://github.com/ScarElite/work-day-scheduler"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub></AiFillGithub>
            </a>
          </li>
          <li className="px-20 animate-pulse">
            <a
              href="https://scarelite.github.io/work-day-scheduler/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt></FaExternalLinkAlt>
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
        {project1Modal}
      </Modal>
      <Modal open={modalTwo} onClose={() => setOpenSecond(false)} center>
        <p className="text-4xl font-bold text-center mb-4">Meal Maker</p>
        <div className="rounded-xl border-2 border-black mb-4">
          <img src={mealMaker} alt="" className="rounded-xl" />
        </div>
        {project2Modal}
      </Modal>
      <Modal open={modalThree} onClose={() => setOpenThird(false)} center>
        <p className="text-4xl font-bold text-center mb-4">JATE</p>
        <div className="rounded-xl border-2 border-black mb-4">
          <img src={JATE} alt="" className="rounded-xl" />
        </div>
        {project3Modal}
      </Modal>
      <Modal open={modalFour} onClose={() => setOpenFourth(false)} center>
        <p className="text-4xl font-bold text-center mb-4">Tech Blog</p>
        <div className="rounded-xl border-2 border-black mb-4">
          <img src={techBlog} alt="" className="rounded-xl" />
        </div>
        {project4Modal}
      </Modal>
      <Modal open={modalFive} onClose={() => setOpenFifth(false)} center>
        <p className="text-4xl font-bold text-center mb-4">Coding Quiz</p>
        <div className="rounded-xl border-2 border-black mb-4">
          <img src={codingQuiz} alt="" className="rounded-xl" />
        </div>
        {project5Modal}
      </Modal>
      <Modal open={modalSix} onClose={() => setOpenSixth(false)} center>
        <p className="text-4xl font-bold text-center mb-4">
          Work Day Scheduler
        </p>
        <div className="rounded-xl border-2 border-black mb-4">
          <img src={workDayScheduler} alt="" className="rounded-xl" />
        </div>
        {project6Modal}
      </Modal>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <div
          className="project project-1 flex flex-col justify-center bg-gray-100 border-2 border-gray-300 rounded-xl group hover:border-black"
          onClick={() => setOpenFirst(true)}
        >
          <img
            src={alternativeEndings}
            alt=""
            className="rounded-xl group-hover:opacity-60"
          />
          <div className="flex-col">
            <h2>Technologies Used:</h2>
            <ul>
              <li>
                <img
                  src="![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)"
                  alt=""
                />
              </li>
            </ul>
          </div>
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
