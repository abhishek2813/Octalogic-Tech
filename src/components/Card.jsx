import React from 'react';

const Card = ({ icon, mainText, description, linkText }) => {
  return (
    <div className="flex flex-col p-4 bg-white shadow rounded-lg relative">
      <div className="flex items-center mb-4">
        <div className="bg-green-100 p-2 rounded-full mr-4">
          {icon}
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-800">{mainText}</div>
          <div className="text-gray-500">{description}</div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <button className="text-pink-500 hover:underline">{linkText}</button>
      </div>
    </div>
  );
};

export default Card;
