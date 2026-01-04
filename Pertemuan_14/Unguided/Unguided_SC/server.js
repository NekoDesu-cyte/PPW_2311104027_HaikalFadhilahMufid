const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Menyajikan file statis dari folder public
app.use(express.static(path.join(__dirname, 'public')));

// Konfigurasi Database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',     
    password: '',      
    database: 'kampus'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Terhubung ke Database MySQL...');
});

// --- RESTful API ROUTES ---

// 1. GET: Ambil semua data mahasiswa
app.get('/api/mahasiswa', (req, res) => {
    const sql = 'SELECT * FROM mahasiswa';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// 2. POST: Tambah data mahasiswa baru
app.post('/api/mahasiswa', (req, res) => {
    const { nim, nama, jurusan } = req.body;
    const sql = 'INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?, ?, ?)';
    db.query(sql, [nim, nama, jurusan], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Data berhasil ditambahkan', id: result.insertId });
    });
});

// 3. PUT: Update data mahasiswa
app.put('/api/mahasiswa/:id', (req, res) => {
    const { nim, nama, jurusan } = req.body;
    const { id } = req.params;
    const sql = 'UPDATE mahasiswa SET nim = ?, nama = ?, jurusan = ? WHERE id = ?';
    db.query(sql, [nim, nama, jurusan, id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Data berhasil diupdate' });
    });
});

// 4. DELETE: Hapus data mahasiswa
app.delete('/api/mahasiswa/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM mahasiswa WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Data berhasil dihapus' });
    });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});