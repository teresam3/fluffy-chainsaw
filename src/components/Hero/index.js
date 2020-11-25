import React, { useState } from 'react';
import "./index.css";
import "./Hero.js"

function OnHover() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="onHover">
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
            Hover here!
      </button>
      {
      isShown && (
          <div>
          <button src="./images/arrow.png"> </button>
        </div>
      )}
    </div>
  );
}

export default OnHover;
