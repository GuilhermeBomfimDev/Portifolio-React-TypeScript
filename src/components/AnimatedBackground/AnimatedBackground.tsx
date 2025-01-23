import React from "react";
import "./AnimatedBackground.scss";  // Certifique-se de que o CSS está correto

const AnimatedBackground: React.FC = () => {
  return (
    <div className="lines">
      <div className="line one"></div>
      <div className="line two"></div>
    </div>
  );
};

export default AnimatedBackground;
