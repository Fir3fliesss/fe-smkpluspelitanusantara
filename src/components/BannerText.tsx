import React from 'react';

interface BannerTextProps {
  text: string;
}

const BannerText: React.FC<BannerTextProps> = ({ text }) => {
    return (
        <h1 className="pt-4 pb-4 font-bold text-slate-200 text-center text-xl md:text-2xl xl:text-4xl bg-gradient-to-tr from-red-800 via-red-700 to-red-600">
        {text}
      </h1>
    )
}

export default BannerText;
