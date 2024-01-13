import { useRef, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export const CustomParticles = () => {
  const count = 50;
  const sprite = useLoader(TextureLoader, "./disc.png");

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      let x = (Math.random() - 0.5) * 20;
      let y = (Math.random() - 0.5) * 20;
      let z = (Math.random() - 0.5) * 20;

      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, [count]);

  useFrame((state) => {
    const { clock } = state;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      points.current.geometry.attributes.position.array[i3] +=
        i3 % 2 === 0
          ? Math.cos(clock.elapsedTime / 10) * 0.005
          : Math.sin(clock.elapsedTime / 8) * 0.005;

      points.current.geometry.attributes.position.array[i3 + 1] +=
        i3 % 2 === 0
          ? Math.sin(clock.elapsedTime / 8) * 0.005
          : Math.cos(clock.elapsedTime / 10) * 0.005;

      points.current.geometry.attributes.position.array[i3 + 2] +=
        i3 % 2 === 0
          ? Math.cos(clock.elapsedTime / 10) * 0.005
          : Math.sin(clock.elapsedTime / 8) * 0.005;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  const points = useRef();
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={[174, 149, 199]}
        map={sprite}
        toneMapped={false}
        // sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};
