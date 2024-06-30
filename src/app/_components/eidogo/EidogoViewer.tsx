"use client";
import React from "react";
import { useEffect, useRef } from "react";

interface EidoGoViewerProps {
  sgf: string;
}

export default function EidoGoViewer({ sgf }: EidoGoViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      const div = document.createElement("div");
      div.className = "eidogo-player-auto";
      div.setAttribute("sgf", sgf);
      containerRef.current.appendChild(div);
    }
  }, [sgf]);

  return <div ref={containerRef}></div>;
}
