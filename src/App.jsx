
import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

import Entrance from './components/Entrance';
import HeroInvitation from './components/HeroInvitation';
import WeddingEvents from './components/WeddingEvent';
import WeddingLocation from './components/WeddingLocation';
import OurFamilies from './components/OurFamilies';
import WeddingClosing from './components/WeddingClosing';
import CustomCursor from './components/CustomerCursor';

const App = () => {
  const [opened, setOpened] = useState(false);
  const [fontsReady, setFontsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    let active = true;

    const timeout = new Promise((resolve) => setTimeout(resolve, 2000));

    Promise.race([document.fonts.ready, timeout]).then(() => {
      if (active) setFontsReady(true);
    });

    return () => {
      active = false;
    };
  }, []);

  const startMusic = () => {
    audioRef.current?.play().catch(() => {});
  };

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  const openInvitation = () => {
    setOpened(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-wine font-sans text-ivory"
      style={{
        opacity: fontsReady ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
    >
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/music.mp3"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <CustomCursor />

      {opened && (
        <button
          type="button"
          onClick={toggleMusic}
          aria-label={isPlaying ? 'Mute music' : 'Play music'}
          aria-pressed={isPlaying}
          className="fixed right-5 top-5 z-50 grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-wine/90 text-gold shadow-lg backdrop-blur transition-colors hover:bg-burgundy-light"
        >
          {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
      )}

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="entrance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Entrance
              onStartOpen={startMusic}
              onOpen={openInvitation}
            />
          </motion.div>
        ) : (
          <motion.main
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <HeroInvitation />
            <WeddingEvents />
            <WeddingLocation />
            <OurFamilies />
            <WeddingClosing />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
