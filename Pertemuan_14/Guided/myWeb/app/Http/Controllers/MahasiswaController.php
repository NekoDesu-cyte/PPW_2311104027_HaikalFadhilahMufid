<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Mahasiswa;

class MahasiswaController extends Controller
{
    public function index(){
        return "Index untuk mahasiswa";
    }

    // Raw Query Insert
    public function insertSql() {
        $result1 = DB::insert("
        INSERT INTO mahasiswas
        (nim, nama_lengkap, tempat_lahir, tanggal_lahir, alamat, fakultas, jurusan)
        VALUES
        ('20104065',
        'Muhammad Nur Hamada',
        'Bandung',
        '2002-02-02',
        'Jl. Contoh No. 123',
        'Fakultas Informatika',
        'Software Engineering')"
    );
    dump($result1);
}

    // Query Builder Insert
    public function insertQB()
    {
        $result2 = DB::table('mahasiswas')->insert([
            'nim' => '20104070',
            'nama_lengkap' => 'Aulia Putri Ramadhani',
            'tempat_lahir' => 'Surabaya',
            'tanggal_lahir' => '2003-05-14',
            'alamat' => 'Jl. Mawar No. 10',
            'fakultas' => 'Fakultas Teknik',
            'jurusan' => 'Teknik Informatika',
        ]);
        dump($result2);
    }

    // Eloquent Insert
    public function insertEloquent()
    {
        $mahasiswa = Mahasiswa::create([
            'nim' => '20104075',
            'nama_lengkap' => 'Rizky Aditya Pratama',
            'tempat_lahir' => 'Yogyakarta',
            'tanggal_lahir' => '2001-11-30',
            'alamat' => 'Jl. Kenanga No. 45',
            'fakultas' => 'Fakultas Ekonomi',
            'jurusan' => 'Manajemen',
        ]);
        dump($mahasiswa);
    }
}