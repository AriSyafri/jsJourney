
// latihan 1

console.log(konversiKeRupiah(2));

function konversiKeRupiah (nominalUSD) {
    const usd = 15000;
    return nominalUSD * usd;
}

// latihan 2

const cekStatusLulus = function(nilai){
    if (nilai >= 75) {
        return "Lulus";
    } else {
        return "Remedial";
    }
}

const cekStatusLulus2 = (nilai) => nilai >= 75 ? "Lulus" : "Remedial";
console.log(cekStatusLulus(80));
console.log(cekStatusLulus2(60));

console.log("===============");

// latihan 3

const hitungDiskon = function(hargaTotal, persenDiskon) {
    let hargaDiskon = hargaTotal * (persenDiskon / 100);
    return hargaTotal - hargaDiskon;
}
console.log(hitungDiskon(10000, 10));



