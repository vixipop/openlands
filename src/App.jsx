import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas frameloop="always" camera={{ fov: 70, position: [0, 2, 20] }}>
      <Experience />
    </Canvas>
  );
}

export default App;
