import React from 'react';
import Image from "next/image";

interface FlagGridProps {
  containerHeight: number;
  containerWidth: number;
}

const flags = [
  '/img/flags/japan.png', 
  '/img/flags/united-kingdom.png', 
  '/img/flags/australia.png', 
  '/img/flags/france.png', 
  '/img/flags/eu.png', 
  '/img/flags/china.png', 
  '/img/flags/thailand.png', 
  '/img/flags/singapore.png', 
  '/img/flags/malaysia.png', 
  '/img/flags/indonesia.png', 
  '/img/flags/vietnam.png', 
  '/img/flags/denmark.png', 
  '/img/flags/canada.png', 
  '/img/flags/finland.png', 
  '/img/flags/hongkong.png', 
  '/img/flags/south-korea.png', 
];

// Define fixed positions for flags to avoid overlap
const flagPositions = [
  { top: '10%', left: '5%' },
  { top: '50%', left: '5%' },
  { top: '20%', left: '15%' },
  { top: '55%', left: '15%' },
  { top: '30%', left: '25%' },
  { top: '20%', left: '35%' },
  { top: '55%', left: '35%' },
  { top: '50%', left: '45%' },
  { top: '60%', left: '55%' },
  { top: '50%', left: '65%' },
  { top: '60%', left: '75%' },
  { top: '10%', left: '85%' },
  { top: '50%', left: '85%' },
  { top: '20%', left: '75%' },
  { top: '10%', left: '65%' },
  { top: '20%', left: '55%' },
];

const FlagGrid: React.FC<FlagGridProps> = ({ containerHeight, containerWidth }) => {
  const flagWidth = containerWidth * 0.1; // Example: 10% of container width
  const flagHeight = 'auto'; // Maintain aspect ratio

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden flagGridContainer">
      {/* Render flags */}
      {flags.map((flag, index) => (
        <img
          key={index}
          src={flag}
          alt={`Flag ${index}`}
          className="absolute flag"
          style={{
            top: flagPositions[index].top,
            left: flagPositions[index].left,
            zIndex: 1,
            width: flagWidth, // Set the width based on the container size
            height: flagHeight, // Set height to auto for aspect ratio
          }}
        />
      ))}
      {/* Translucent overlay to hide flags */}
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          zIndex: 3,
        }}
      />
    </div>
  );
};

export default FlagGrid;
