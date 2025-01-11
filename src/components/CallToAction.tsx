import React from 'react';
import banner from '../assets/images/banner_ajakan_bergabung.webp';

const CallToAction: React.FC = () => {
  return (
    <section className="mt-6 md:mt-8 xl:mt-16">
      <div className="relative">
        <img
          className="object-cover w-full h-[580px] xl:h-[700px] brightness-50"
          src={banner}
          alt="Bergabung bersama kami"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="hidden sm:block text-center">
            <h1 className="text-xl xl:text-2xl font-bold mb-4">
              Tertarik bergabung bersama kami?
            </h1>
            <p className="text-xl xl:text-2xl mb-6">Daftar Sekarang!</p>
            <a
              href="https://ppdb.smkpluspnb.sch.id/"
              className="bg-gradient-to-r from-red-800 via-red-600 to-red-500 text-white font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300"
            >
              Klik Disini!
            </a>
          </div>

          <div className="sm:hidden text-center">
            <h1 className="font-bold">
              Let's Join with <span className="text-red-600">Us!</span>
            </h1>
            <a
              href="https://ppdb.smkpluspnb.sch.id/"
              className="font-semibold underline hover:text-red-500 transition-colors duration-300"
            >
              REGISTER NOW!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
