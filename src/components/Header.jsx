import React, { useState } from "react";
import RegistrationForm from "../Authentication/Registration";
import '../Assets/modal.css'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const buttonStyle =
    "rounded-[10px] px-[20px] py-[10px] bg-[#2C324E] hover:bg-[#2C324E] text-white transition-colors duration-300 hover:outline-none focus:outline-none focus:ring focus:border-blue-300 font-family-[font-family]";

  return (
    <div className="header bg-[#081730] flex items-center justify-end px-[5rem] pt-[1rem] text-[1rem]">
      <button className={buttonStyle} onClick={openModal}>
        Iniciar Sesión
      </button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <RegistrationForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
