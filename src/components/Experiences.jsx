import { useState } from "react";
import { useThree } from "@react-three/fiber"; // Import useThree to control the cursor
import { Environment, OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experiences = () => {
  const { gl } = useThree(); // Access the renderer to modify the cursor


  // Change cursor style when hovering over the Avatar
  const onPointerOver = () => {
    gl.domElement.style.cursor = "pointer"; // Change the cursor to pointer
  };

  const onPointerOut = () => {
    gl.domElement.style.cursor = "default"; // Revert the cursor to default
  };

  return (
    <>
      <OrbitControls />
      <Avatar
        position={[0, -2, 2]}
        scale={2}
        onPointerOver={onPointerOver}  // Handle mouse hover
        onPointerOut={onPointerOut}    // Handle mouse leave
      />
      <Environment preset="sunset" />
    </>
  );
};
