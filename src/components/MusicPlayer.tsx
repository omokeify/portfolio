import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import MagneticButton from './MagneticButton';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const location = useLocation();
  const isWeb3 = location.pathname.startsWith("/web3");

  const web2Music = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3";
  const web3Music = "https://cdn.pixabay.com/download/audio/2022/02/07/audio_671b20ceb0.mp3?filename=just-relax-11157.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      
      // Force reload the new source
      audioRef.current.load();
      
      // If it was already playing, or we want to attempt autoplay
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Autoplay prevented:", error);
            setIsPlaying(false);
          });
        }
      }
    }
  }, [isWeb3]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <audio
        ref={audioRef}
        loop
        autoPlay
        src={isWeb3 ? web3Music : web2Music}
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
