import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="pt-24 space-y-9">
      <h2>Contact Me</h2>

      <div className="flex flex-col items-center justify-center space-y-8 laptop:py-10 pb-10">
        <header className="flex flex-col justify-center space-y-3 laptop:px-10">
          <h3 className="text-center">Get In Touch</h3>
          <p className="text-center">
            Whether you need help keeping your finances organized, insights on
            managing budgets, or just have questions about bookkeeping, I’m here
            to help. Let’s work together to make your numbers make sense—drop me
            a message, and I’ll be happy to connect!
          </p>
        </header>

        <figure className="grid grid-cols-1 laptop:grid-cols-3 gap-10 px-5 laptop:px-10 w-full">
          <div className="place-items-center text-center bg-mybrown/60 p-8 space-y-4 rounded-xl shadow-md shadow-mybrown">
            <MdEmail className="text-5xl text-yellow-400" />
            <p className="text-wrap">chinmaebernal@gmail.com</p>
          </div>

          <div className="place-items-center text-center bg-mybrown/60 p-8 space-y-4 rounded-xl shadow-md shadow-mybrown">
            <FaLocationDot className="text-5xl text-yellow-400" />
            <p>
              Purok Bayanihan, Barangay San Isidro, General Santos City,
              Philippines
            </p>
          </div>

          <div className="place-items-center text-center bg-mybrown/60 p-8 space-y-4 rounded-xl shadow-md shadow-mybrown">
            <FaPhoneAlt className="text-5xl text-yellow-400" />
            <p>+63 908-161-3638</p>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default Contact;
