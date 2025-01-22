import React from "react";

function Contact() {
  return (
    <section id="contact" className="pt-28 space-y-10">
      <h2>Contact</h2>

      <div className="flex flex-col items-center justify-center space-y-8 py-10">
        <h3 className="text-center">Get In Touch</h3>

        <figure className="grid grid-cols-3 gap-10 px-10 w-full">
          <div className="bg-slate-500 p-28"></div>
          <div className="bg-slate-500 p-28"></div>
          <div className="bg-slate-500 p-28"></div>
        </figure>
      </div>
    </section>
  );
}

export default Contact;
