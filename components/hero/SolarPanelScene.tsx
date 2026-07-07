"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

/* ------------------------------------------------------------------ *
 * Concept: "The panel that turns toward the sun."
 *
 * A single sleek, glossy solar panel floats in warm light. It idles with a
 * gentle bob, tilts toward the cursor (parallax), and lays back as you scroll
 * — while a warm sun light sweeps a specular highlight across its cells. A
 * faint drift of energy "motes" rises around it. Everything is built from
 * cheap primitives (one instanced grid of cells + a few meshes) and the warm
 * glow is the existing CSS backdrop showing through a transparent canvas, so
 * there are no heavy textures and it stays light on mobile.
 * ------------------------------------------------------------------ */

const COLS = 6;
const ROWS = 10;
const CELL = 0.46;
const GAP = 0.06;
const PANEL_W = COLS * CELL + (COLS - 1) * GAP;
const PANEL_H = ROWS * CELL + (ROWS - 1) * GAP;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Shared, normalized pointer + scroll signals (cheap, ref-based). */
function useInputSignals() {
  const pointer = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onScroll = () => {
      // 0 at top of page, ~1 once the hero has scrolled a viewport away.
      scroll.current = Math.min(1, window.scrollY / window.innerHeight);
    };
    onScroll();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { pointer, scroll };
}

/** The instanced grid of photovoltaic cells. 60 cells, one draw call. */
function PanelCells() {
  const ref = useRef<THREE.InstancedMesh>(null);

  useEffect(() => {
    const mesh = ref.current;
    if (!mesh) return;
    const dummy = new THREE.Object3D();
    let i = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = -PANEL_W / 2 + CELL / 2 + c * (CELL + GAP);
        const y = PANEL_H / 2 - CELL / 2 - r * (CELL + GAP);
        dummy.position.set(x, y, 0.04);
        dummy.updateMatrix();
        mesh.setMatrixAt(i++, dummy.matrix);
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
  }, []);

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, COLS * ROWS]}>
      <boxGeometry args={[CELL, CELL, 0.04]} />
      {/* Deep indigo silicon — glossy + metallic so the warm light reads as a
          moving specular streak across the array. */}
      <meshStandardMaterial
        color="#0c1230"
        metalness={0.85}
        roughness={0.28}
        emissive="#ff7d0a"
        emissiveIntensity={0.04}
      />
    </instancedMesh>
  );
}

/** Frame + backing slab + thin warm edge that ties it to the brand. */
function PanelBody() {
  return (
    <group>
      {/* Dark backing slab */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[PANEL_W + 0.22, PANEL_H + 0.22, 0.08]} />
        <meshStandardMaterial color="#15151c" metalness={0.6} roughness={0.5} />
      </mesh>
      {/* Glowing warm rim just behind the slab */}
      <mesh position={[0, 0, -0.06]}>
        <boxGeometry args={[PANEL_W + 0.42, PANEL_H + 0.42, 0.04]} />
        <meshStandardMaterial
          color="#ff7d0a"
          emissive="#ff9d33"
          emissiveIntensity={0.7}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
    </group>
  );
}

/** The warm sun: an emissive orb + a moving key light that sweeps highlights. */
function SunLight() {
  const key = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (key.current) {
      // Sweep the key light in a slow arc so a highlight glides over the cells.
      key.current.position.x = Math.sin(t * 0.35) * 4.5;
      key.current.position.y = 2.2 + Math.cos(t * 0.28) * 1.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.35} color="#ffd9a8" />
      <hemisphereLight args={["#ffb066", "#0a0a0d", 0.5]} />
      <pointLight
        ref={key}
        position={[3.5, 3, 4]}
        intensity={140}
        distance={30}
        decay={2}
        color="#ffb454"
      />
      {/* Cool back-fill for separation */}
      <directionalLight position={[-4, 1, -3]} intensity={0.6} color="#9fb6ff" />
      {/* The sun orb itself, up and behind the panel */}
      <mesh position={[2.6, 2.4, -2.2]}>
        <sphereGeometry args={[1.15, 32, 32]} />
        <meshBasicMaterial color="#ffd089" />
      </mesh>
    </>
  );
}

/** The whole panel rig: idle float + pointer parallax + scroll recline. */
function PanelRig({
  pointer,
  scroll,
}: {
  pointer: React.MutableRefObject<{ x: number; y: number }>;
  scroll: React.MutableRefObject<number>;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const s = scroll.current;

    // Base resting tilt + gentle idle motion.
    const idleX = Math.sin(t * 0.5) * 0.04;
    const idleY = Math.cos(t * 0.4) * 0.05;

    // Pointer parallax (eased toward the target each frame).
    const targetX = -0.18 + idleX + pointer.current.y * 0.16 + s * 0.5;
    const targetY = 0.32 + idleY + pointer.current.x * 0.28;

    g.rotation.x = lerp(g.rotation.x, targetX, 0.06);
    g.rotation.y = lerp(g.rotation.y, targetY, 0.06);
    g.rotation.z = lerp(g.rotation.z, -0.08 + pointer.current.x * 0.03, 0.06);

    // Float + recede slightly as the page scrolls away.
    g.position.y = lerp(g.position.y, Math.sin(t * 0.6) * 0.12 - s * 1.1, 0.08);
    g.position.z = lerp(g.position.z, -s * 1.5, 0.08);
  });

  return (
    <group ref={group} rotation={[-0.18, 0.32, -0.08]}>
      <PanelBody />
      <PanelCells />
    </group>
  );
}

function Scene() {
  const { pointer, scroll } = useInputSignals();
  return (
    <>
      <SunLight />
      <PanelRig pointer={pointer} scroll={scroll} />
      {/* Rising energy motes — subtle, low count for perf. */}
      <Sparkles
        count={34}
        scale={[9, 6, 4]}
        size={2.2}
        speed={0.3}
        opacity={0.5}
        color="#ffc16d"
      />
    </>
  );
}

/**
 * Pauses rendering when the hero is offscreen (saves battery), and caps the
 * device pixel ratio so it stays smooth on high-DPI phones.
 */
export default function SolarPanelScene() {
  const [active, setActive] = useState(true);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const dpr = useMemo<[number, number]>(() => [1, 1.6], []);

  return (
    <div ref={wrapRef} className="h-full w-full">
      <Canvas
        dpr={dpr}
        frameloop={active ? "always" : "never"}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 7], fov: 38 }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
