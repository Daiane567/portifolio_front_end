import React from "react";

const AnimatedSquare = ({ size = 8, duration = 10, delay = 0 }) => {
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const moveX = Math.random() * 20 - 10;
  const moveY = Math.random() * 20 - 10;

  return (
    <div
      className="absolute opacity-70"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        backgroundColor: "#34d399", // Verde esmeralda combinando com o projeto
        animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
        transform: `translate(${moveX}px, ${moveY}px)`,
        boxShadow: "0 0 8px #34d399, 0 0 16px #34d399", // leve brilho
      }}
    ></div>
  );
};

export default AnimatedSquare;
