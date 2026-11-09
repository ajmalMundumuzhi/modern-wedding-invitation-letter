
export const WHATSAPP_NUMBER = '61468898137';
export const CALL_NUMBER = '+919446990357';

export const waLink = (text, number = WHATSAPP_NUMBER) =>
  `https://wa.me/${String(number).replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;

export const INVITE = {
  bride: 'Sana Ek',
  groom: 'Zainulabidheen K.P',
  dateNumeric: '03 December 2026',
  weekday: 'Thursday',
  arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
  kicker: 'The Wedding Celebration',
  venue: 'Nova Auditorium, Palazhi',
  nikkahTime: '10:30 AM',
  celebrationTime: '12:00 PM – 03:00 PM',
  events: [
    {
      number: '01',
      title: 'The Nikkah',
      date: 'Thursday, 03 December 2026',
      time: '10:30 AM',
      venue: 'Nova Auditorium, Palazhi',
    },
    {
      number: '02',
      title: 'Wedding Celebration',
      date: 'Thursday, 03 December 2026',
      time: '12:00 PM – 03:00 PM',
      venue: 'Nova Auditorium, Palazhi',
    },
  ],
  families: [
    {
      name: 'Sana Ek',
      relation: 'Daughter of',
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
  verse:
    'With the blessings of Allah, we invite you to celebrate this beautiful beginning.',
};

export const PHOTOS = [
  {
    src: '/media__1776859894044.png',
    alt: 'Sana and Zainulabidheen wedding photograph',
    pos: '50% 25%',
    zoom: 1,
  },
];
