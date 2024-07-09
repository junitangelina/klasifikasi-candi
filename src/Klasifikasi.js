import React from 'react';
import Prambanan from '../src/Images/Prambanan.png'; // Ganti dengan path gambar yang sesuai
import MuaraTakus from '../src/Images/MuaraTakus.png'; // Ganti dengan path gambar yang sesuai
import Borobudur from '../src/Images/Borobudur.png'; // Ganti dengan path gambar yang sesuai
import Dieng from '../src/Images/Dieng.png'; // Ganti dengan path gambar yang sesuai

function Klasifikasi({ name, title, image, description }) {
  return (
    <div className="bg-white text-gray-800 w-[300px] rounded-lg p-6 flex flex-col items-center shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={name}
        className="w-32 h-40 mb-4 rounded object-cover"
      />
      <h2 className="poppins-bold text-[20px] font-bold mb-2">{name}</h2> 
      <p className="poppins-regular text-center text-[15px] text-[#454545] text-justify">{description}</p>
    </div>
  );
}

function KlasifikasiList() {
  return (
    <div
      id="Klasifikasi"
      className="min-h-screen flex flex-col items-center justify-center py-12 main-content bg-gray-100"
      style={{ marginTop: '-100px' }} // Adjust this value to move the section upwards
    >
      <h1 className="poppins-semibold text-[36px] text-[#4D4D4D]"><br></br>Klasifikasi Candi di Indonesia</h1>
      <h2 className="poppins-regular text-center text-[15px] text-[#717171] mt-4 mb-8">
        Candi merupakan bangunan tempat ibadah dari peninggalan masa lampau yang berasal dari agama <br></br> Hindu-Budha. Istilah candi tidak hanya digunakan oleh masyarakat
        untuk menyebut tempat ibadah <br></br>saja, tetapi juga sebagai istana, pemandian/petirtaan, gapura, dan sebagainya (Daniel Agus Maryanto, <br></br> 2007: 8).
      </h2>
      <div className="flex space-x-8">
        <Klasifikasi
          name={<span className="font-poppins">Candi Prambanan</span>}
          description="Candi Prambanan adalah kompleks candi Hindu terbesar di Indonesia, terletak di Yogyakarta. Dibangun pada abad ke-9, candi ini didedikasikan untuk Trimurti: Brahma, Wisnu, dan Siwa. Prambanan terkenal dengan arsitektur megah dan relief yang menggambarkan kisah Ramayana, menjadikannya Situs Warisan Dunia UNESCO."
          image={Prambanan}
        />
        <Klasifikasi
          name={<span className="font-poppins">Candi Muara Takus</span>}
          description="Candi Muara Takus adalah sebuah kompleks candi Buddha yang terletak di Kabupaten Kampar, Provinsi Riau, Indonesia. Candi ini merupakan salah satu peninggalan bersejarah yang penting, mencerminkan pengaruh budaya dan agama Buddha di Sumatera pada masa lampau. Kompleks ini terdiri dari beberapa bangunan utama, termasuk Candi Sulung, Candi Bungsu, Mahligai Stupa, dan Palangka."
          image={MuaraTakus}
        />
        <Klasifikasi
          name={<span className="font-poppins">Candi Borobudur</span>}
          description="Candi Borobudur adalah salah satu candi Buddha terbesar dan paling terkenal di dunia, yang terletak di Magelang, Jawa Tengah, Indonesia. Dibangun pada abad ke-8 dan ke-9 oleh dinasti Syailendra, candi ini terdiri dari sembilan platform bertingkat, enam berbentuk persegi dan tiga berbentuk lingkaran, yang dihiasi dengan 2.672 panel relief dan 504 arca Buddha."
          image={Borobudur}
        />
        <Klasifikasi
          name={<span className="font-poppins">Candi Dieng</span>}
          description="Candi Dieng adalah kompleks candi Hindu yang terletak di dataran tinggi Dieng, Jawa Tengah. Dibangun pada abad ke-8, candi-candi ini merupakan salah satu yang tertua di Indonesia. Dieng terkenal dengan arsitektur sederhana namun bersejarah, serta lokasinya yang indah di antara pegunungan dan kawah vulkanik."
          image={Dieng}
        />
      </div>
    </div>
  );
}

export default KlasifikasiList;