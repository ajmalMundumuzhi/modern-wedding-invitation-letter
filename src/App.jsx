
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

import Entrance from './components/Entrance';
import HeroInvitation from './components/HeroInvitation';
import WeddingEvents from './components/WeddingEvent';
import WeddingLocation from './components/WeddingLocation';
import OurFamilies from './components/OurFamilies';
import WeddingClosing from './components/WeddingClosing';
import CustomCursor from './components/CustomerCursor';

import { INVITE, WHATSAPP_NUMBER, waLink } from './config';

const App = () => {
  const [opened, setOpened] = useState(false);
  const [transitionStarted, setTransitionStarted] = useState(false);
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

  useEffect(() => {
    if (opened) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [opened]);

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

  const startOpening = () => {
    if (transitionStarted) return;

    startMusic();
    setTransitionStarted(true);
  };

  const finishOpening = () => {
    setOpened(true);
  };

  const whatsappMessage = `Assalamu Alaikum! I would like to know more about the wedding celebration of ${INVITE.bride} and ${INVITE.groom}.`;

  const whatsappUrl = waLink(whatsappMessage, WHATSAPP_NUMBER);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-wine font-sans text-ivory"
      style={{
        opacity: fontsReady ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
    >
      <audio
  ref={audioRef}
  loop
  preload="auto"
  src="/bg-music.mp3.mpeg"
  onPlay={() => setIsPlaying(true)}
  onPause={() => setIsPlaying(false)}
/>

      <CustomCursor />

      <motion.main
        className="relative"
        initial={false}
        animate={{
          opacity: opened ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          pointerEvents: opened ? 'auto' : 'none',
        }}
        aria-hidden={!opened}
      >
        <HeroInvitation isRevealed={opened} />
        <WeddingEvents />
        <WeddingLocation />
        <OurFamilies />
        <WeddingClosing />
      </motion.main>

      {!opened && (
        <div className="fixed inset-0 z-40">
          <Entrance
            onStartOpen={startOpening}
            opening={transitionStarted}
          />
        </div>
      )}

      {transitionStarted && !opened && (
        <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 border-r border-gold/30 bg-[#21070d]"
            initial={{ x: '0%' }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 1.45,
              delay: 0.2,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div className="absolute inset-y-8 right-5 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
          </motion.div>

          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 border-l border-gold/30 bg-[#21070d]"
            initial={{ x: '0%' }}
            animate={{ x: '100%' }}
            onAnimationComplete={finishOpening}
            transition={{
              duration: 1.45,
              delay: 0.2,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div className="absolute inset-y-8 left-5 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/40"
            initial={{ opacity: 0.8, scale: 0.5 }}
            animate={{ opacity: 0, scale: 2.5 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      )}

      {opened && (
        <div className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-3 sm:bottom-8 sm:right-8">
          <button
            type="button"
            onClick={toggleMusic}
            aria-label={isPlaying ? 'Mute music' : 'Play music'}
            aria-pressed={isPlaying}
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-wine/90 text-gold shadow-lg backdrop-blur transition-colors hover:bg-burgundy-light"
          >
            {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            title="Contact us on WhatsApp"
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 bg-burgundy text-gold shadow-lg transition-all duration-200 hover:scale-110 hover:bg-gold hover:text-wine"
          >
            <svg
              viewBox="0 0 24 24"
              width="23"
              height="23"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.83 11.83 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.6 5.93L.1 24l6.34-1.66a11.86 11.86 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.45-8.41ZM12.09 21.7h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.21-3.76.98 1-3.66-.24-.38a9.8 9.8 0 0 1-1.5-5.17c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.44 9.9-9.9 9.9Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.49s1.08 2.89 1.23 3.09c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default App;