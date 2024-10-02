// TeamCarousel.js
import React, { useState, useEffect } from 'react';
import luffy from './luffy.jpg';
import naruto from './naruto.png';
const teamMembers = [
  luffy,naruto,luffy,naruto
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center ">
      <div className=' h-80 w-80'>


      <img
        src={teamMembers[currentIndex]}
        alt="Team Member"
        className="rounded-lg h-80 w-80"
      />
           </div>
    </div>
  );
};

export default TeamCarousel;
