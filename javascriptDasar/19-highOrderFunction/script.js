
// .map() — Sang Pengubah (Transformer)
// Gunakan .map() ketika kamu ingin mengubah setiap elemen dalam array menjadi bentuk baru, tapi jumlah elemennya tetap sama.
const angka = [1,2,3];
const teksAngka = angka.map(item => `Angka ke-${item}`);

console.log(teksAngka);


// 2. .filter() — Sang Penyeleksi (Gatekeeper)
// Gunakan .filter() ketika kamu ingin mengambil beberapa elemen saja berdasarkan kondisi tertentu.
const daftarHarga = [5000, 25000, 8000, 20000];
const hargaMahal = daftarHarga.filter(harga => harga > 10000);
console.log(hargaMahal);

// .reduce() — Sang Akumulator (Collector)
// Gunakan .reduce() ketika kamu ingin mengolah seluruh isi array menjadi satu nilai tunggal (misalnya total jumlah, rata-rata, atau menggabungkan objek).
const keranjang = [100, 200, 300];
const total =  keranjang.reduce((acc, curr) => acc + curr, 0);
//  0 diatas adalah nilai awal / initial value
console.log(total);


// latihan
const siswa = [
    { nama: "Ari", nilai: 85 },
    { nama: "Budi", nilai: 60 },
    { nama: "Cici", nilai: 90 },
    { nama: "Dodi", nilai: 70 }
];

const siswaLulus = siswa.filter(siswa => siswa.nilai >= 75);
console.log(siswaLulus);

const namaSiswaLulus = siswaLulus.map(item => `nama : ${item.nama}`)
console.log(namaSiswaLulus);

// coba chaining
const hasilFinal = siswa 
    .filter(student => student.nilai >= 75)
    .map(student => student.nama);
console.log(hasilFinal);


const totalNilai = siswa.reduce((acc, curr) => {
    return acc + curr.nilai;
}, 0);

const totalNilai2 = siswa.reduce((acc, curr) => acc + curr.nilai, 0);

console.log(totalNilai);
console.log(totalNilai2);

// latihan 1

const dataSpp = [
    { nama: "Budi", sudahBayar: false, nominal: 500000 },
    { nama: "Cici", sudahBayar: true, nominal: 500000 },
    { nama: "Dodi", sudahBayar: false, nominal: 700000 },
    { nama: "Riyan", sudahBayar: true, nominal: 500000 },
    { nama: "Sisil", sudahBayar: false, nominal: 500000 },
    { nama: "Deden", sudahBayar: true, nominal: 500000 },
];

const filteringSpp = dataSpp
    // .filter(data => data.sudahBayar === false)  
    .filter(data => !data.sudahBayar)  
    .map(data => `Tagihan untuk nama : ${data.nama} sebesar ${data.nominal}`);
console.log(filteringSpp);

// latihan 2
const rakBuku = [
    {judul: "Matematika", stok: 15},
    {judul: "Bahasa Indonesia", stok: 10},
    {judul: "IPA", stok: 20},
    {judul: "Matematika", stok: 15},
];


const totalStok = rakBuku.reduce((totalSementara, totalSekarang) => {
    return totalSementara + totalSekarang.stok;
},0)
console.log(totalStok);

// latihan 3
const semuaSiswa = ["Ari Syafri", "Budi Santoso", "Ariana Grande", "Dodi Doremi"];
const kataKunci = "Ari";

const findSiswa = semuaSiswa
    .filter(nama => nama.includes(kataKunci));

console.log(findSiswa);