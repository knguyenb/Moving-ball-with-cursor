import React, { useEffect, useRef } from "react";

function Animations() {

  const ballRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;

    const handleMouseMove = (e) => {
      // set position relative to cursor - triggers layout recalculatiosn (expensive)
      ball.style.left = `${e.clientX}px`;
      ball.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // cleanup on unmount 
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="container">
      <div className="ball" ref={ballRef}></div>
    </div>
  );
}

export default Animations;
