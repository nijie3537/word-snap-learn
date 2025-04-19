
import React from 'react';
import WordBlock from './WordBlock';

interface DetectedObject {
  name: string;
  pronunciation: string;
  translation: string;
  position: {
    top: string;
    left: string;
  };
}

interface DetectedObjectsProps {
  objects: DetectedObject[];
}

const DetectedObjects = ({ objects }: DetectedObjectsProps) => {
  return (
    <>
      {objects.map((object, index) => (
        <WordBlock
          key={index}
          name={object.name}
          pronunciation={object.pronunciation}
          translation={object.translation}
          position={object.position}
        />
      ))}
    </>
  );
};

export default DetectedObjects;
