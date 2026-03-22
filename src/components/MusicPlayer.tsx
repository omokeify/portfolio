import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import MagneticButton from './MagneticButton';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const location = useLocation();
  
  // Logic to determine if we are in a Web3 context
  const web3ProjectSlugs = ["harapay", "arcle", "ai-sales-inbox"];
  const isWeb3Path = location.pathname.startsWith("/web3");
  const isWeb3Project = location.pathname.startsWith("/project/") && 
                        web3ProjectSlugs.some(slug => location.pathname.includes(slug));
  
  const isWeb3 = isWeb3Path || isWeb3Project;

  const web2Music = "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3";
  const web3Music = "https://cdn.pixabay.com/audio/2026/02/20/audio_91db1f3017.mp3";

  useEffect(() => {
    // Attempt to autoplay on ANY user interaction
    const startAutoplay = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          console.log("Music session started by interaction");
        }).catch(err => {
          console.warn("Playback blocked by browser policy even after interaction:", err);
        });
      }
      // Cleanup listeners immediately to prevent multiple triggers
      window.removeEventListener('pointerdown', startAutoplay);
      window.removeEventListener('keydown', startAutoplay);
    };

    window.addEventListener('pointerdown', startAutoplay);
    window.addEventListener('touchstart', startAutoplay);
    window.addEventListener('click', startAutoplay);
    window.addEventListener('keydown', startAutoplay);

    return () => {
      window.removeEventListener('pointerdown', startAutoplay);
      window.removeEventListener('touchstart', startAutoplay);
      window.removeEventListener('click', startAutoplay);
      window.removeEventListener('keydown', startAutoplay);
    };
  }, []);

  useEffect(() => {
    const handleDuck = () => {
      if (audioRef.current) audioRef.current.volume = 0.05;
    };
    const handleUnduck = () => {
      if (audioRef.current) audioRef.current.volume = 0.3;
    };

    window.addEventListener('music-duck', handleDuck);
    window.addEventListener('music-unduck', handleUnduck);

    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      
      const currentSource = isWeb3 ? web3Music : web2Music;
      
      if (audioRef.current.src !== currentSource) {
        audioRef.current.src = currentSource;
        audioRef.current.load();
        
        if (isPlaying) {
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.log("Playback interrupted or blocked:", error);
              setIsPlaying(false);
            });
          }
        }
      }
    }

    return () => {
      window.removeEventListener('music-duck', handleDuck);
      window.removeEventListener('music-unduck', handleUnduck);
    };
  }, [isWeb3, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.error("Play failed:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <audio
        ref={audioRef}
        loop
      />
      <MagneticButton>
        <button
          onClick={togglePlay}
          className="w-14 h-14 rounded-full bg-sec text-main flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          aria-label="Toggle Music"
        >
          <div className="flex items-center justify-center gap-[3px] h-5 w-5">
            <motion.div
              animate={isPlaying ? { height: ["20%", "80%", "20%"] } : { height: "20%" }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              className="w-[3px] bg-current rounded-full"
            />
            <motion.div
              animate={isPlaying ? { height: ["40%", "100%", "40%"] } : { height: "40%" }}
              transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.1 }}
              className="w-[3px] bg-current rounded-full"
            />
            <motion.div
              animate={isPlaying ? { height: ["30%", "70%", "30%"] } : { height: "30%" }}
              transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut", delay: 0.2 }}
              className="w-[3px] bg-current rounded-full"
            />
            <motion.div
              animate={isPlaying ? { height: ["50%", "90%", "50%"] } : { height: "50%" }}
              transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut", delay: 0.3 }}
              className="w-[3px] bg-current rounded-full"
            />
          </div>
        </button>
      </MagneticButton>
    </div>
  );
}
