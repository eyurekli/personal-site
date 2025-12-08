import React, { useState } from 'react';

export default function ChaosEmerald({ color, onClick, ariaLabel }) {
  // Define possible starting positions (corners and edges)
  const startingPositions = [
    { top: 10, left: 10 },   // Top left
    { top: 10, left: 90 },   // Top right
    { top: 90, left: 10 },   // Bottom left
    { top: 90, left: 90 },   // Bottom right
    { top: 10, left: 50 },   // Top middle
    { top: 90, left: 50 },   // Bottom middle
    { top: 50, left: 10 },   // Left middle
    { top: 50, left: 90 },   // Right middle
  ];

  // Randomly select a starting position, end position, and animation durations together to keep them stable
  const [emeraldConfig] = useState(() => {
    const startPosition = startingPositions[Math.floor(Math.random() * startingPositions.length)];
    
    // Calculate movement range - move to opposite area of the screen
    // If starting in top half, move to bottom half (and vice versa)
    // If starting on left, move to right (and vice versa)
    const endTop = startPosition.top < 50 
      ? 70 + Math.random() * 20  // Move to bottom area (70-90%)
      : 10 + Math.random() * 20;  // Move to top area (10-30%)
    const endLeft = startPosition.left < 50 
      ? 70 + Math.random() * 20  // Move to right area (70-90%)
      : 10 + Math.random() * 20;  // Move to left area (10-30%)
    
    // Calculate animation durations once and keep them stable
    const floatDuration = Math.random() * 5 + 4;  // 4-9 seconds
    const moveXDuration = Math.random() * 10 + 7; // 7-17 seconds
    const moveYDuration = Math.random() * 10 + 7;   // 7-17 seconds
    
    return { 
      startPosition, 
      endTop, 
      endLeft,
      floatDuration,
      moveXDuration,
      moveYDuration
    };
  });

  const { startPosition, endTop, endLeft, floatDuration, moveXDuration, moveYDuration } = emeraldConfig;

  const emeraldStyle = {
    '--start-top': `${startPosition.top}%`,
    '--start-left': `${startPosition.left}%`,
    '--end-top': `${endTop}%`,
    '--end-left': `${endLeft}%`,
    top: `${startPosition.top}%`,
    left: `${startPosition.left}%`,
    animation: `float ${floatDuration}s ease-in-out infinite, 
                moveX ${moveXDuration}s ease-in-out infinite,
                moveY ${moveYDuration}s ease-in-out infinite`,
  };

  return (
    <div
      className="chaos-emerald"
      style={emeraldStyle}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={ariaLabel || `Click to collect the ${color} Chaos Emerald`}
    >
        <img 
            src={`/emeralds/emerald_${color}.png`} 
            alt={`${color} Chaos Emerald`} 
            className="emerald-image"
            loading="eager"
            width="75"
            height="75"
        />
    </div>
  );
}
