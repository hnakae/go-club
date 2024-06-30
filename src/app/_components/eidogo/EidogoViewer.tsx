"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";
import "/public/player/css/player.css";

interface EidoGoViewerProps {
  sgf: string;
}

const EidoGoViewer: React.FC<EidoGoViewerProps> = ({ sgf }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (isScriptLoaded && containerRef.current && (window as any).eidogo) {
      const timer = setTimeout(() => {
        console.log("Initializing EidoGo player");
        try {
          new (window as any).eidogo.Player({
            container: containerRef.current,
            sgf: sgf,
            theme: "compact",
            // loadPath: "/player/",
            mode: "play",
          });
          console.log("EidoGo player initialized successfully");
        } catch (error) {
          console.error("Error initializing EidoGo player:", error);
        }
      }, 100); // 100ms delay

      return () => clearTimeout(timer);
    }
  }, [isScriptLoaded, sgf]);

  return (
    <div style={{ position: "relative", zIndex: 1000 }}>
      <Script
        src="/player/js/all.compressed.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("EidoGo script loaded", (window as any).eidogo);
          setIsScriptLoaded(true);
        }}
      />
      <div>EidoGo Viewer should appear below:</div>
      <div
        ref={containerRef}
        style={{
          width: "400px",
          height: "400px",
          border: "1px solid black",
          position: "relative",
          zIndex: 1000,
        }}
      ></div>
    </div>
  );
};

export default EidoGoViewer;
