const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
app.use(cors())
app.use(bodyParser.json())

// 模擬使用者資料
const users = [
  { username: "Allen", password: "123456" }
]

// 登入 API
app.post("/api/login", (req, res) => {
  const { username, password } = req.body
  const user = users.find(u => u.username === username && u.password === password)
  if (user) {
    res.json({ success: true, message: "登入成功", username: user.username })
  } else {
    res.json({ success: false, message: "帳號或密碼錯誤" })
  }
})

// 註冊 API
app.post("/api/register", (req, res) => {
  const { username, password } = req.body
  if (users.find(u => u.username === username)) {
    res.json({ success: false, message: "帳號已存在" })
  } else {
    users.push({ username, password })
    res.json({ success: true, message: "註冊成功" })
  }
})

// 歌曲列表 API
app.get("/api/songs", (req, res) => {
  res.json([
    { id: 1, title: "Night Shanghai", artist: "JunLin" },
    { id: 2, title: "Jazz Rain", artist: "JunLin" }
  ])
})

// 啟動伺服器
app.listen(process.env.PORT || 3000, () => {
  console.log("Server running at http://localhost:3000")
})
