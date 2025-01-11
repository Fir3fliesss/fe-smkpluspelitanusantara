import jurusan from "../assets/images/informasi_bidang_keahlian.webp"

import React from 'react';

const BidangKeahlian: React.FC = () => {
  return (
    <section className="flex flex-col mx-4">
      <div className="xl:ml-64 xl:mr-64 md:ml-32 md:mr-32 hidden mt-8 md:flex md:justify-center xl:justify-center">
        <img
          className="w-full xs:min-w-[55%] sm:min-w-[40%] sm:min-h[40%] rounded-lg border-4 md:border-2"
          src={jurusan}
          alt="Informasi Bidang Keahlian"
        />

        <div className="md:ml-4">
          <h1 className="font-bold ml-6 xl:text-4xl md:text-2xl items-center">
            INFORMASI BIDANG KEAHLIAN
          </h1>
          <div className="mt-4">
            <p className="ml-6 max-w-[100%] font-medium text-justify">
              SMK Plus Pelita Nusantara memiliki 4 bidang keahlian atau jurusan, Terdiri dari Rekayasa Perangkat Lunak (RPL), Teknik Komputer Jaringan (TKJ), Multimedia (MM), dan juga Perbankan Keuangan Mikro (PKM). Di SMK Plus Pelita Nusantara...
            </p>
          </div>
          <a className="flex justify-end" href="#">
            <button className="ml-6 mt-2 bg-gradient-to-r from-red-800 via-red-600 to-red-500 text-white font-bold py-2 px-4 rounded-full shadow-xl">
              Selengkapnya &raquo;
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BidangKeahlian;
