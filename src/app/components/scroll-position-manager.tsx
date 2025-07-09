"use client";

import { useEffect, ReactNode } from "react";

export default function ScrollPositionManager({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Restore scroll position with a slight delay to ensure content is rendered
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedPosition));
          // Clear the saved position after restoring
          sessionStorage.removeItem('scrollPosition');
        }, 100); // Small delay to ensure content is rendered
      }
    };

    // Restore position when component mounts
    restoreScrollPosition();

    // Save position before unload/refresh
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return <>{children}</>;
}