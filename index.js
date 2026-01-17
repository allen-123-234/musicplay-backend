const express = require("express")
const cors = require("cors")   // <-- 加這一行
const app = express()

app.use(cors())  // <-- 加這一行，允許所有來源請求

// 首頁
app.get("/", (req, res) => {
  res.send("🎵 MusicPlay backend is running")
})

// API：歌曲列表
app.get("/api/songs", (req, res) => {
  res.json([
    { id: 1, title: "Night Shanghai", artist: "JunLin" },
    { id: 2, title: "Jazz Rain", artist: "JunLin" }
  ])
})

const PORT = 3000
app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT)
})
