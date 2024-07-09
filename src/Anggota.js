import React from 'react';
import Anggota1 from '../src/Images/Anggota1.JPG'; // Adjust the path to your image file
import Anggota2 from '../src/Images/Anggota2.jpg'; // Adjust the path to your image file
import BackgroundImage from '../src/Images/background.jpg'; // Adjust the path to your image file

function Anggota({ name, kelas, title, image, description }) {
  return (
    <div className="bg-white text-gray-800 w-[300px] rounded-lg p-6 flex flex-col items-center shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={name}
        className="w-32 h-40 mb-4 rounded object-cover"
      />
      <h2 className="text-[15px] font-bold mb-2 text-[#000000]">{name}</h2>
      <p className="text-[15px] mb-2 text-[#808080]">{kelas}</p>
      <p className="text-[15px]  mb-2 text-[#808080]">{title}</p>
      <p className="text-[15px] text-[#808080]">{description}</p>
    </div>
  );
}

function AnggotaList() {
  return (
    <div
      id="anggota"
      className="min-h-screen flex flex-col items-center justify-center py-12 main-content bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <h1 className="text-[20px] mb-4 text-[#212121]">BIODATA</h1>
      <h1 className="text-[36px] font-bold mb-8 text-[#4d4d4d]">Anggota Tim</h1>

      <div className="flex space-x-8">
        <Anggota
          name="Amanda Shasikirana"
          kelas="2 SI A"
          title="2257301013"
          description="Front-End"
          image={Anggota1}
        />
        <Anggota
          name="Junita Angelina"
          kelas="2 SI A"
          title="225730117"
          description="Back-End"
          image={Anggota2}
        />
      </div>
    </div>
  );
}

export default AnggotaList;
