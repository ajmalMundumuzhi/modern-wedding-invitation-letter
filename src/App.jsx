import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from './components/Preloader';
import ChristianHero from './components/ChristianHero';
import TheUnion from './components/TheUnion';
import Events from './components/Events';
import Countdown from './components/Countdown';
import FamilyDetails from './components/FamilyDetails';
import RSVP from './components/RSVP';
import FloatingElements from './components/FloatingElements';
import CustomCursor from './components/CustomCursor';
import { Volume2, VolumeX, MessageCircle } from 'lucide-react';
import { waLink } from './config';

const PRELOAD_IMAGES = ['/media__1776859894044.jpg'];
const MIN_LOADER_MS = 1800;
const MAX_LOADER_MS = 6000;

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Real preloading: wait for the cover image, but never less than MIN or more than MAX
  useEffect(() => {
    let cancelled = false;
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const images = Promise.all(
      PRELOAD_IMAGES.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = img.onerror = resolve;
            img.src = src;
          })
      )
    );
    Promise.all([wait(MIN_LOADER_MS), Promise.race([images, wait(MAX_LOADER_MS)])]).then(() => {
      if (!cancelled) setIsLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Called synchronously from the user's click so browsers allow playback
  const handleStartOpen = () => {
    audioRef.current?.play().catch(() => {});
  };

  const toggleMusic = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) el.play().catch(() => {});
    else el.pause();
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-rose-bg font-sans text-rose-900 selection:bg-rose-700/30">
      <CustomCursor />

      {/* Rename the file in /public to music.mp3 (no spaces or brackets in the filename) */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/music.mp3"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <AnimatePresence mode="wait">
        {!envelopeOpened ? (
          <Preloader
            key="loader"
            isLoaded={isLoaded}
            onStartOpen={handleStartOpen}
            onOpen={() => setEnvelopeOpened(true)}
          />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative z-10"
          >
            {/* Floating actions */}
            <div className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[150] flex flex-col gap-3 md:right-8 md:bottom-8">
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                href={waLink('Hello! Regarding the wedding...')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact via WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[#25D366] text-white shadow-lg"
              >
                <MessageCircle size={22} />
              </motion.a>

              <motion.button
                type="button"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={toggleMusic}
                aria-label={isPlaying ? 'Mute music' : 'Play music'}
                aria-pressed={isPlaying}
                className="glass flex h-12 w-12 items-center justify-center rounded-full text-rose-900 shadow-lg"
              >
                {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
              </motion.button>
            </div>

            <FloatingElements />

            <main>
              <ChristianHero />
              <TheUnion />
              <Events />
              <Countdown />
              <FamilyDetails />
              <RSVP />
            </main>

            <footer className="relative overflow-hidden bg-rose-950 py-24 text-center text-rose-50">
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center whitespace-nowrap font-cursive text-[15vw] opacity-[0.07]">
                Thank You
              </div>
              <div className="relative z-10 px-4">
                <p className="mb-6 font-cursive text-5xl text-gold-light">Ninan &amp; Anu</p>
                <div className="mx-auto mb-6 h-px w-12 bg-gold" />
                <p className="mb-12 font-serif text-xs uppercase tracking-[0.5em] opacity-80">
                  July 11, 2026
                </p>
                <p className="font-serif text-lg italic text-cream opacity-90">
                  “Sharing the Happiness Jobzen Shantu Padayattil”
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;