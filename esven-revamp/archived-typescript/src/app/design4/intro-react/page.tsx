"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { VideoBackground } from "@/components/VideoBackground";
import { TypewriterOverlay } from "@/components/TypewriterOverlay";

const IntroPage: React.FC = () => {
  const router = useRouter();
  return (
    <VideoBackground>
      <TypewriterOverlay onEnter={() => router.push("/design4/landing")} />
    </VideoBackground>
  );
};

export default IntroPage;
