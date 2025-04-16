import React from "react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 inset-x-0 h-fit py-2.5 border-t bg-gradient-to-b from-[#1c1f2c] to-[#1a1c27] space-y-3">
      <p className="text-xs md:text-base text-center text-white">
        © 2025 Sabihisma Fatih. All rights reserved.
      </p>
      <SocialLinks />
    </footer>
  );
};

const SocialLinks = () => {
  const Links = [
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=fatihsabihisma2@gmail.com"
      target="_blank"
      className="social_icon"
    >
      <SiGmail className="m-auto w-full h-full dark:text-[#fafdf6] text-[#1a1a1a] transition-all duration-200" />
    </a>,
    <a
      href="https://github.com/sabfatih"
      target="_blank"
      className="social_icon"
    >
      <FaGithub className="m-auto w-full h-full dark:text-[#fafdf6] text-[#1a1a1a] transition-all duration-200" />
    </a>,
    <a
      href="https://www.linkedin.com/in/sabihisma-fatih-155a6135b/"
      target="_blank"
      className="social_icon"
    >
      <FaLinkedin className="m-auto w-full h-full dark:text-[#fafdf6] text-[#1a1a1a] transition-all duration-200" />
    </a>,
    <a
      href="https://www.instagram.com/sabfatiih"
      target="_blank"
      className="social_icon"
    >
      <FaInstagram className="m-auto w-full h-full dark:text-[#fafdf6] text-[#1a1a1a] transition-all duration-200" />
    </a>,
    <a
      href="https://discordapp.com/users/909058584397094923"
      target="_blank"
      className="social_icon"
    >
      <FaDiscord className="m-auto w-full h-full dark:text-[#fafdf6] text-[#1a1a1a] transition-all duration-200" />
    </a>,
  ];

  return (
    <div className="flex flex-wrap justify-center mx-auto w-fit gap-x-3 md:gap-x-6">
      {Links.map((link, i) => {
        return (
          <div
            key={i}
            className="size-4 md:size-5 rounded-sm hover:scale-105 hover:rotate-3 active:scale-95 active:-rotate-3 transition-all"
          >
            {link}
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
