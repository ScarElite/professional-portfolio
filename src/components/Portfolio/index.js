import React from "react";
import mealMaker from "../../assets/images/meal-maker.PNG";
import alternativeEndings from "../../assets/images/alternative-endings.PNG";
import JATE from "../../assets/images/JATE.PNG";
import techBlog from "../../assets/images/tech-blog-dashboard.PNG";
import codingQuiz from "../../assets/images/Coding-Quiz.png";
import workDayScheduler from "../../assets/images/work-day-scheduler-preview.PNG";

function Portfolio() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="project project-1 flex justify-center bg-gray-100 border-2 border-gray-300 rounded-xl">
          <img src={alternativeEndings} alt="" />
        </div>
        <div className="project project-2 flex justify-center bg-gray-100 border-2 border-gray-300 rounded-xl">
          <img src={mealMaker} alt="" />
        </div>
        <div className="project project-3 flex justify-center bg-gray-100 border-2 border-gray-300 rounded-xl">
          <img src={JATE} alt="" />
        </div>
        <div className="project project-5 flex justify-center bg-gray-100 border-2 border-gray-300 rounded-xl">
          <img src={techBlog} alt="" />
        </div>
        <div className="project project-6 flex justify-center bg-gray-100 border-2 border-gray-300 rounded-xl">
          <img src={codingQuiz} alt="" />
        </div>
        <div className="project project-7 flex justify-center bg-gray-100 border-2 border-gray-300 rounded-xl">
          <img src={workDayScheduler} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
