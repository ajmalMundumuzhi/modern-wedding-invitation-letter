
import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import {
  MapPin,
  Clock,
  CalendarDays,
  ArrowUpRight,
  Church,
  PartyPopper
} from 'lucide-react';

const events = [
  {
    number: '01',
    label: 'THE SACRED CEREMONY',
    title: 'The Wedding',
    date: 'Saturday, July 11, 2026',
    time: '03:30 PM',
    venue: 'St. George Syro-Malabar Basilica',
    location: 'Angamaly, Kerala',
    map: 'https://maps.app.goo.gl/jMLrMUQtCkGKXaHW9?g_st=iw',
    Icon: Church
  },
  {
    number: '02',
    label: 'THE EVENING CELEBRATION',
    title: 'The Reception',
    date: 'Saturday, July 11, 2026',
    time: '06:30 PM',
    venue: 'LA Mirage Convention Center',
    location: 'Koratty, Ernakulam',
    map: 'https://maps.app.goo.gl/CC9hKYoSnRGakRYi7?g_st=iw',
    Icon: PartyPopper
  }
];

const EventItem = ({ event, index }) => {
  const Icon = event.Icon;

  return (
    <motion.article
      initial={{ opacity: 0, x: index === 0 ? -35 : 35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9 }}
      className={`relative grid grid-cols-1 gap-8 md:grid-cols-[1fr_110px_1fr] md:gap-8 ${
        index === 1 ? 'md:mt-20' : ''
      }`}
    >
      <div className={`relative flex flex-col justify-center ${index === 1 ? 'md:col-start-3 md:row-start-1' : ''}`}>
        <div className="flex items-center gap-3">
          <span className="font-serif text-xs tracking-[0.4em] text-gold-dark">
            {event.number}
          </span>
          <span className="h-px w-10 bg-gold/50" />
          <span className="font-serif text-[9px] font-semibold uppercase tracking-[0.3em] text-rose-800/60">
            {event.label}
          </span>
        </div>

        <h3 className="mt-6 font-cursive text-6xl text-rose-950 md:text-7xl">
          {event.title}
        </h3>

        <p className="mt-5 max-w-sm font-serif text-base font-light leading-relaxed text-rose-800/70">
          Join us as we celebrate this beautiful chapter surrounded by the blessings of family and friends.
        </p>

        <a
          href={event.map}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-fit items-center gap-4 border-b border-gold/50 pb-3 font-serif text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-900 transition-colors hover:text-gold-dark"
        >
          View Location
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className={`relative flex items-center justify-center ${index === 1 ? 'md:col-start-2 md:row-start-1' : ''}`}>
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-rose-bg shadow-[0_0_0_10px_rgba(184,150,62,0.04)]">
          <Icon size={28} strokeWidth={1} className="text-gold-dark" />
        </div>

        <div className="absolute left-1/2 top-full hidden h-32 w-px -translate-x-1/2 bg-gradient-to-b from-gold/50 to-transparent md:block" />
      </div>

      <div className={`relative overflow-hidden border border-gold/20 bg-white/60 p-7 md:p-10 ${index === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
        <div className="absolute -right-8 -top-10 font-serif text-[9rem] leading-none text-rose-100/70">
          {event.number}
        </div>

        <div className="relative z-10">
          <p className="font-serif text-[9px] uppercase tracking-[0.4em] text-gold-dark">
            Event Details
          </p>

          <div className="mt-9 space-y-7">
            <div className="flex items-start gap-5">
              <CalendarDays size={18} className="mt-1 shrink-0 text-gold-dark" />
              <div>
                <p className="font-serif text-[9px] uppercase tracking-[0.3em] text-rose-800/50">
                  Date
                </p>
                <p className="mt-2 font-serif text-sm text-rose-950">
                  {event.date}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <Clock size={18} className="mt-1 shrink-0 text-gold-dark" />
              <div>
                <p className="font-serif text-[9px] uppercase tracking-[0.3em] text-rose-800/50">
                  Time
                </p>
                <p className="mt-2 font-serif text-2xl text-rose-950">
                  {event.time}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <MapPin size={18} className="mt-1 shrink-0 text-gold-dark" />
              <div>
                <p className="font-serif text-[9px] uppercase tracking-[0.3em] text-rose-800/50">
                  Venue
                </p>
                <p className="mt-2 font-serif text-base text-rose-950">
                  {event.venue}
                </p>
                <p className="mt-1 font-serif text-sm italic text-rose-800/60">
                  {event.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Events = () => (
  <MotionConfig reducedMotion="user">
    <section id="events" className="relative overflow-hidden bg-rose-bg px-5 py-32 md:py-44">
      <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-rose-200/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-24 grid items-end gap-8 md:grid-cols-2">
          <div>
            <p className="font-serif text-[10px] font-semibold uppercase tracking-[0.5em] text-gold-dark">
              July 11 · 2026
            </p>

            <h2 className="mt-6 font-cursive text-7xl leading-none text-rose-950 md:text-9xl">
              The Big Day
            </h2>
          </div>

          <p className="max-w-sm font-serif text-base font-light leading-[1.9] text-rose-800/70 md:justify-self-end">
            From a sacred promise to an evening of celebration, we would be honoured to have you with us for every moment.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gold/20 md:block" />

          <div className="space-y-20 md:space-y-0">
            {events.map((event, index) => (
              <EventItem key={event.number} event={event} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-28 flex flex-col items-center">
          <div className="h-px w-20 bg-gold/50" />
          <p className="mt-6 font-cursive text-4xl text-rose-900">
            We can't wait to celebrate with you.
          </p>
        </div>
      </div>
    </section>
  </MotionConfig>
);

export default Events;
