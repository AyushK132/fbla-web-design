"use client";

import { useEffect, useState } from "react";

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 900;

export default function Hero() {
  const [stage, setStage] = useState(0);
  const [scale, setScale] = useState(1);

  /* RESPONSIVE SCALE */
  useEffect(() => {
    const updateScale = () => {
      const scaleX = window.innerWidth / DESIGN_WIDTH;
      const scaleY = window.innerHeight / DESIGN_HEIGHT;
      setScale(Math.min(scaleX, scaleY));
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  /* TIMELINE */
  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 800);
    const t2 = setTimeout(() => setStage(2), 1600);
    const t3 = setTimeout(() => setStage(3), 2600);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  return (
    <main className="h-screen w-screen overflow-hidden bg-[#58CC02] flex items-center justify-center relative">
      {/* SOFT PATTERN */}
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[size:32px_32px]" />

      {/* SCALE CONTAINER */}
      <div
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "center",
        }}
        className="relative text-white"
      >
        {/* TEXT */}
        <div
          className={`
            absolute left-20 top-1/2 -translate-y-1/2
            transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]
            ${stage >= 3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-14"}
          `}
        >
          <h1 className="text-6xl font-extrabold leading-tight">
            Learn a language. <br /> One streak at a time.
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-md">
            Practice daily. Speak confidently. Have fun doing it.
          </p>

          <button className="mt-8 px-6 py-3 rounded-xl bg-white text-[#58CC02] font-bold text-lg shadow-lg hover:scale-105 transition">
            Get Started
          </button>
        </div>

        {/* CARD */}
        <div
          className={`
            absolute left-1/2
            transition-all duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)] scale-200
            ${
              stage === 0
                ? "top-full -translate-x-1/2"
                : stage === 1
                ? "top-1/2 -translate-x-1/2 -translate-y-1/2"
                : "top-[47%] translate-x-40 -translate-y-1/2"
            }
          `}
        >
          <div className="relative">
            {/* GLOW */}
            {stage >= 3 && (
              <div className="absolute inset-0 rounded-2xl bg-white/30 blur-xl animate-pulse" />
            )}

            {/* CARD BODY */}
            {/* CARD BODY */}
<div className="relative h-56 w-80 rounded-3xl bg-gradient-to-br from-white via-[#f7ffe9] to-[#eaffc7] text-black overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.25)]">

{/* TOP BAR */}
<div className="absolute top-4 left-4 right-4 flex items-center justify-between">
  {/* Language */}
  <div className="px-3 py-1 rounded-full bg-white shadow text-xs font-semibold">
    🇪🇸 Spanish
  </div>

  {/* Speaker */}
  <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-lg cursor-pointer">
    🔊
  </div>
</div>

{/* PROGRESS DOTS */}
<div className="absolute top-16 left-1/2 -translate-x-1/2 flex gap-2">
  {[0, 1, 2].map((i) => (
    <div
      key={i}
      className={`h-2 w-2 rounded-full ${
        stage >= i + 1 ? "bg-[#58CC02]" : "bg-gray-300"
      }`}
    />
  ))}
</div>

{/* WORD / TRANSLATION */}
<div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
  {/* FOREIGN WORD */}
  <div
    className={`
      transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]
      ${
        stage >= 3
          ? "opacity-0 scale-110 blur-sm"
          : stage >= 2
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 blur-sm"
      }
    `}
  >
    <p className="text-sm text-gray-500 mb-2">Translate this word</p>
    <h2 className="text-5xl font-extrabold tracking-tight">Hola</h2>
  </div>

  {/* TRANSLATION */}
  <div
    className={`
      absolute transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]
      ${
        stage >= 3
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 blur-sm"
      }
    `}
  >
    <h2 className="text-4xl font-extrabold text-[#58CC02]">Hello</h2>
    <p className="mt-2 text-sm text-gray-600">
      “Hola” means hello in Spanish
    </p>
  </div>
</div>

{/* CHECKMARK */}
{stage >= 3 && (
  <div className="absolute bottom-6 left-6 flex items-center gap-2">
    <div className="w-8 h-8 rounded-full bg-[#58CC02] text-white flex items-center justify-center font-bold">
      ✓
    </div>
    <span className="text-sm font-semibold text-gray-700">
      Correct
    </span>
  </div>
)}

{/* XP BADGE */}
{stage >= 3 && (
  <div className="absolute bottom-6 right-6 px-3 py-1 rounded-full bg-[#58CC02] text-white text-sm font-bold shadow">
    +15 XP
  </div>
)}

{/* SOFT INNER GLOW */}
<div className="absolute inset-0 rounded-3xl ring-1 ring-white/60 pointer-events-none" />
</div>

          </div>
        </div>
      </div>
    </main>
  );
}
