import * as THREE from "three";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ReinhardToneMapping;
document.body.appendChild(renderer.domElement);

//Lights
const light = new THREE.AmbientLight();
scene.add(light);
//Model
//Draco Loader
const dracoLoader = new DRACOLoader();
const loader = new GLTFLoader();

dracoLoader.setDecoderPath(
  "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
);
dracoLoader.setDecoderConfig({ type: "js" });

loader.setDRACOLoader(dracoLoader);

loader.load("/hybrid_galaxies.glb", function (gltf) {
  const model = gltf.scene;
  scene.add(model);
});

// Post Processing
const composer = new EffectComposer(renderer);

const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

const bloomPass = new UnrealBloomPass();
composer.addPass(bloomPass);

const outputPass = new OutputPass();
composer.addPass(outputPass);

// Animation function
const animate = () => {
  requestAnimationFrame(animate);

  // Render the scene
  composer.render();
};

// Run the animation
animate();
