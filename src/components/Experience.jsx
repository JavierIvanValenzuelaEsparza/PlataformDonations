
import React from "react";
import Feature from "./Feature";

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      {/* titld icon */}
      <img src={require("../img/Path 318.png")} alt="" className="w-[5rem]" />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>Donate Clothes Puede Cambiar Vidas</span>
        <span>
          <b>Disfruta la Experiencia</b>
        </span>
      </div>
      {/* features  */}
      <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon='USUARIO' title="Por las Personas"  />
        <Feature icon='help' title="Por las Experiencias" />
        <Feature icon='earth' title="Por un Mejor Mundo " />
      </div>
    </div>
  );
}

export default Experience;