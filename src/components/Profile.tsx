import React from 'react';
import sun from "../assets/icons/sun.svg";

const Profile: React.FC = () => {
  return (
    <>
      <div className="mt-12 flex justify-center items-center">
        <button>
          <img src={sun} alt="logowithtext" className="w-12 transition ease-in-out" />
        </button>
      </div>
      <section className="mt-6">
        <div className="flex flex-col items-center">
          <h1 className="md:mb-2 xl:mb-2 font-bold text-2xl md:text-4xl xl:text-6xl text-center">
            Sekolah Menengah Kejuruan
          </h1>
          <h1 className="md:mb-2 xl:mb-2 font-medium text-2xl md:text-4xl xl:text-6xl text-center">
            Plus Pelita Nusantara
          </h1>
          <p className="mt-6 items-center text-center max-w-[55%] md:text-xl xl:text-2xl">
            Menjadi Sekolah Menengah Kejuruan Unggulan yang menghasilkan sumber daya manusia <b>Terampil</b>, <b>Entrepreneur</b>, dan <b>Religius</b>.
          </p>
        </div>
        <hr className="mt-6 w-24 h-px mb-6 mx-auto bg-gray-400 border-0 rounded-full" />
        <div className="mt-6 flex justify-center">
          <figure className="max-w-screen-md mx-auto text-center">
            <svg className="w-5 h-5 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote className="flex justify-center text-justify">
              <ul>
                <li>
                  <p className="text-xl text-center italic font-medium text-gray-900">"Successed By Character!</p>
                </li>
                <li>
                  <p className="text-xl text-center italic font-medium text-gray-900">We Are Different!</p>
                </li>
                <li>
                  <p className="text-xl text-center italic font-medium text-gray-900">The Future is Ours!"</p>
                </li>
              </ul>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">SMK Plus Pelita Nusantara</cite>
              </div>
            </figcaption>
          </figure>
        </div>
        <hr className="mt-6 w-24 h-px mb-6 mx-auto bg-gray-400 border-0 rounded-full" />
      </section>
    </>
  );
};

export default Profile;
