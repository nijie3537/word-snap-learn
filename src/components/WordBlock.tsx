
import React from 'react';

interface WordBlockProps {
  name: string;
  pronunciation: string;
  translation: string;
  position: {
    top: string;
    left: string;
  };
}

const WordBlock = ({ name, pronunciation, translation, position }: WordBlockProps) => {
  return (
    <div
      className="absolute bg-white bg-opacity-80 p-2 rounded-lg shadow-lg"
      style={{
        top: position.top,
        left: position.left,
        maxWidth: "200px"
      }}
    >
      <p className="font-bold whitespace-nowrap">{name}</p>
      <p className="text-gray-600 text-sm whitespace-nowrap">{pronunciation}</p>
      <p className="text-blue-600">{translation}</p>
    </div>
  );
};

export default WordBlock;
