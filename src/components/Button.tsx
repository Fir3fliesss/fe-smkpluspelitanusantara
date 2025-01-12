import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="ml-6 mt-2 bg-gradient-to-r from-red-800 via-red-600 to-red-500 text-white font-bold py-2 px-4 rounded-full shadow-xl">
      {text}
    </button>
  );
}

export default Button;
