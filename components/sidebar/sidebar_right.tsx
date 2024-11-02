// components/Sidebar.tsx

import React, { useState } from 'react';
import './sidebar_right.css';

const SidebarRight = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="sidebar">
      <div className="icon" onClick={handleToggle}>
        {isVisible ? '🔼' : '🔽'} {/* Example icons */}
      </div>
      <div className={`content ${isVisible ? 'visible' : ''}`}>
        <p>Your additional content goes here!</p>
      </div>
    </div>
  );
};

export default SidebarRight;
