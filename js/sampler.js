document.addEventListener("DOMContentLoaded", function () {
    const albumCovers = document.querySelectorAll(".album-cover");
    const player = document.getElementById("player");
    const songName = document.getElementById("song-name");
  
    albumCovers.forEach((cover) => {
      cover.addEventListener("click", function () {
        player.style.display = "none";
        songName.textContent = "";
  
        switch (cover.id) {
          case "cover1":
            player.style.display = "block";
            songName.textContent = "Song 1: The Difference ft. Toro y Moi";
            player.src = "audio/flume_thedifference.mp3";
            break;
  
          case "cover2":
            player.style.display = "block";
            songName.textContent = "Song 2: Never Be Like You ft. Kai";
            player.src = "audio/flume_neverbelikeyou.mp3";
            break;
  
          case "cover3":
            player.style.display = "block";
            songName.textContent = "Song 3: Rhinestone 1.7.2 [2018 Export Wav] ft. Isabella Manfredi";
            player.src = "audio/flume_rhinestone.mp3";
            break;
  
          case "cover4":
            player.style.display = "block";
            songName.textContent = "Song 4: Tennis Court - Flume Remix";
            player.src = "audio/flume_tenniscourt.mp3";
            break;
        }
      });
    });
  });