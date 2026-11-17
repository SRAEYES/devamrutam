"use client";

import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.18;
    }

    return () => {
      audio?.pause();
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Music playback failed:", error);
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/devamrutam-ambient.mp3"
        loop
        preload="none"
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={
          isPlaying ? "Turn background music off" : "Turn background music on"
        }
        aria-pressed={isPlaying}
        title={isPlaying ? "Turn music off" : "Play devotional music"}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2
          rounded-full border border-[#D8BC83]/50
          bg-[#173D32] px-4 py-3 text-[#F5EBD9]
          shadow-lg transition-all duration-300
          hover:bg-[#245747] hover:shadow-xl
          focus-visible:outline focus-visible:outline-2
          focus-visible:outline-offset-4 focus-visible:outline-[#B68A42]"
      >
        {isPlaying ? (
          <Volume2 size={19} className="text-[#D8BC83]" />
        ) : (
          <VolumeX size={19} className="text-[#D8BC83]" />
        )}

        <span className="text-xs font-semibold tracking-wide">
          {isPlaying ? "Music On" : "Music Off"}
        </span>
      </button>
    </>
  );
}
