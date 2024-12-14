const lyrics = [
  "\uD83C\uDF81 The snow is falling, the fire’s aglow,",
  "Memories warm us as the cold winds blow.",
  "With every bell that rings, a story's told,",
  "Of love and hope in hearts that won’t grow old.",
  "",
  "\u2728 Here’s to Christmas, here’s to cheer,",
  "To a bright new start and a golden year.",
  "Raise your voice, let’s sing once more,",
  "Cheers to 2024!",
  "",
  "\uD83C\uDF1F Lights are twinkling, the world feels new,",
  "Underneath the mistletoe, dreams come true.",
  "With friends and family, we gather near,",
  "Saying goodbye to another great year.",
  "",
  "\uD83C\uDF86 Fireworks in the midnight sky,",
  "As we toast to days gone by.",
  "The clock strikes twelve, the future's bright,",
  "A new chapter starts tonight!",
  "",
  "\u2728 Here’s to Christmas, here’s to cheer,",
  "To a bright new start and a golden year.",
  "Raise your voice, let’s sing once more,",
  "Cheers to 2024!",
  "",
  "\uD83C\uDFB5 Hold the joy, the love, and more,",
  "As we step into 2024!"
];

const lyricsBox = document.getElementById("lyrics-box");
const playPauseButton = document.getElementById("play-pause");
const audioPlayer = document.getElementById("audio-player");
const volumeControl = document.getElementById("volume-control");
const progressBar = document.getElementById("progress-bar");
const skipButton = document.getElementById("next");
let isPlaying = false;
let currentLine = 0;

/* Function to display lyrics line by line */
function playLyrics() {
  if (currentLine < lyrics.length) {
    const line = document.createElement("p");
    line.textContent = lyrics[currentLine++];
    lyricsBox.appendChild(line);
    lyricsBox.scrollTop = lyricsBox.scrollHeight;
    setTimeout(playLyrics, 3000); // Display a new line every 3 seconds
  } else {
    isPlaying = false;
    playPauseButton.textContent = "\u25B6"; // Play icon
  }
}

/* Play/Pause Button Event */
playPauseButton.addEventListener("click", () => {
  if (!isPlaying) {
    isPlaying = true;
    playPauseButton.textContent = "\u23F8"; // Pause icon
    if (currentLine === lyrics.length) {
      currentLine = 0;
      lyricsBox.innerHTML = ""; // Reset lyrics display
    }
    audioPlayer.play(); // Start the audio
    playLyrics(); // Start the lyrics display
  } else {
    isPlaying = false;
    playPauseButton.textContent = "\u25B6"; // Play icon
    audioPlayer.pause(); // Pause the audio
  }
});
volumeControl.addEventListener("input", (event) => {
  audioPlayer.volume = event.target.value;
});

/* Progress Bar */
audioPlayer.addEventListener("timeupdate", () => {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.value = progress;
});

/* Skip to Next Line */
skipButton.addEventListener("click", () => {
  currentLine = Math.min(currentLine + 1, lyrics.length);
  lyricsBox.innerHTML = "";
  playLyrics();
});