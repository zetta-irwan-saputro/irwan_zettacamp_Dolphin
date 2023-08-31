// create variabel to save song list as array of object
const songList = [
  {
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    genre: 'Pop',
    duration: 9,
  },
  {
    title: 'Castle on the Hill',
    artist: 'Ed Sheeran',
    genre: 'Pop',
    duration: 4,
  },
  {
    title: 'Perfect',
    artist: 'Ed Sheeran',
    genre: 'Pop',
    duration: 9,
  },
  {
    title: 'Photograph',
    artist: 'Ed Sheeran',
    genre: 'Pop',
    duration: 10,
  },
  {
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    genre: 'Rock',
    duration: 5,
  },
  {
    title: 'Another One Bites the Dust',
    artist: 'Queen',
    genre: 'Rock',
    duration: 3,
  },
  {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    genre: 'R&B',
    duration: 3,
  },
  {
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    genre: 'R&B',
    duration: 3,
  },
  {
    title: 'Someone Like You',
    artist: 'Adele',
    genre: 'Pop',
    duration: 4,
  },
  {
    title: 'Hello',
    artist: 'Adele',
    genre: 'Pop',
    duration: 8,
  },
  {
    title: 'Hello',
    artist: 'Adele',
    genre: 'Pop',
    duration: 4,
  },
  {
    title: 'Old Town Road',
    artist: 'Lil Nas X',
    genre: 'Hip-Hop',
    duration: 2,
  },
  {
    title: 'Montero (Call Me By Your Name)',
    artist: 'Lil Nas X',
    genre: 'Hip-Hop',
    duration: 2,
  },
  {
    title: 'Boys Will Be Bugs',
    artist: 'Cavetown',
    genre: 'Indie',
    duration: 3,
  },
  {
    title: 'Green',
    artist: 'Cavetown',
    genre: 'Indie',
    duration: 2,
  },
];

// function to get group by artist
const getSongByArtist = (artist) => {
  const groupSong = songList.filter((a) => a.artist == artist);
  return !groupSong.length ? 'Not Found' : groupSong;
};

// console.log(getSongByArtist('Queen'));

// function to get group by genre
const getSongByGenre = (genre) => {
  const groupSong = songList.filter((a) => a.genre === genre);

  return !groupSong.length ? 'Not Found' : groupSong;
};

// console.log(getSongByGenre('Popi'));

// play music less than one hours
const groupSongsLessThanOneHour = (songList) => {
  const random = songList.sort(() => [Math.floor(Math.random() * songList.length)]);
  const maxDuration = 15;
  const result = [];
  let tempTime = 0;

  for (let i = 0; i < random.length; i++) {
    if (tempTime < maxDuration && tempTime + random[i].duration < maxDuration) {
      result.push(random[i]);
      tempTime += random[i].duration;
    } else {
      break;
    }
  }
  console.log('Duration is =', tempTime);
  return result;
};

const groupedSongs = groupSongsLessThanOneHour(songList);
console.log(groupedSongs);
