import React from 'react';
import instagram from '../assets/icons/instagram.svg';
import whatsapp from '../assets/icons/whatsapp.svg';
import youtube from '../assets/icons/youtube.svg';
import tiktok from '../assets/icons/tiktok.svg';


const SocialMedia: React.FC = () => {
  return (
    <section className="mt-6 mb-6 mr-8 ml-8" id="sosmed">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl p-4 bg-white rounded-lg shadow-xl sm:p-6">
          <p className="text-xl font-semibold text-center">
            - Let’s connect to create and collaborate! -
          </p>
          <ul className="my-4 space-y-3">
            <li>
              <a
                href="https://www.instagram.com/smkpluspelitanusantara/"
                className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                <img className="w-5" src={instagram} alt="Instagram" />
                <span className="flex-1 ms-3 whitespace-nowrap">Instagram</span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-bold text-red-600">
                  Popular!
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/@smkpluspelitanusantara9719"
                className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                <img className="w-5" src={youtube} alt="YouTube" />
                <span className="flex-1 ms-3 whitespace-nowrap">YouTube</span>
              </a>
            </li>

            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=6281210868958&text&type=phone_number&app_absent=0"
                className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                <img className="w-5" src={whatsapp} alt="WhatsApp" />
                <span className="flex-1 ms-3 whitespace-nowrap">WhatsApp</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.tiktok.com/@smkppelitanusantaracbng"
                className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                <img className="w-5" src={tiktok} alt="TikTok" />
                <span className="flex-1 ms-3 whitespace-nowrap">TikTok</span>
              </a>
            </li>
          </ul>

          <div>
            <a
              href="mailto:smkpnb06@gmail.com"
              className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline"
            >
              <svg
                className="w-3 h-3 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Want to connect us with Email? Sure!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
