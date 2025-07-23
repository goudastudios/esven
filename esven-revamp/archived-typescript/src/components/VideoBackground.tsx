import React from "react";

interface VideoBackgroundProps {
  children: React.ReactNode;
}

export function VideoBackground({ children }: VideoBackgroundProps) {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 min-h-full min-w-full object-cover brightness-75"
      >
        <source src="/assets/video/backgroundvideo.mp4" type="video/mp4" />
      </video>
      {/* Overlay content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
