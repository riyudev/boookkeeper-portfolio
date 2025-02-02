import React from "react";
import Profile from "../assets/chinmae2.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import "../styles/Animation.css";

function Home() {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen"
    >
      <figure className="flex flex-col-reverse laptop:flex-row items-center justify-center">
        <div className="flex flex-col space-y-10">
          <blockquote className="max-w-lg space-y-4">
            <h1 className="slide-h1 text-center">
              Hi! I'm Chin Mae
              <span className="text-3xl tracking-wider">...</span>
            </h1>

            <figcaption className="slide-p">
              <p className="text-center laptop:text-start">
                - A bookkeeper based in the Philippines.
              </p>

              <p className="text-center laptop:text-start">
                - A passionate in ensuring financial accuracy.
              </p>
            </figcaption>

            <div className="flex items-center justify-center laptop:justify-start space-x-2 slide-icons">
              <a
                href="https://www.facebook.com/share/1A4f5PGXWr/"
                target="_blank"
                className="bg-mybrown p-2 rounded-full hover:bg-mybrown/80"
              >
                <FaFacebookF className="text-xl text-olive" />
              </a>

              <a
                href="https://www.upwork.com/freelancers/~0114fc5a9cb14c554c?mp_source=share"
                target="_blank"
                className="bg-mybrown p-2 rounded-full hover:bg-mybrown/80"
              >
                <SiUpwork className="text-xl text-olive" />
              </a>

              <a
                href="https://www.linkedin.com/in/chin-mae-bernal-03ba4b297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="bg-mybrown p-2 rounded-full hover:bg-mybrown/80"
              >
                <FaLinkedinIn className="text-xl text-olive" />
              </a>
            </div>
          </blockquote>

          <div className="flex items-center justify-center laptop:justify-start space-x-5 ">
            <a href="#contact">
              <button className="text-olive py-2 px-4 border-mybrown border-[3px] bg-mybrown hover:bg-opacity-80 fade-up1">
                Contact
              </button>
            </a>

            <a
              href="https://drive.google.com/file/d/1kmZLse6MWo0GWmhBUIv7ZuwpsBshuZro/view"
              target="_blank"
            >
              <button className="py-2 px-4 border-myorange border-[3px] hover:bg-myorange transition-colors duration-150 fade-up2">
                View Resume
              </button>
            </a>
          </div>
        </div>

        <div className="max-w-44 laptop:max-w-md fade-img mb-5 laptop:mb-0">
          <img src={Profile} alt="" />
        </div>
      </figure>
    </section>
  );
}

export default Home;
