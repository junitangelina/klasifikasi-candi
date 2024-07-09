import React from 'react';
import dosen1 from '../src/Images/dosen1.jpeg'; // Ganti dengan path gambar yang sesuai
import dosen2 from '../src/Images/dosen2.jpg'; // Ganti dengan path gambar yang sesuai
import dosen3 from '../src/Images/dosen3.jpg'; // Ganti dengan path gambar yang sesuai

function Dosen({ name, title, image, description }) {
  return (
    <div className="bg-white text-gray-800 w-[350px] rounded-lg p-6 flex flex-col items-center shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={name}
        className="w-32 h-40 mb-4 rounded object-cover"
      />
      <h2 className="mb-2" style={{ fontFamily: 'Poppins', fontSize: '15px', fontWeight: 'bold' }}>{name}</h2>
      <p className="mb-2" style={{ fontFamily: 'Poppins', fontSize: '15px', color: '#808080' }}>{title}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function DosenList() {
  return (
    <div
      id="dosen"
      className="min-h-screen flex flex-col items-center justify-center py-12 main-content bg-gray-100"
    >
      <h1 className="text-[36px] poppins-semibold mb-8 text-[#4d4d4d]">Dosen Pengampu</h1>
      <div className="flex space-x-8">
        <Dosen
          name={<span className="font-poppins">Muhammad Mahrus Zain, S.ST., M.T.I.</span>}
          title="Dosen Framework Lanjutan"
          image={dosen1}
        />
        <Dosen
          name={<span className="font-poppins">Mardhiah Fadli, S.T., M.T.</span>}
          title="Dosen Manajemen Proyek"
          image={dosen2}
        />
        <Dosen
          name={<span className="font-poppins">Dini Nurmalasari, S.T., M.T</span>}
          title="Dosen Penambangan Data"
          image={dosen3}
        />
      </div>
    </div>
  );
}

export default DosenList;