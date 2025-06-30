import { Suspense, useEffect, useState } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Canvas } from "@react-three/fiber";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// const ComputersCanvas = () =>{
//   const [isMobile , setIsMobile] = useState(false);

//   useEffect(() =>{
//     const mediaQuery = window.matchMedia('(max-width: 500px)');
//     setIsMobile(mediaQuery.matches);

//     const handleMediaQueryChange = (e) =>{
//       setIsMobile(e.matches);
//     };

//     mediaQuery.addEventListener('change', handleMediaQueryChange);
//     return() => {
//       mediaQuery.removeEventListener('change', handleMediaQueryChange);
//     }
//   },[]);

//   return (
//     <Canvas
//      frameloop="demand"
//      shadows
//      dpr={[1, 2]}
//      camera={{ position: [20, 3, 5], fov: 25 }}
//      gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//          />
//          <Computers isMobile={isMobile}/>
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   )
// }

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (isMobile) {
    // Render a static fallback image for mobile
    return (
      <div className="w-full h-full flex items-center justify-center bg-black-100 rounded-2xl">
        <img
          src="/static/computer-fallback.png"
          alt="Computer"
          className="w-40 h-40 object-contain"
        />
      </div>
    );
  }

  // ...existing Canvas code...
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
