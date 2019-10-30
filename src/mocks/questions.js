const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://sefan.ru/music/files/eng/low/Leona_Lewis_-_I_See_You_(OST_Avatar).mp3`,
        genre: `rock`,
      },
      {
        src: `https://sefan.ru/music/files/eng/low/Celine_Dion_-_My_Heart_Will_Go_On_(OST_Titanic).mp3`,
        genre: `pop`,
      },
      {
        src: `https://sefan.ru/music/files/rus/low/Nautilus_Pompilius_-_Mater_bogov_(OST_Brat).mp3`,
        genre: `jazz`,
      },
      {
        src: `https://sefan.ru/music/files/eng/low/Pirates_of_the_Caribbean_-_He-s_a_Pirate.mp3`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `genre`,
    genre: `folk`,
    answers: [
      {
        src: `https://sefan.ru/music/files/rus/low/Okudzhava_Bulat_-_Pesnya_Vereschagina_(Vashe_blagorodie_OST_Beloe_solnce_pustyni).mp3`,
        genre: `rock`,
      },
      {
        src: `https://sefan.ru/music/files/eng/low/Avril_Lavigne_-_Alice.mp3`,
        genre: `pop`,
      },
      {
        src: `https://sefan.ru/music/files/eng/low/Pirates_of_the_Caribbean_-_The_Black_Pearl_(Chernaya_Zhemchuzhina).mp3`,
        genre: `jazz`,
      },
      {
        src: `https://sefan.ru/music/files/eng/low/Roy_Orbison_-_Oh_Pretty_Woman.mp3`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://sefan.ru/music/files/eng/low/Leona_Lewis_-_I_See_You_(OST_Avatar).mp3`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Jack Daniels`,
      src: `https://sefan.ru/music/files/eng/low/Roy_Orbison_-_Oh_Pretty_Woman.mp3`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam`,
      },
    ],
  },
];

export default questions;
