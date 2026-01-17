const songList = document.getElementById("song-list");

fetch("https://musicplay-backend.onrender.com/api/songs")
  .then(res => res.json())
  .then(songs => {
    songs.forEach(song => {
      const li = document.createElement("li");
      li.textContent = `${song.title} - ${song.artist}`;
      songList.appendChild(li);
    });
  })
  .catch(err => {
    console.error("抓不到 API:", err);
    songList.textContent = "抓不到資料，請稍後再試";
  });
