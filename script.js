let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Blinding Lights",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.mp3",
  },
  {
    songName: "Someone You Loved",
    filePath: "songs/2.mp3",
    coverPath: "covers/1.mp3",
  },
  {
    songName: "Levitating",
    filePath: "songs/3.mp3",
    coverPath: "covers/1.mp3",
  },
  { songName: "Perfect", filePath: "songs/4.mp3", coverPath: "covers/1.mp3" },
  {
    songName: "Counting Stars",
    filePath: "songs/5.mp3",
    coverPath: "covers/1.mp3",
  },
  { songName: "Stay", filePath: "songs/6.mp3", coverPath: "covers/1.mp3" },

  { songName: "Believer", filePath: "songs/7.mp3", coverPath: "covers/1.mp3" },

  { songName: "Lovely", filePath: "songs/8.mp3", coverPath: "covers/1.mp3" },
];

songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// audioElement.play();
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
  s;
});

const makeAllplay = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      
      makeAllplay();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-pause-circle");
      masterPlay.classList.add("fa-play-circle");
    });
  }
);
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-pause-circle");
  masterPlay.classList.add("fa-play-circle");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-pause-circle");
  masterPlay.classList.add("fa-play-circle");
});
