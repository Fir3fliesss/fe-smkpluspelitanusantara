import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#1a1d21] px-4">
      <div className="mb-12">
        <img
          src="/assets/logos/logo.webp"
          alt="Logo"
          width={64}
          height={64}
          className="rounded-full bg-slate-800 p-1"
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-semibold text-white text-center mb-4">
        Halaman Tidak Ditemukan (404)
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-12 text-center font-medium text-balance">
        Halaman yang Anda cari tidak ada atau terjadi kesalahan lain. Silahkan<span className='text-blue-500'> kembali</span>, atau kunjungi <a href="smkpluspnb.sch.id" className='text-red-800'>smkpluspnb.sch.id</a> untuk memilih arah baru.
      </p>

        <a
          href="https://api.whatsapp.com/send/?phone=6282163387780&text=Halo%20saya%20merupakan%20seorang%20pengunjung%20di%20website%20SMK%20PLUS%20PELITA%20NUSANTARA%20dan%20saya%20mendapatkan%20kendala%20berupa%20%60%60%60Halaman%20tidak%20ditemukan%60%60%60%2Cbisa%20bantu%20saya%3F&type=phone_number&app_absent=0"
          className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-sm tracking-wide"
        >
          Hubungi Team Kami
        </a>
    </div>
  );
};

export default NotFound;
