// ==============================
// Exercise 1: Help Alex Access Songs by Position
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create a function that helps Alex quickly access songs from their setlist

function getSongAtPosition(setlist, position) {
  // Handle invalid positions gracefully
  if (setlist.length === 0) {
    return { error: "No sonsg in setlist." };
  }
  if (position < 0 || position >= setlist.length) {
    return { error: "Given position is beyond the bounds of the setlist." };
  }
  // Return the song at the given position
  return setlist[position];
}

const alexsSetlist = [
  "Wonderwall",
  "Hotel California",
  "Blackbird",
  "Free Bird",
];
// console.log("Song at position 2:", getSongAtPosition(alexsSetlist, 2));
// console.log("Song at position 10:", getSongAtPosition(alexsSetlist, 10));

// ==============================
// Exercise 2: Help Alex Update Their Setlist
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create a function that updates multiple songs based on audience feedback

function updateSetlistBasedOnFeedback(setlist, updates) {
  // updates is an object like { 0: "New Song", 2: "Another Song" }
  // Update the setlist at the specified positions
  for (let update in updates) {
    setlist[update] = updates[update];
  }
  return setlist;
}

let performanceSet = ["Song A", "Song B", "Song C", "Song D"];
const feedback = { 0: "Thunderstruck", 2: "Don't Stop Believin'" };
updateSetlistBasedOnFeedback(performanceSet, feedback);
// console.log("Updated setlist:", performanceSet);

// ==============================
// Exercise 3: Help Alex Add Songs Strategically
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create a function that adds songs using the most efficient method based on position

function addSongStrategically(setlist, song, position) {
  if (Number(position)) {
    // If position is a number, use splice (O(n))
    if (position < 0 || position >= setlist.length) {
      // if a number is used, make sure the index exists in the array
      console.log({
        error: "Given position is outside bounds of the setlist.",
      });
      return { error: "Given position is outside bounds of the setlist." };
    }
    setlist.splice(position, 0, song);
  } else if (position === "beginning") {
    // If position is "beginning", use unshift (O(n))
    setlist.unshift(song);
  } else if (position === "end") {
    // If position is "end", use push (O(1))
    setlist.push(song);
  }
  // Return the updated setlist
  return setlist;
}

let strategicSet = ["Hotel California", "Sweet Child O' Mine"];
addSongStrategically(strategicSet, "Thunderstruck", "beginning");
addSongStrategically(strategicSet, "Free Bird", "end");
addSongStrategically(strategicSet, "Wonderwall", 8);
console.log("Strategic setlist:", strategicSet);

// ==============================
// Exercise 4: Help Alex Remove Songs Strategically
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create a function that removes songs using the most efficient method

// function removeSongStrategically(setlist, position) {
//   // If position is "end", use pop (O(1))
//   // If position is "beginning", use shift (O(n))
//   // If position is a number, use splice (O(n))
//   // Return the removed song
// }

// let removalSet = ["Thunderstruck", "Hotel California", "Wonderwall", "Free Bird"];
// console.log("Removed from end:", removeSongStrategically(removalSet, "end"));
// console.log("Removed from beginning:", removeSongStrategically(removalSet, "beginning"));
// console.log("Removed from position 1:", removeSongStrategically(removalSet, 1));
// console.log("Final setlist:", removalSet);

// ==============================
// Exercise 5: Help Alex Find Songs for Requests
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create a function that finds songs matching specific criteria

// function findSongsForRequest(repertoire, criteria) {
//   // repertoire is an array of song objects with properties like title, genre, mood
//   // criteria is an object like { genre: "rock", mood: "energetic" }
//   // Return all songs that match ALL the criteria
// }

// const alexsRepertoire = [
//   { title: "Thunderstruck", genre: "rock", mood: "energetic" },
//   { title: "Hotel California", genre: "rock", mood: "mysterious" },
//   { title: "Wonderwall", genre: "alternative", mood: "nostalgic" },
//   { title: "Tears in Heaven", genre: "ballad", mood: "emotional" }
// ];

// console.log("Rock songs:", findSongsForRequest(alexsRepertoire, { genre: "rock" }));
// console.log("Energetic rock:", findSongsForRequest(alexsRepertoire, { genre: "rock", mood: "energetic" }));
