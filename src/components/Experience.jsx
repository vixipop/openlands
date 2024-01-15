import { OrbitControls, PositionalAudio, SpotLight } from "@react-three/drei";
import { Galaxy } from "./galaxy";
import { useRef, useMemo, useEffect } from "react";
import { Effects } from "./Effects";
import { CustomParticles } from "./Particles";
import { Case } from "./Case";

export const Experience = () => {
  // const audioRef = useRef();

  return (
    <>
      {/* <OrbitControls /> */}
      <CustomParticles />
      <fog attach={"fog"} color={"#7d3dab"} near={1} far={30} />
      <ambientLight intensity={1} />
      <pointLight color={"#3C1083"} intensity={20} position={[0, 5, 10]} />
      //Light indigo
      <directionalLight position={[5, 2, 2]} color={"#b580ff"} intensity={1} />
      //Dark blue
      <directionalLight position={[-5, 3, 4]} color={"#551cff"} intensity={3} />
      <SpotLight
        target-position={[0, 0, 13]}
        position={[0, 8, 13]}
        color={"#b580ff"}
        distance={8}
        angle={0.5}
        attenuation={8}
        anglePower={5} // Diffuse-cone anglePower (default: 5)
      />
      <Case />
      <PositionalAudio url="./background.mp3" distance={1} loop />
      <Galaxy />
      <Effects />
    </>
  );
};
