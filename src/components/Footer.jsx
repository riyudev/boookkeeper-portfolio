import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

function Footer() {
  return (
    <footer className="w-full border-t-2">
      <div className="place-items-center p-3">
        <div className="flex space-x-2">
          <a href="https://www.facebook.com/share/1A4f5PGXWr/" target="_blank">
            <FaFacebookF className="text-base laptop:text-xl text-beige" />
          </a>

          <a
            href="https://www.upwork.com/freelancers/~0114fc5a9cb14c554c?mp_source=share"
            target="_blank"
          >
            <SiUpwork className="text-xl laptop:text-2xl text-beige" />
          </a>

          <a
            href="https://www.linkedin.com/in/chin-mae-bernal-03ba4b297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <FaLinkedinIn className="text-base laptop:text-xl text-beige" />
          </a>
        </div>

        <div className="gap-y-1 text-center">
          <p className="font-montserratBold text-sm laptop:text-base">
            Chin Mae Bernal • Bookkeeper | Account Manager
          </p>
          <p className="font-montserratBold text-sm laptop:text-base">
            Copyright &copy; 2024 - All rights reserve
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
