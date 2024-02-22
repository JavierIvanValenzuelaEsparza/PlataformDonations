import { React, useState } from "react";
import MusicPlayer from "./MusicPlayer";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import '../App.css'

function Search() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "-44rem",
    },
    false: {
      left: "-50rem",
    },
  };
  const redimg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };
  const musicimg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };

  const MotionDonate = {
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
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
      {/* left side */}
      <div className="left flex-1">
        <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../img/backgraphics.png")}
          alt=""
          className="absolute top-[15rem] left-[-47rem] z-[0]"
        />
        <motion.img
          variants={MotionDonate}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "spring",
          }}
          src={require("../Assets/PersonDonations.png")}
          alt=""
          className="w-[34rem] top-[26rem] absolute"
        />
        <motion.img
          variants={musicimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          alt=""
          className="w-[17rem] top-[50rem] left-[2rem] absolute"
        />
      </div>
      {/* right side */}
      <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem] z-[40]">
        {/* Search */}
        <div className="searchbar flex justify-start w-[100%]">
          {/* SearchIcon */}
        </div>

        {/* paragraph */}
        <div className="bg-gradient detail flex flex-col mt-5 text-7xl">
          <span><b>Sobre Nosotros</b></span>
        </div>
        <div className="detail flex flex-col mt-2 text-2xl">
          <span>
            Nuestra organización, trabajamos con varias asociaciones locales para
            asegurarnos de que la ropa llegue a las personas que más lo necesitan.
          </span>
          <span className="text-sm mt-3 text-[#4D586A]">
            Crear una comunidad que se preocupe por los demás y el
            planeta. Nos esforzamos por ser una organización inclusiva y acogedora para todos.
            Si compartes nuestros valores y te gustaría ayudar a las personas necesitadas,
            ¡únete a nosotros! Juntos, podemos hacer una diferencia positiva en la vida de las
            personas y en el mundo que nos rodea.<br />
          </span>
        </div>
        {/* Music Player */}
        <VisibilitySensor
          onChange={(isVisible) => setElementIsVisible(isVisible)}
        >
        </VisibilitySensor>
      </div>
    </div>
  );
}

export default Search;