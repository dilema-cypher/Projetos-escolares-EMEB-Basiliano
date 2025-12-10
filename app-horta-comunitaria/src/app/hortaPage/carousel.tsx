"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const images = [
  "/imgs/horta-img/tomates.jpeg",
  "/imgs/horta-img/projeto-1.jpeg",
  "/imgs/horta-img/projeto-2.jpeg",
  "/imgs/horta-img/projeto-3.jpeg",
  "/imgs/horta-img/projeto-4.jpeg",
  "/imgs/horta-img/projeto-5.jpeg",
];

export default function StackCarousel() {
  const total = images.length;

  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Evita mismatch de hidratação
  useEffect(() => {
    setMounted(true);
  }, []);

  // ---------------------- RESPONSIVIDADE ----------------------
  const [viewport, setViewport] = useState({
    width: 0,
    visibleRange: 0,
    gap: 0,
    baseScale: 0.9,
  });

  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;

      if (w < 640) {
        setViewport({ width: w, visibleRange: 0, gap: 0, baseScale: 0.95 });
      } else if (w < 1024) {
        setViewport({ width: w, visibleRange: 1, gap: 120, baseScale: 0.95 });
      } else if (w < 1300) {
        setViewport({ width: w, visibleRange: 1, gap: 160, baseScale: 1 });
      } else {
        setViewport({ width: w, visibleRange: 2, gap: 220, baseScale: 1 });
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ---------------------- FUNÇÕES AUXILIARES ----------------------
  const clampIndex = (i: number) => ((i % total) + total) % total;
  const next = () => setActive((s) => clampIndex(s + 1));
  const prev = () => setActive((s) => clampIndex(s - 1));

  const visibleCards = useMemo(() => {
    const arr: { idx: number; rel: number }[] = [];
    for (let rel = -viewport.visibleRange; rel <= viewport.visibleRange; rel++) {
      arr.push({ idx: clampIndex(active + rel), rel });
    }
    return arr;
  }, [active, viewport.visibleRange]);

  const CARD_W = 288;
  const CARD_H = 550;

  // ---------------------- RETURN ÚNICO ----------------------
  return (
    <div className="w-full flex flex-col items-center pt-10 pb-6">

      {/* ---------------- SKELETON (SEM QUEBRAR HOOKS) ---------------- */}
      {!mounted && (
        <div className="w-full flex justify-center items-center h-[580px]">
          <div className="w-[288px] h-[550px] bg-gray-200 rounded-3xl shadow-xl animate-pulse" />
        </div>
      )}

      {/* Só renderiza o carrossel quando mount = true */}
      {mounted && (
        <>
          <div className="relative w-full max-w-[1200px] xl:max-w-[1400px] flex items-center justify-center">

            {/* BOTÃO ESQUERDO */}
            <button
              onClick={prev}
              className="absolute left-1 sm:-left-3 md:-left-6 xl:-left-10 
              z-40 w-10 h-10 md:w-12 md:h-12 rounded-full 
              flex items-center justify-center hover:scale-110 transition shadow-lg cursor-pointer bg-linear-to-r from-lime-400 to-lime-500"
              
            >
              <svg width="22" height="22" stroke="white" strokeWidth="2">
                <path d="M14 4 L6 11 L14 18" fill="none" />
              </svg>
            </button>

            {/* ÁREA DO CARROSSEL */}
            <div className="relative h-[580px] flex items-center justify-center w-full overflow-visible">
              <div className="relative w-full flex justify-center items-center h-full">

                {/* STACK DE CARDS */}
                {visibleCards.map(({ idx, rel }) => {
                  const abs = Math.abs(rel);

                  let scale = viewport.baseScale;
                  let opacity = 1;
                  let zIndex = 30;
                  let translateY = 0;

                  if (abs === 1) {
                    scale *= 0.85;
                    opacity = 0.7;
                    zIndex = 20;
                    translateY = 16;
                  } else if (abs === 2) {
                    scale *= 0.75;
                    opacity = 0.4;
                    zIndex = 10;
                    translateY = 32;
                  }

                  const translateX = rel * viewport.gap;
                  const isActive = rel === 0;

                  return (
                    <div
                      key={idx + "_" + rel}
                      className="absolute transition-all duration-500"
                      style={{
                        width: CARD_W,
                        height: CARD_H,
                        transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                        opacity,
                        zIndex,
                        left: "50%",
                        marginLeft: -CARD_W / 2,
                      }}
                    >
                      <div
                        className="relative w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden"
                        onMouseEnter={() => isActive && setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                        onClick={() => isActive && setHovering((p) => !p)}
                      >
                        {/* BADGE */}
                        <div className="absolute top-3 left-3 px-2 py-1 bg-black/50 backdrop-blur text-white text-sm rounded-md z-30">
                          {idx + 1}/{total}
                        </div>

                        {/* IMAGE */}
                        <img
                          src={images[idx]}
                          alt="slide"
                          loading="eager"
                          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                        />

                        {/* OVERLAY */}
                        {isActive && (
                          <div
                            className={`absolute inset-0 transition-opacity duration-300  ${
                              hovering ? "opacity-100" : "opacity-0"
                            }`}
                            style={{
                              background:
                                "linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))",
                            }}
                          >
                            
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* BOTÃO DIREITO */}
            <button
              onClick={next}
              className="absolute right-1 sm:-right-3 md:-right-6 xl:-right-10 
              z-40 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center 
              hover:scale-110 transition shadow-lg cursor-pointer bg-linear-to-r from-lime-400 to-lime-500"
             
            >
              <svg width="22" height="22" stroke="white" strokeWidth="2">
                <path d="M8 4 L16 11 L8 18" fill="none" />
              </svg>
            </button>
          </div>

          {/* BARRA DE PROGRESSO */}
          <div className="flex gap-3 mt-6">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === active ? "w-20" : "w-10"
                }`}
                style={{
                  background:
                    i === active
                      ? "linear-gradient(to right, #a3e635, #84cc16)" // lime-400 → lime-500
                      : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
