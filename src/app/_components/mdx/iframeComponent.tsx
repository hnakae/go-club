"use client";

import React, { useEffect, useRef } from "react";

const IframeComponent: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const handleIframeLoad = () => {
      if (iframeRef.current) {
        try {
          const iframeDocument = iframeRef.current.contentDocument;
          if (iframeDocument) {
            const rightCol = iframeDocument.querySelector(".right-col");
            if (rightCol instanceof HTMLElement) {
              rightCol.style.display = "none";
            }
          }
        } catch (error) {
          console.error(
            "Cannot access iframe content due to cross-origin restrictions:",
            error
          );
        }
      }
    };

    const currentIframe = iframeRef.current;
    if (currentIframe) {
      currentIframe.addEventListener("load", handleIframeLoad);
    }

    return () => {
      if (currentIframe) {
        currentIframe.removeEventListener("load", handleIframeLoad);
      }
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="https://online-go.com/game/65736648"
      width="800"
      height="600"
      //   allowTransparency={true}
      scrolling="no"
      frameBorder="0"
      className="rounded-md"
    />
  );
};

export default IframeComponent;
