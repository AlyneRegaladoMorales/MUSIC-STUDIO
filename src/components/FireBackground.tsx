import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import type { Engine } from "tsparticles-engine";

export default function FireBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFirePreset(engine);
  }, []);

  return (
<Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    background: { color: "#000" },
    particles: {
      number: { value: 200 },
      size: { value: 2 },
      move: { enable: true, speed: 3},
      opacity: { value: 0.5 },
color: {
        value: ["#ffffff", "#E0DFDD", "#999999"], 
      },    },
    fullScreen: { enable: true, zIndex: -1 },
  }}
/>


  );
}
