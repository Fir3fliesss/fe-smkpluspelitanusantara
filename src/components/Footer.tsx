import React from 'react';
import locationIcon from '../assets/icons/location-sign-svgrepo-com.svg';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-gray-900">
      <div className="w-full px-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="mt-5 text-white">
            <div className="text-xl font-semibold flex items-center mb-5">
              <img
                src={locationIcon}
                alt="Location Icon"
                className="h-8 mr-2"
              />
              <h5>Lokasi Kami</h5>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4299329005935!2d106.86209887483123!3d-6.467094293524591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c1d3574a6c97%3A0x43a0aa1056feca8b!2sSMK%20PLUS%20PELITA%20NUSANTARA!5e0!3m2!1sen!2sid!4v1716009003216!5m2!1sen!2sid"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
            <p className="mt-5 text-gray-300">
              Jl. Golf Rt06/08, Gg. Olahraga No.20, Ciriung, <br />
              Kecamatan Cibinong, Kabupaten Bogor, Prov. <br />
              Jawa Barat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="mb-3 mt-5 text-white font-semibold">Kontak Kami</p>
              <ul>
                <li>
                  <a
                    href="http://wa.me/6281210868958"
                    className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    +6281210868958
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-3 mt-5 text-white font-semibold">Navigasi</p>
              <ul>
                <li>
                  <a
                    href="#home"
                    className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="https://ppdb.smkpluspnb.sch.id/"
                    className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    PPDB 2025
                  </a>
                </li>
                <li>
                  <a
                    href="#berita"
                    className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Berita
                  </a>
                </li>
                <li>
                  <a
                    href="#galeri"
                    className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Galeri
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-3 mt-5 text-white font-semibold">Legal</p>
              <ul>
                <li>
                  <a
                    href="#"
                    className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Returns Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-4 mt-5 border-t border-gray-800 md:flex-row md:justify-between">
          <p className="mb-4 text-sm text-gray-300 text-center md:mb-0">
            © 2024 SMK PLUS PELITA NUSANTARA. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {[
              {
                href: "https://www.instagram.com/smkpluspelitanusantara/",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
              },
              {
                href: "https://www.youtube.com/@smkpluspelitanusantara9719",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.504 2.504 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM10 15.464V8.536L15 12l-5 3.464z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
              },
              {
                href: "https://api.whatsapp.com/send/?phone=6281210868958&text&type=phone_number&app_absent=0",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.507 14.307l-.009.075c-2.199-1.096-3.593-3.708-3.593-6.289 0-4.001 3.59-7.093 7.599-7.093 3.996 0 7.09 3.092 7.09 7.093 0 4.001-3.094 7.093-7.09 7.093h-.008c-1.916 0-3.7-.732-5.002-2.079zm-5.002-2.079c-1.303 1.347-3.087 2.079-5.003 2.079h-.007c-3.996 0-7.09-3.092-7.09-7.093 0-4.001 3.094-7.093 7.09-7.093 4.009 0 7.599 3.092 7.599 7.093 0 2.581-1.394 5.193-3.593 6.289l-.009-.075c-1.303 1.347-3.087 2.079-5.003 2.079z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
              },
              {
                href: "https://www.tiktok.com/@smkppelitanusantaracbng",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                ),
              },
              {
                href: "https://github.com/DevacctoRPL",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
