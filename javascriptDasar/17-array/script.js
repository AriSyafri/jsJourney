
// array string
const siswa = ["mamat", "budi", "siti"];

// array angka
const score = [90, 87, 56];

// array kosong 
const hasil = [];

// array campur
const campur = ["halo", 42, true];

// menghitung jumlah array
console.log(siswa.length);

// memeriksa array
console.log(Array.isArray(score));

// loop
const nilai = [85, 42, 91, 73, 58]; 
 // coba ganti dengan for...of atau forEach! 
for (let i = 0; i < nilai.length; i++) { 
 console.log("Index " + i + ": " + nilai[i]); 
}

for (const value of nilai ) {
   console.log(value)
}

nilai.forEach(score => {
console.log(score)
});



// latihan
const angka = [3, 7, 2, 9, 4, 6, 1, 8]; 
// Soal 1: tampilkan elemen pertama dan terakhir 
console.log(angka[0]);
console.log(angka[7]);
console.log(angka.length - 1);
// Soal 2: tambahkan angka 10 di akhir array 
angka.push(10);
console.log(angka);
// Soal 3: loop dan tampilkan hanya angka yang > 5 
for (let i = 0; i < angka.length; i++){
    if (angka[i] > 5) {
        console.log(angka[i]);
    }
}
// Soal 4 (tantangan): hitung total semua angka dengan loop 
let total = 0;
for (let i = 0; i < angka.length; i++){
    total = total + angka[i];
}
// lalu tampilkan hasilnya
console.log("total: " + total);