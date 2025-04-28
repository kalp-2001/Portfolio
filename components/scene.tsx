"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, useGLTF } from "@react-three/drei"
import { useSections } from "./sections-context"
import type * as THREE from "three"

// Disable auto-fetch of GLB files to prevent unnecessary network requests
useGLTF.preload = () => {}

export default function Scene() {
  const { section } = useSections()
  const groupRef = useRef<THREE.Group>(null)
  const sphereRef = useRef<THREE.Mesh>(null)

  // Simple animation for background elements
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.1
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.05
      sphereRef.current.rotation.z = clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group>
      {/* Background elements */}
      <group ref={groupRef}>
        {/* Reduced number of particles for better performance */}
        {Array.from({ length: 10 }).map((_, i) => (
          <mesh key={i} position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 5]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={0.5}
              transparent
              opacity={0.7}
            />
          </mesh>
        ))}
      </group>

      {/* Main sphere with simpler material */}
      <mesh ref={sphereRef} position={[0, 0, -2]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="#f0f0f0" transparent opacity={0.6} />
      </mesh>

      {/* 3D Text - only show on home section */}
      {section === "home" && (
        <Text
          position={[0, 0, 0]}
          fontSize={0.5}
          color="#333333"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter_Bold.json"
        >
          Kalpana K
        </Text>
      )}
    </group>
  )
}
