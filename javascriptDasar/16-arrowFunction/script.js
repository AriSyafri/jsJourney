
// function expression (cara lama)
const salam = function(nama) {
    return "Halo " + nama;
};

const salam2 = (nama) => {
    return "function 2 " + nama;
}

console.log(salam("ujang"));
console.log(salam2("mamat"));

// tugas A
const tambah = (a,b) => {
    return a + b;
}

// tugas B
const isGenap = angka => angka % 2 === 0;

// tugas C
const buatProfil =  nama => "Nama saya adalah " + nama;

console.log(tambah(2, 3));
console.log(isGenap(9));
console.log(buatProfil("mamat"));

// latihan 1 
const cekLulus = nilai => {
    if (nilai >= 70) {
        return "Lulus";
    }
    return "Tidak Lulus";
}

console.log(cekLulus(90));

// latihan 2
const hitungDiskon = (harga, persen) => {
    const diskon = harga * (persen / 100); 
    return harga - diskon; 
}

console.log(hitungDiskon(100000, 20));