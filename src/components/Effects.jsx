import {
  Bloom,
  EffectComposer,
  Noise,
  ToneMapping,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
// console.log(Noise);

export const Effects = () => {
  return (
    <>
      <EffectComposer disableNormalPass>
        {/* <Noise premultiply blendFunction={BlendFunction.SOFT_LIGHT} /> */}
        <Bloom mipmapBlur luminanceThreshold={1.1} intensity={0.1} />
      </EffectComposer>
    </>
  );
};
