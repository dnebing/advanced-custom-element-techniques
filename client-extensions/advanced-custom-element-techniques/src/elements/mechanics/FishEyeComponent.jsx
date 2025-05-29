import React, { useRef, useEffect, useState } from 'react';
import './FishEyeComponent.css';

const FishEyeComponent = ({ children, maxScale = 2, influenceRadius = 150 }) => {
  const containerRef = useRef(null);
  const [scales, setScales] = useState([]);

  useEffect(() => {
    const container = containerRef.current;
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;

      const newScales = Array.from(container.children).map((child) => {
        const childRect = child.getBoundingClientRect();
        const childCenter = childRect.left + childRect.width / 2 - rect.left;
        const distance = Math.abs(mouseX - childCenter);
        const scale = Math.max(1, maxScale - (distance / influenceRadius) * (maxScale - 1));
        return Math.min(scale, maxScale);
      });

      setScales(newScales);
    };

    const handleMouseLeave = () => {
      setScales(Array.from({ length: React.Children.count(children) }).fill(1));
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [children, maxScale, influenceRadius]);

  return (
    <div className="fisheye-container" ref={containerRef}>
      {React.Children.map(children, (child, index) => (
        <div
          className="fisheye-item"
          style={{
            transform: `scale(${scales[index] || 1})`,
            zIndex: Math.round(scales[index] || 1),
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default FishEyeComponent;
