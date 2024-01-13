import { OrbitControls } from "@react-three/drei";
import { Galaxy } from "./galaxy";
import { useRef, useMemo } from "react";
import { Effects } from "./Effects";
import { CustomParticles } from "./Particles";
import { Case } from "./Case";

export const Experience = () => {
  const pointLight1 = useRef();
  const dirLight1 = useRef();
  const dirLight2 = useRef();
  // useHelper(pointLight1, PointLightHelper, 1, "white");
  // useHelper(dirLight1, DirectionalLightHelper, 1, "white");
  // useHelper(dirLight2, DirectionalLightHelper, 1, "white");
  return (
    <>
      <OrbitControls />
      <CustomParticles />
      <fog attach={"fog"} color={"#7d3dab"} near={2} far={25} />
      <ambientLight intensity={1} />
      <pointLight
        color={"#3C1083"}
        intensity={20}
        ref={pointLight1}
        position={[0, 5, 10]}
      />
      //Light indigo
      <directionalLight
        position={[5, 2, 2]}
        color={"#b580ff"}
        intensity={1}
        ref={dirLight1}
      />
      //Dark blue
      <directionalLight
        position={[-5, 3, 4]}
        color={"#551cff"}
        intensity={3}
        ref={dirLight2}
      />
      <Case />
      <Galaxy />
      <Effects />
    </>
  );
};
