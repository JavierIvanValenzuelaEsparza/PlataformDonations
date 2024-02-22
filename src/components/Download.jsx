import React from 'react'
import { useState } from 'react';

function Download() {
  const [name, setName] = useState('');
  const [opinion, setOpinion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setName('');
    setOpinion('');
    console.log(name);
    console.log(opinion);
  };

  return (
    <div className="flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[48rem] pt-[18rem] mt-[-10rem] relative z-[0] rounded-b-[5rem]">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-6">
          <label htmlFor="name" className="block text-white text-lg font-bold mb-2">
            Email:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md border-[#232A4E] placeholder-[#525D6E] text-white bg-[#081730] focus:outline-none focus:border-[#3182CE] transition-colors duration-300"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="opinion" className="block text-white text-lg font-bold mb-2">
            Tu Opinion Para Mejorar:
          </label>
          <textarea
            id="opinion"
            name="opinion"
            value={opinion}
            onChange={(e) => setOpinion(e.target.value)}
            className="w-full px-3 py-2 border rounded-md border-[#232A4E] placeholder-[#525D6E] text-white bg-[#081730] focus:outline-none focus:border-[#3182CE] transition-colors duration-300"
            placeholder="Share your opinion..."
            rows="4"
          />
        </div>
        <center>
          <button
            type="submit"
            className="bg-[#3182CE] hover:bg-[#2C324E] text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </center>
      </form>
    </div>
  );
}

export default Download