import React, { useEffect, useRef } from "react";
import * as THREE from "three";

import WAVES from "vanta/dist/vanta.waves.min.js";

const Waves = ({ children }) => {
  const vantaRef = useRef(null);
  useEffect(() => {
    const vantaEffect = WAVES({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x12343b,
    });
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <div
      style={{ overflowX: "hidden", overflowY: "hidden", touchAction: "none" }}
    >
      <div style={{ height: "100vh", width: "100vw" }} ref={vantaRef}>
        {children}
      </div>
    </div>
  );
};

export default Waves;
