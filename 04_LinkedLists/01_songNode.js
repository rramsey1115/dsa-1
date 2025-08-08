/*
⏱️ Alex's First Playlist Challenge!
Maya pulled out her tablet. "Alex, I think you're ready for a hands-on challenge. Jordan has created a simple playlist system, and I want you to help them solve a common problem."

Jordan nodded enthusiastically. "Here's the scenario: I have a playlist, but I want to find a specific song and then play the song that comes after it. Can you help me write a function to do that?"

🔓 Uncomment the below code section in the editor 👉:

Implement playNextSong() to find a song and play the next one
Use the currentSong.next property to traverse the playlist
Click Run Code
Inspect 📋 Console Output window and run test to check for correctness!
"This challenge will help you understand how to navigate through linked structures," Maya explained. "You're not just accessing data - you're following connections."
*/

// 🎵 Simple Song Node class - represents a song in our playlist
class SongNode {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.next = null; // Points to the next song in the playlist
  }

  toString() {
    return `${this.title} - ${this.artist}`;
  }
}

// Create a sample playlist
const song1 = new SongNode("Bohemian Rhapsody", "Queen");
const song2 = new SongNode("Hotel California", "Eagles");
const song3 = new SongNode("Stairway to Heaven", "Led Zeppelin");
const song4 = new SongNode("Sweet Child O' Mine", "Guns N' Roses");

// Connect the songs together
song1.next = song2;
song2.next = song3;
song3.next = song4;
// song4.next is null (end of playlist)

// ⏱️ Alex's First Playlist Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

// Find the target song and play the song that comes after it
// targetsong parameter is a string with "Tile - Band" ex. "Hotel California - Eagles"
// Return the next song's string representation, or "End of playlist" if no next song
// TODO: Traverse the playlist to find the target song
// Hint: Use a while loop and check currentSong.toString()

// instructions are a little funky, they ask for the NEXT song AFTER the target, not the target... but okay!

function playNextSong(startingSong, targetSong) {
  let currentSong = startingSong;

  // while loops checks if we reached last song in list
  while (currentSong.next !== null) {
    // if the next song is our target
    if (currentSong.next.toString() == targetSong) {
      // assign current song to our matched song
      currentSong = currentSong.next;
      if (currentSong.next !== null) {
        // if our target/match song is NOT the end of the array
        // return the next song after the target song (per instructions)
        return currentSong.next.toString();
      } else {
        // if the target song is the end of playlist, return message
        return "End of playlist";
      }
    }
    // if no match found, go to next song node, as long as while loop remains true
    currentSong = currentSong.next;
  }

  // after while loop ends, return message as default case not found
  return "Song not found";
}

// ⏱️ Alex's Second Playlist Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function removeSong(playlist, targetTitle) {
  // Remove a song from the playlist by title
  // Return the new head of the playlist
  
  // Handle case where first song should be removed
  if (playlist && playlist.title === targetTitle) {
    return playlist.next;
  }
  
  let currentSong = playlist;
  
  // TODO: Find the song before the one to remove
  // Hint: Check if currentSong.next exists and if its title matches
  
  return playlist; // Return original head if song not found
}
*/

// ⏱️ Alex's Third Playlist Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function countSongs(playlist) {
  // Count the total number of songs in the playlist
  // Return the count as a number
  
  let count = 0;
  let currentSong = playlist;
  
  // TODO: Traverse the entire playlist and count songs
  // Hint: Use a while loop and increment count for each song
  
  return count;
}
*/
