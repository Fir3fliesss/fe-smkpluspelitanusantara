import React from 'react';
import jurusan from "../assets/images/informasi_bidang_keahlian.webp"
import Button from "./Button";

const BidangKeahlian: React.FC = () => {
  return (
    <section className="flex flex-col mx-4 dark:bg-slate-900">
      <div className="xl:ml-64 xl:mr-64 md:ml-32 md:mr-32  mt-8 md:flex md:justify-center xl:justify-center">
        <img
          className="w-full xs:min-w-[55%] sm:min-w-[40%] sm:min-h[40%] rounded-lg border-4 md:border-2"
          src={jurusan}
          alt="Informasi Bidang Keahlian"
        />

        <div className="md:ml-4">
          <h1 className="font-bold md:ml-6 xl:text-4xl md:text-2xl items-center dark:text-slate-200">
            INFORMASI BIDANG KEAHLIAN
          </h1>
          <div className="mt-4">
            <p className="md:ml-6 max-w-[100%] font-medium text-justify dark:text-slate-200">
              SMK Plus Pelita Nusantara memiliki 4 bidang keahlian atau jurusan, Terdiri dari Rekayasa Perangkat Lunak (RPL), Teknik Komputer Jaringan (TKJ), Multimedia (MM), dan juga Perbankan Keuangan Mikro (PKM). Di SMK Plus Pelita Nusantara...
            </p>
          </div>
          <a className="flex justify-end" href="#" title='Selengkapnya &raquo;'>
            <Button text="Selengkapnya &raquo;" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BidangKeahlian;
