import React, { useState } from "react";
import axios from "axios";
import BackgroundImage from '../src/Images/background2.jpg'; // Ganti dengan path gambar yang sesuai

export default function ImageProcessing() {
  const [predictedLabel, setPredictedLabel] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [status, setStatus] = useState("");

  const labelDescriptions = {
    0: {
      label: "Candi Borobudur",
      description: "Borobudur, candi Buddha terbesar di dunia, memiliki 2.672 panel relief dan 504 arca Buddha. Dibangun oleh dinasti Syailendra pada abad ke-8, candi ini dihiasi dengan panel relief terpanjang di dunia. Borobudur juga dirancang sebagai mandala, simbol perjalanan menuju Nirwana.",
    },
    1: {
      label: "Candi Dieng",
      description: "Candi Dieng, kompleks candi Hindu di Jawa Tengah, dibangun pada abad ke-8 dan merupakan salah satu yang tertua di Indonesia. Terletak di dataran tinggi Dieng yang sejuk, candi ini sering diselimuti kabut, menambah kesan mistis. Terkenal dengan arsitektur sederhana namun bersejarah.",
    },
    2: {
      label: "Candi Muara Takus",
      description: "Candi Muara Takus, terletak di Riau, adalah candi Buddha yang unik karena terbuat dari batu bata merah. Dibangun pada abad ke-11, candi ini merupakan satu-satunya peninggalan Buddha di Sumatera. Kompleks ini memiliki struktur stupa besar dan berfungsi sebagai pusat ritual.",
    },
    3: {
      label: "Candi Prambanan",
      description: "Candi Prambanan, selain sebagai kompleks candi Hindu terbesar di Indonesia, memiliki sekitar 240 candi, meskipun banyak yang kini berupa reruntuhan. Penggalian dan pemugaran besar-besaran dilakukan pada abad ke-20, dengan beberapa bagian asli masih hilang. Terkenal dengan relief kisah Ramayana.",
    },
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setUploadedFile(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);

    try {
      console.log("Uploading file with FormData:", formData);
      const response = await axios.post(
        "https://2fc5-35-231-171-246.ngrok-free.app/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data;
      console.log("Response data:", data); // Add this line to check response data

      if (data.success) {
        setStatus("File berhasil diproses!");
        const labelData = labelDescriptions[data.label];
        if (labelData) {
          setPredictedLabel(labelData.label);
          setDescription(labelData.description);
        }
      } else {
        setStatus("File gagal diproses!");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Terjadi kesalahan saat memproses file!");
    }
  };

  return (
    <section
      className="bg-cover bg-center py-12"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
      id="process"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        {/* Bagian kiri: Upload File */}
        <div className="w-full md:w-1/2 bg-white p-4 rounded shadow-md mt-[150px] mb-8 md:mb-0">
          <h2 className="text-[24px] poppins-bold text-[#454545] mb-4">Upload File Disini!</h2>
          <input
            type="file"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
          />
          <p className="text-[12x] text-[#A6A1A1] mt-2">Max file size: 10MB. Supported file types: JPG, PNG.</p>
          <div id="status" className="text-sm text-gray-700 mt-2">{status}</div>
        </div>

        {/* Bagian kanan: Prediksi Label dan Deskripsi */}
        <div className="w-full md:w-1/2 flex flex-col items-start mt-[150px]">
          {uploadedFile && (
            <img
              src={uploadedFile}
              alt="Uploaded"
              className="max-w-full h-auto mb-4"
              style={{ maxHeight: "500px" }}
            />
          )}
          {predictedLabel && (
            <div className="bg-white p-4 rounded shadow-md w-full flex flex-col md:flex-row">
              <div>
                <h2 className="text-[32px] font-bold text-[#454545]">{predictedLabel}</h2>
                <p className="text-[20px] text-[#454545]">{description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}