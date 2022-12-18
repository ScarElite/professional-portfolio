import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div id="Footer">
      <ul className="flex text-8xl justify-center">
        <li className="github-icon-footer px-20 animate-pulse">
          <a
            href="https://github.com/ScarElite"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub></AiFillGithub>
          </a>
        </li>
        <li className="linkedin-icon-footer px-20 animate-pulse">
          <a
            href="https://www.linkedin.com/in/mitchell-armstrong99/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin></AiFillLinkedin>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
