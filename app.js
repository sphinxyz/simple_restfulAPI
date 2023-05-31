const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const app = express();

app.use(express.json());

// Baca data pengguna dari file JSON
let users = JSON.parse(fs.readFileSync("JSON/users.json", "utf8"));

// Middleware untuk verifikasi token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (typeof authHeader !== "undefined") {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "rahasia", (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ message: "Akses ditolak. Token tidak valid." });
      }
      req.user = decoded;
      next();
    });
  } else {
    res.status(401).json({ message: "Akses ditolak. Token tidak ditemukan." });
  }
};

// Endpoint API Registrasi Pengguna
app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  // Cek apakah pengguna sudah terdaftar
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res
      .status(409)
      .json({
        message:
          "Username sudah terdaftar atau data yang kamu kirimkan kosong.",
      });
  }

  // Tambahkan pengguna baru ke daftar pengguna
  const newUser = { username, password };
  users.push(newUser);
  fs.writeFileSync("JSON/users.json", JSON.stringify(users));

  res.json({ message: "Registrasi berhasil.", user: newUser });
});

// Endpoint API Login Pengguna
// Endpoint API Login Pengguna
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Cek apakah pengguna terdaftar
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(401).json({ message: "Username atau password salah." });
  }

  // Cek kecocokan password
  if (user.password !== password) {
    return res.status(401).json({ message: "Username atau password salah." });
  }

  // Pembuatan token
  const token = jwt.sign({ username }, "rahasia");
  res.json({ message: "Login berhasil.", token });
});

// Endpoint API Daftar Menu
app.get("/api/menu", verifyToken, (req, res) => {
  const daftarMenu = JSON.parse(
    fs.readFileSync("JSON/daftarMenu.json", "utf8")
  );
  res.json(daftarMenu);
});

// ... Endpoint lainnya ...

// Jalankan server
app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});
