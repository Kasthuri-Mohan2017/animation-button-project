import React, { useState } from 'react';
import './AnimatedBtn.css';

const AnimatedBtn = () => {
  const [rippleStyle, setRippleStyle] = useState({});

  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    const x = event.clientX - button.offsetLeft - radius;
    const y = event.clientY - button.offsetTop - radius;

    setRippleStyle({
      width: `${diameter}px`,
      height: `${diameter}px`,
      top: `${y}px`,
      left: `${x}px`
    });

    button.appendChild(circle);
    circle.classList.add("ripple");
  };

  return (
    <>
    <button className="animated-button" onClick={createRipple}>
      Click Me
      <span className="ripple" style={rippleStyle}></span>
    </button>
    <div className='btn-container'>
    <button className='button-advanced'> Click Me</button>
    </div>
</>
  );
};

export default AnimatedBtn;
