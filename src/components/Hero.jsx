import React, { useState } from "react";
import DownloadAds from "./DownloadAds";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import '../App.css';

function Hero() {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };

  const musicPlayer = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  };

  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  };

  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };

  const donateLogoMotion = {
    hidden: {
      y: "-25cm",
    },
    visible: {
      y: 0,
      transition: {
        duration: 1.10,
        type: "spring",
      },
    },
  };

  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">
        {/* left side */}
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
          {/* Updated: Bigger and more welcoming title */}
          <h1 className="text-gradient text-4xl md:text-6xl lg:text-8xl">
            <span className="block">Welcome to</span>
            <b className="bg-gradient">Donation</b> <b className="bg-gradient">Clothes</b>
          </h1>
          <span className="text-[20px] text-[#525D6E]">
          Plataforma inclusiva que facilita la donación de prendas de vestir
            <br />
          Brindar apoyo directo a quienes más lo necesitan
          </span>
          {/* download ads */}
        </div>
        {/* right side */}
        <div className="images relative w-[50%] right-0"> {/* Añadido: left-0 */}
          <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={require("../img/backgraphics.png")}
            alt=""
            className="absolute top-[-8rem] left-[19rem]"
          />
          <motion.img
            variants={donateLogoMotion}
            initial="hidden"
            animate={`${elementIsVisible ? "visible" : "hidden"}`}
            src={require("../img/donateLogo.png")}
            alt=""
            className="absolute top-[-12rem] h-[20rem] left-[1rem]"
          />
          <motion.img
            variants={musicPlayer}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
            src={require("../img/donatePoster.png")}
            alt=""
            className="absolute left-[235px] top-[94px] w-[175px]"
          />
          <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("../img/p 3.png")}
            alt=""
            className="absolute w-[5rem] left-[13rem] top-[8rem]"
          />
          <motion.img
            variants={heart}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("../img/p 4.png")}
            alt=""
            className="absolute w-[5rem] left-[12.5rem] top-[8rem]"
          />
        </div>
      </div>
    </VisibilitySensor>
  );
}

export default Hero;
