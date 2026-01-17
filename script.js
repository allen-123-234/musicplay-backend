const backendUrl = "https://musicplay-backend.onrender.com"

// 登入
document.getElementById("login-btn").addEventListener("click", () => {
  const username = document.getElementById("login-username").value
  const password = document.getElementById("login-password").value

  fetch(`${backendUrl}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("login-msg").textContent = data.message
      if (data.success) loadSongs()
    })
    .catch(err => console.error("登入錯誤:", err))
})

// 註冊
document.getElementById("register-btn").addEventListener("click", () => {
  const username = document.getElementById("register-username").value
  const password = document.getElementById("register-password").value

  fetch(`${backendUrl}/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("register-msg").textContent = data.message
    })
    .catch(err => console.error("註冊錯誤:", err))
})

// 取得歌曲列表
function loadSongs() {
  const songList = document.getElementById("song-list")
  songList.innerHTML = ""

  fetch(`${backendUrl}/api/songs`)
    .then(res => res.json())
    .then(songs => {
      songs.forEach(song => {
        const li = document.createElement("li")
        li.textContent = `${song.title} - ${song.artist}`
        songList.appendChild(li)
      })
    })
    .catch(err => {
      console.error("抓不到 API:", err)
      songList.textContent = "抓不到歌曲資料"
    })
}
