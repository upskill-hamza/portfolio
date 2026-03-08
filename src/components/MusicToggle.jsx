import { useRef, useState } from "react";

export default function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.volume = 0.3;
    }
    setPlaying(!playing);
  };

  const wavePath = "M 0 10 Q 5 0, 10 10 T 20 10 T 30 10 T 40 10 T 50 10 T 60 10";

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/bg-music.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="group fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-black/60 backdrop-blur-md rounded-full border border-cyan-500/20 shadow-lg hover:border-cyan-400/50 transition-all duration-300"
      >
        <div className="relative w-8 h-5 flex items-center justify-center overflow-hidden">
          <svg
            width="60"
            height="20"
            viewBox="0 0 60 20"
            className={`
              absolute left-0 text-cyan-400 transition-all duration-500 ease-in-out
              ${playing ? 'animate-sine-scroll scale-y-100 opacity-100' : 'scale-y-0 opacity-50 group-hover:scale-y-100 group-hover:opacity-100'}
            `}
          >
            <path
              d={wavePath}
              fill="transparent"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {!playing && (
            <div className="w-6 h-[2px] bg-cyan-400/40 rounded-full group-hover:opacity-0 transition-opacity duration-300" />
          )}
        </div>

        <style jsx>{`
          @keyframes sine-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-20px); }
          }
          .animate-sine-scroll {
            animation: sine-scroll 0.8s linear infinite;
          }
        `}</style>
      </button>
    </>
  );
}