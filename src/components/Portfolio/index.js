import React from "react";
import { Modal } from "react-responsive-modal";
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

  return (
    <div className="container mx-auto">
      <Modal open={modalOne} onClose={() => setOpenFirst(false)} center>
        <p>Alternative Endings</p>
        {littleLorem}
      </Modal>
      <Modal open={modalTwo} onClose={() => setOpenSecond(false)} center>
        <p>Second modal</p>
        {littleLorem}
      </Modal>
      <Modal open={modalThree} onClose={() => setOpenThird(false)} center>
        <p>Third modal</p>
        {littleLorem}
      </Modal>
      <Modal open={modalFour} onClose={() => setOpenFourth(false)} center>
        <p>Fourth modal</p>
        {littleLorem}
      </Modal>
      <Modal open={modalFive} onClose={() => setOpenFifth(false)} center>
        <p>Fifth modal</p>
        {littleLorem}
      </Modal>
      <Modal open={modalSix} onClose={() => setOpenSixth(false)} center>
        <p>Sixth modal</p>
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
