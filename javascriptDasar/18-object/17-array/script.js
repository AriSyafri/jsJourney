
const siswa = {nama: "siti", nilai: 85, hadir: true};
console.log(siswa);

// akses nilai 
console.log(siswa.nilai);
// atau
console.log(siswa["nama"]);

// method object
// ambil semua nama key sebagai array 
const keys = Object.keys(siswa);
console.log(keys);

// ambil semua value menjadi array
const vals = Object.values(siswa);
console.log(vals);

// ambil semua pasangan [key, value]
const entries = Object.entries(siswa);
console.log(entries);

for (const [key, val] of Object.entries(siswa)) {
    console.log(key + ": " + val)
};


// object di dlm object
const student = {
    nama: "ujang",
    nilai: 60,
    alamat: {
        kota: "Bandung",
        provinsi: "Jatim"
    }
};

console.log(student.alamat.kota);

// array of object 
const students = [
    {nama: "ujang", nilai: 90, hadir: true},
    {nama: "Rendi", nilai: 60, hadir: true},
    {nama: "Julian", nilai: 70, hadir: false},
    {nama: "Siti", nilai: 40, hadir: true, alamat: {
        kota: "Bandung",
        provinsi: "Jawa Barat",
        kode: ["tes nested", 3]
    } },
];

console.log(students[0].nama);
console.log(students[2].nilai);
console.log(students[3].alamat.kota);
console.log(students[3].alamat.kode[0]);

// loop array of object
for (const s of students) {
    console.log(`nama : ${s.nama} dengan nilai : ${s.nilai}`)
}

// latihan 

const produk = { 
    nama: "Sepatu", 
    harga: 350000, 
    stok: 5, 
    terjual: 120 
}; 
// Soal 1: tampilkan nama dan harga produk 
console.timeLog("============");

console.log(`nama : ${produk.nama}, harga : ${produk.harga} `);

// Soal 2: tambah properti "diskon" dengan nilai 10 
produk.diskon = 50;
console.log(produk);
// Soal 3: hitung harga setelah diskon, simpan di variabel baru 
// rumus: harga - (harga * diskon / 100) 
produk.hargaProduk = produk.harga - (produk.harga * produk.diskon / 100);

// Soal 4 (tantangan): loop Object.entries(produk) 
// tampilkan setiap key dan value dalam format "key => value"
for (const [key, val] of Object.entries(produk)) {
    console.log(`${key} =>  ${val}`);
}