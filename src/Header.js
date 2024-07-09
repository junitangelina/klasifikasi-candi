import React from "react";
import { Link, Element } from "react-scroll";
import ImageProcessing from './ImageProcessing';

export default function Header() {
  function KomponenHeader() {
    return (
      <div className="bg-white drop-shadow-md flex flex-row justify-between px-[150px] py-[4px] items-center mb-20">
        <Logo />
        <Menu />
        <LoginRegister />
      </div>
    );
  }

  function Logo() {
    return (
      <div className="flex flex-row items-center">
        <img src={"./FindTemple.png"} className="w-150 h-20 mr-[16px]" alt="Logo" />
        <label className="text-[16px] poppins-bold text-[#AF8F6F]">FindTemple</label>
      </div>
    );
  }

  function Menu() {
    return (
      <div>
        <ul className="flex flex-row space-x-[40px]">
          <li className="poppins-regular text-[16px] poppins-regular text-black hover:underline">
            <Link to="HeroSection" smooth={true} duration={500}>Beranda</Link>
          </li>
          <li className="poppins-regular text-[16px] text-black hover:underline">
            <Link to="klasifikasi" smooth={true} duration={500}>Informasi</Link>
          </li>
          <li className="poppins-regular text-[16px] text-black hover:underline">
            <Link to="anggota" smooth={true} duration={500}>Tim</Link>
          </li>
          <li className="poppins-regular text-[16px] text-black hover:underline">
            <Link to="dosen" smooth={true} duration={500}>Dosen</Link>
          </li>
        </ul>
      </div>
    );
  }

  function LoginRegister() {
    return (
      <div className="flex space-x-4">
        <Link to="process" smooth={true} duration={500}>
          <button className="poppins-regular px-12 py-2 bg-[#AF8F6F] text-white rounded-lg hover:bg-[#74512D] transition-colors duration-300">
            Proses Data
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="fixed top-0 w-full z-50 mb-14">
      <KomponenHeader />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Element name="HeroSection" className="element">
        <h1>Beranda</h1>
        {/* Konten beranda */}
      </Element>
      <Element name="klasifikasi" className="element">
        <h1>Informasi</h1>
        {/* Konten informasi */}
      </Element>
      <Element name="anggota" className="element">
        <h1>Tim</h1>
        {/* Konten tim */}
      </Element>
      <Element name="dosen" className="element">
        <h1>Dosen</h1>
        {/* Konten dosen */}
      </Element>
      <Element name="process" className="element">
        <ImageProcessing />
      </Element>
    </div>
  );
}