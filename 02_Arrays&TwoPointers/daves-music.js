/* 
Scenario ---------------------------------------------------------------------------------------
You're building a digital music library for a local radio station. 
The station needs to manage their song collections efficiently using arrays and array methods.

Task Description
Create a PlaylistManager that handles songs with the following structure:
const song = {
    title: "Song Name",
    artist: "Artist Name",
    duration: 3.5,  // in minutes
    genre: "rock",
    rating: 4.5     // 1-5 scale
}

Requirements ------------------------------------------------------------------------------------

1. Core Array Operations
Implement these fundamental operations:
		Add: Add new songs to your playlist
		Remove: Remove songs by their position
		Update: Change song information at a specific position
		Access: Retrieve song information by position
		
2. Array Methods Practice
Implement these features using appropriate array methods:
		Use filter() to get all songs with rating ≥ 4
		Use reduce() to calculate total playlist duration
		Use map() to format song titles with their artists
		Use forEach() to display the full playlist

Success Criteria --------------------------------------------------------------------------------

Your solution should:
		Handle invalid indices appropriately
		Maintain the correct order of songs
		Use array methods efficiently
		Return appropriate values for each operation

    Hints
		Consider edge cases like empty playlists
		Remember array indices start at 0
		Think about which array methods best fit each requirement
		Consider time complexity when choosing operations

Example Usage ------------------------------------------------------------------------------------

// Adding songs
addSong({title: "Dreams", artist: "Fleetwood Mac", duration: 4.5, genre: "rock", rating: 4.8})
// Should add to end of playlist
// Removing songs
removeSong(2)  // Should remove and return song at index 2
// Getting popular songs
getPopularSongs()  // Should return array of songs with rating >= 4
// Calculating duration
getPlaylistDuration()  // Should return total minutes 

*/

const sampleSongs = [
  {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    duration: 5.55,
    genre: "rock",
    rating: 4.9,
  },
  {
    title: "Billie Jean",
    artist: "Michael Jackson",
    duration: 4.54,
    genre: "pop",
    rating: 4.8,
  },
  {
    title: "Hotel California",
    artist: "Eagles",
    duration: 6.3,
    genre: "rock",
    rating: 4.7,
  },
  {
    title: "Sweet Dreams",
    artist: "Eurythmics",
    duration: 3.36,
    genre: "pop",
    rating: 4.2,
  },
  {
    title: "Yesterday",
    artist: "The Beatles",
    duration: 2.05,
    genre: "rock",
    rating: 4.6,
  },
  {
    title: "Take on Me",
    artist: "a-ha",
    duration: 3.48,
    genre: "pop",
    rating: 3.9,
  },
  {
    title: "Wonderwall",
    artist: "Oasis",
    duration: 4.18,
    genre: "rock",
    rating: 3.8,
  },
  {
    title: "Dancing Queen",
    artist: "ABBA",
    duration: 3.51,
    genre: "pop",
    rating: 4.4,
  },
];

class PlaylistManager {
  constructor(initialSongs) {
    this.songs = [...initialSongs];
  }

  addSong = (song) => {
    if (
      !song.title ||
      !song.genre ||
      !song.duration ||
      !song.rating ||
      !song.artist
    ) {
      return { error: "Missing required fields in submitted song." };
    }
    this.songs.push(song);
    return {
      addedSong: song,
      updatedSongs: this.songs,
    };
  };

  removeSong = (index) => {
    if (index < 0 || index > this.songs.length) {
      return { error: "Index does not exist within bounds of song list." };
    }
    const removed = this.songs.splice(index, 1);
    return {
      removedSong: removed,
      updatedSongs: this.songs,
    };
  };

  updateSong = (index, updatedSongInfo) => {
    if (index < 0 || index > this.songs.length) {
      return { error: "Index does not exist within bounds of song list." };
    }

    this.songs[index] = {
      ...this.songs[index],
      ...updatedSongInfo,
    };

    return {
      updatedSong: this.songs[index],
      songs: this.songs,
    };
  };

  getSongInfo = (index) => {
    if (index < 0 || index > this.songs.length) {
      return {
        error: "Index does not exist within bounds of song list.",
      };
    }
    return this.songs[index];
  };

  getHighlyRatedSongs = (minimumRating) => {
    if (minimumRating < 0 || minimumRating > 5) {
      return {
        error: "Please provide minimumRating as a number between 0 - 5",
      };
    }

    return this.songs.filter((song) => song.rating >= minimumRating);
  };

  getTotalPlaylistDuration = () => {
    return this.songs
      .reduce((duration, song) => {
        return (duration += song.duration);
      }, 0)
      .toFixed(2);
  };

  displaySongInfo = () => {
    return this.songs.map((song) => {
      return `${song.title} by ${song.artist}`;
    });
  };

  displayFullPlaylist = () => {
    return this.songs.forEach((song) => console.log(song));
  };
}

const playlistManager = new PlaylistManager(sampleSongs);

console.log("Song playlist display: ", playlistManager.displayFullPlaylist());
