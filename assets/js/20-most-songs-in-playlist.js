// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  let playlist = 0
  const sortedArray = arr.sort();
  const songArr = sortedArray.filter((song) => {
    if(playlist + song <= 60){
      playlist += song
      return song
    }
  })
  return songArr.length
};
