import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import Entrance from './components/Entrance';
import InvitationScene from './components/InvitationScene';
import InviteDetails from './components/InviteDetails';
import { PHOTOS } from './config';

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

function App() {
  const [stage, setStage] = useState('entrance'); // entrance | invitation | details
  const [introPlayed, setIntroPlayed] = useState(false);
  const [fontsReady, setFontsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Avoid a flash of fallback script font on the first screen
  useEffect(() => {
    let active = true;
    const timeout = new Promise((r) => setTimeout(r, 2000));
    Promise.race([document.fonts.ready, timeout]).then(() => active && setFontsReady(true));
    return () => {
      active = false;
    };
  }, []);

  // Warm the polaroid photo while the guest is on the entrance screen
  useEffect(() => {
    PHOTOS.forEach((p) => {
      const img = new Image();
      img.src = p.src;
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stage]);

  const startMusic = () => audioRef.current?.play().catch(() => {});
  const toggleMusic = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) el.play().catch(() => {});
    else el.pause();
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-ink" style={{ opacity: fontsReady ? 1 : 0 }}>
      {/* Rename the mp3 in /public to music.mp3 (no spaces or brackets) */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/music.mp3"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {stage !== 'entrance' && (
        <button
          type="button"
          onClick={toggleMusic}
          aria-label={isPlaying ? 'Mute music' : 'Play music'}
          aria-pressed={isPlaying}
          className="fixed right-4 top-[max(1rem,env(safe-area-inset-top))] z-50 grid h-10 w-10 place-items-center rounded-full border border-plum/25 bg-white/90 text-plum shadow-sm backdrop-blur"
        >
          {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
      )}

      <AnimatePresence mode="wait">
        {stage === 'entrance' && (
          <motion.div key="entrance" {...fade}>
            <Entrance onStartOpen={startMusic} onOpen={() => setStage('invitation')} />
          </motion.div>
        )}
        {stage === 'invitation' && (
          <motion.div key="invitation" {...fade}>
            <InvitationScene
              instant={introPlayed}
              onNext={() => {
                setIntroPlayed(true);
                setStage('details');
              }}
            />
          </motion.div>
        )}
        {stage === 'details' && (
          <motion.div key="details" {...fade}>
            <InviteDetails onBack={() => setStage('invitation')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;