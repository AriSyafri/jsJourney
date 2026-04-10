// destructuring object
const guru = {
    nama: "Ari Syafri",
    mapel: "Web Dev",
    pegalaman: 5
};

const { nama, mapel } = guru;
console.log(nama);
console.log(mapel);

// destructuring array
const warnaBrand = ["#000000", "#ffffff", "#ff0000"];
const [hitam, putih] = warnaBrand;
console.log(hitam);

// spread operator 
const siswaLama = ["Budi", "Cici"];
const siswaBaru = ["Dodi", "Eka"];

const semuaSiswa = [...siswaLama ,...siswaBaru, "Agus"];
console.log(semuaSiswa);

// memperbarui object
const profilSiswa = {
    nama: "Ari", 
    kelas: "X MIPA 1",
    alamat: "Jakarta"
}

const updateProfile = {...profilSiswa, alamat: "Bandung"};
console.log(updateProfile);

// latihan 1
const dataMapel = {
    id: "BIO101",
    namaMapel: "Biologi",
    guruPengampu: "Ibu Sari",
    ruangan: "Lab Sains"
};

const { namaMapel, guruPengampu } = dataMapel;
console.log(namaMapel);
console.log(guruPengampu);

// latihan 2
const hadirPagi = ["Ari", "Budi"];
const hadirSiang = ["Cici", "Dodi"];
const totalHadir = [...hadirPagi, ...hadirSiang, "Eka" ];
console.log(totalHadir);

// destructuring dalam perulangan looping
const daftarNilai = [
    {nama: "Ari", skor: 90},
    {nama: "Budi", skor: 80},
];

// destructuring langsung di dalam .foreach
daftarNilai.forEach(({ nama, skor }) => {
    console.log(`${nama} mendapatkan nilai ${skor}`);
});

// destucturing dengan map
const daftarNilai2 = daftarNilai
    .map(data => `${data.nama} mendapatkan nilai ${data.skor}`);
console.log(daftarNilai2);

// latihan update nilai
const siswa = [
    { id: 1, nama: "Ari", nilai: 90 },
    { id: 2, nama: "Budi", nilai: 70 }
];

const updateId = 2;
const dataUpdate = siswa.map(item => {
    if (item.id === updateId) {
        return { ...item, nilai: 85 };
    }
    return item;
});

console.log(dataUpdate);

// latihan desturcturing dan spread operator
const inventaris = [
    { id: 1, barang: "Laptop", status: "Tersedia" },
    { id: 2, barang: "Proyektor", status: "Rusak" }
];


daftarInventaris = inventaris.forEach(({ barang, status}) => {
    console.log(`nama barang ${barang} status : ${status}`);
});
console.log(daftarInventaris);

const dataInventaris = [...inventaris, {id: 3, barang: "Papan Tulis", status: "Tersedia"}];
console.log(dataInventaris);
 