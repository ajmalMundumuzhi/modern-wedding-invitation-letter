// TODO: confirm which number should receive RSVPs.
export const WHATSAPP_NUMBER = '61468898137';
export const CALL_NUMBER = '+919446990357';

export const waLink = (text, number = WHATSAPP_NUMBER) =>
  `https://wa.me/${String(number).replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;

export const INVITE = {
  groom: 'Ninan',
  bride: 'Anu',
  dateNumeric: '11.07.2026',

  // White + green cards (screen 3)
  kicker: 'The wedding of',
  card: {
    day: '11',
    ordinal: 'th',
    month: 'July',
    year: '2026',
    venue: 'St. George Basilica, Angamaly',
    note: 'Reception to follow',
  },
  cta: { top: 'Kindly', script: 'RSVP' },

  verse: {
    text: 'So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.',
    ref: 'Matthew 19:6',
  },

  events: [
    {
      title: 'The Wedding',
      date: 'Saturday, 11 July 2026',
      time: '3:30 PM',
      venue: 'St. George Syro-Malabar Basilica, Angamaly, Kerala',
      map: 'https://maps.app.goo.gl/jMLrMUQtCkGKXaHW9?g_st=iw',
    },
    {
      title: 'Wedding Reception',
      date: 'Saturday, 11 July 2026',
      time: '6:30 PM',
      venue: 'LA Mirage Convention Center, Koratty, Ernakulam',
      map: 'https://maps.app.goo.gl/CC9hKYoSnRGakRYi7?g_st=iw',
    },
  ],

  families: [
    {
      name: 'Ninan',
      relation: 'Son of',
      parents: 'Mr. Shantu Padayattil & Mrs. Bindu Shantu',
      home: 'Padayattil House, Angamaly',
    },
    {
      name: 'Anu',
      relation: 'Daughter of',
      parents: 'Mr. Paulachan T.P & Mrs. Litty Paul',
      home: 'Thekkanath Pulickalan House, Besleham, Karukutty',
    },
  ],
};

// Polaroids on screen 3: one photo, two different crops (see question at the end)
export const PHOTOS = [
  { src: '/media__1776859894044.jpg', alt: 'Ninan and Anu', pos: '50% 25%', zoom: 1 },
  { src: '/media__1776859894044.jpg', alt: 'Ninan and Anu', pos: '60% 40%', zoom: 1.6 },
];