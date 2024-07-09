import React from "react";
import { Link, Element } from "react-scroll";
export default function HeroSection() {
    function Judul() {
        return (

            <section id="HeroSection">
                <div className="inter-100 font-[18px] text-[#545BE8]">
                    {/* <label className="font-normal">Let's <font className="font-bold">Begins</font></label> */}

                    <div className="poppins-semibold text-[64px] text-[#4D4D4D] mt-14">
                        Klasifikasi Candi <br /> Corak Hindu-Buddha<br />
                    </div>

                    <p className="poppins-regular text-[20px] text-[#717171] mb">Selamat datang di Website FIND TEMPLE yang dapat
                        <br /> memudahkan Anda dalam mengklasifikasikan candi bercorak <br />Hindu-Buddha berdasarkan Gambar.</p>

                    <div className="flex mt-4">
                        <Link to="klasifikasi" smooth={true} duration={500}>
                            <button className="px-6 py-2 bg-[#AF8F6F] text-[16px] text-white rounded-[6px] hover:bg-[#74512D] transition-colors duration-300 mb-20">
                                <font className="text-[16px] poppins-regular">Informasi Selengkapnya</font>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        )
    }

    function Gambar() {
        return (
            <div>
                <img src="./candiHeroSection2.png" ></img>
            </div>
        )
    }

    return (
        <div className="flex flex-col md:flex-row items-center md:justify-between px-[150px] py-[50px]">
            <Judul />
            <Gambar />
            <Element name="klasifikasi" className="element">
            </Element>
        </div>
    )
}