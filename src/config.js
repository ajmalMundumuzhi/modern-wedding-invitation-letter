export const WHATSAPP_NUMBER = '61468898137';
export const CALL_NUMBER = '+919446990357';

export const waLink = (text, number = WHATSAPP_NUMBER) =>
  `https://wa.me/${String(number).replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;

export const INVITE = {
  groom: 'Zainulabidheen K.P',
  bride: 'Sana Ek',
  dateNumeric: '03.12.2026',

  arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',

  kicker: 'The Wedding Celebration',

  card: {
    day: '03',
    ordinal: 'rd',
    month: 'December',
    year: '2026',
    venue: 'Nova Auditorium, Palazhi',
    note: 'Nikkah at 10:30 AM',
  },

  cta: {
    top: 'Share',
    script: 'Your RSVP',
  },

  events: [
    {
      title: 'The Nikkah',
      date: 'Thursday, 03 December 2026',
      time: '10:30 AM',
      venue: 'Nova Auditorium, Palazhi',
      map: '',
    },
    {
      title: 'Wedding Celebration',
      date: 'Thursday, 03 December 2026',
      time: '12:00 PM – 03:00 PM',
      venue: 'Nova Auditorium, Palazhi',
      map: '',
    },
  ],

  families: [
    {
      name: 'Sana Ek',
      relation: 'Beloved daughter of',
      parents: 'Mr. Ek Koya (Late) & Mrs. Sakeena MSV',
      home: 'Sana Mahal (H), Kovoor, Kallady (P.O), Medical College',
    },
    {
      name: 'Zainulabidheen K.P',
      relation: 'Son of',
      parents: 'Mr. K.P Koya & Mrs. Suhana C.V',
      home: 'Kuttilthazham, Mankavu, Calicut',
    },
  ],

  verse: {
    text: 'With the blessings of Allah, we invite you to celebrate this beautiful beginning.',
    ref: 'Insha Allah',
  },
};

export const PHOTOS = [
  {
    src: '/public/media__1776859894044.png',
    alt: 'Wedding couple photograph',
    pos: '50% 25%',
    zoom: 1,
  },
];