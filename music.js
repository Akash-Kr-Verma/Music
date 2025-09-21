const audio = document.querySelector("#main-audio");
const playPauseBtn = document.querySelector(".play-pause");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const currentTimeEl = document.querySelector(".current-time");
const maxDurationEl = document.querySelector(".max-duration");
const progressBar = document.querySelector(".progress-bar");
const progressArea = document.querySelector(".progress-area");

// Play and pause the audio
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = '<i class="bx bx-pause"></i>';
  } else {
    audio.pause();
    playPauseBtn.innerHTML = '<i class="bx bx-play"></i>';
  }
});

// Update the progress bar
audio.addEventListener("timeupdate", () => {
  const maxDuration = audio.duration;
  const currentTime = audio.currentTime;
  const progressPercentage = (currentTime / maxDuration) * 100;
  progressBar.style.width = progressPercentage + "%";

  // Update the timer
  const currentTimeRounded = Math.floor(currentTime);
  const minutes = Math.floor(currentTimeRounded / 60);
  const seconds = currentTimeRounded - minutes * 60;
  currentTimeEl.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

  const maxDurationRounded = Math.floor(maxDuration);
  const maxMinutes = Math.floor(maxDurationRounded / 60);
  const maxSeconds = maxDurationRounded - maxMinutes * 60;
  maxDurationEl.textContent = `${maxMinutes}:${maxSeconds < 10 ? "0" + maxSeconds : maxSeconds}`;
});

// Jump to a specific part of the song when the progress bar is clicked
progressArea.addEventListener("click", (e) => {
  let progressWidth = progressArea.clientWidth;
  let clickedOffsetX = e.offsetX;
  let songDuration = audio.duration;

  audio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
});

// Update the progress bar after clicking the progress bar
progressArea.addEventListener("click", () => {
  const maxDuration = audio.duration;
  const currentTime = audio.currentTime;
  const progressPercentage = (currentTime / maxDuration) * 100;
  progressBar.style.width = progressPercentage + "%";

  // Update the timer
  const currentTimeRounded = Math.floor(currentTime);
  const minutes = Math.floor(currentTimeRounded / 60);
  const seconds = currentTimeRounded - minutes * 60;
  currentTimeEl.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
});