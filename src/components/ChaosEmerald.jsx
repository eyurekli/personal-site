import React from 'react';

export default function ChaosEmerald({ color, onClick }) {
  const emeraldStyle = {
    animation: `float ${Math.random() * 5 + 4}s ease-in-out infinite, 
                moveX ${Math.random() * 10 + 7}s ease-in-out infinite,
                moveY ${Math.random() * 10 + 7}s ease-in-out infinite`,
  };

  return (
    <div
      className="chaos-emerald"
      style={emeraldStyle}
      onClick={onClick}
    >
        <img 
            src={`/emeralds/emerald_${color}.png`} 
            alt={`${color} Chaos Emerald`} 
            className="emerald-image"
        />
    </div>
  );
}
