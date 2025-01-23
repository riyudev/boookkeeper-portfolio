import React from "react";
import Chinmae from "../assets/chinmae.png";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const services = [
  { name: "Bookkeeping", rating: 5 },
  { name: "Accounting", rating: 5 },
  { name: "Data Entry", rating: 5 },
  { name: "Financial Statements", rating: 5 },
  { name: "Copy Writing", rating: 4.5 },
  { name: "Payroll Processing", rating: 5 },
  { name: "Bank Reconciliation", rating: 4 },
  { name: "Business Analysis", rating: 4 },
];

const getStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {Array.from({ length: fullStars }, (_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {Array.from({ length: emptyStars }, (_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </>
  );
};

function About() {
  return (
    <section id="about" className="pt-24 space-y-10">
      <h2 className="te">About Me</h2>

      <div className="flex flex-col items-center justify-center space-y-10">
        <figure className="flex items-center justify-center p-10 space-x-6">
          <div className="max-w-md bg-mybrown/70 p-4 rounded-xl shadow-md shadow-mybrown">
            <img src={Chinmae} alt="Profile" className="rounded-lg max-w-80" />
          </div>

          <blockquote className="w-[50%] bg-mybrown/70 p-5 rounded-xl shadow-md shadow-mybrown">
            <p className="mb-16">
              I am a Financial Management graduate from Gensantos Foundation
              College with experience in accounting through various roles. I am
              36 years old, married, and live in Purok Bayanihan, Barangay San
              Isidro, General Santos City, South Cotabato. My education and
              background have equipped me with the skills and professionalism
              needed to handle accounting tasks effectively.
            </p>

            <a href="#contact">
              <button className="transition-colors duration-150 text-beige py-2 px-4 border-olive border-[3px] hover:bg-olive">
                Contact
              </button>
            </a>
          </blockquote>
        </figure>

        <div className="w-full space-y-10 px-10 pb-10">
          <h3 className="place-self-center text-center">Skills & Services</h3>

          <figure className="grid grid-cols-2 gap-8 bg-mybrown/70 p-10 rounded-xl shadow-md shadow-mybrown">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex border-4 border-olive/60 rounded-full py-4 px-5 justify-between items-center"
              >
                <h5>{service.name}</h5>
                <div className="flex space-x-3 text-xl text-yellow-500">
                  {getStars(service.rating)}
                </div>
              </div>
            ))}
          </figure>
        </div>
      </div>
    </section>
  );
}

export default About;
