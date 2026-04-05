

function jumlahVolumeDuaKubus(a, b) {
    var volumeA;
    var volumeB;
    var total;   

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

function tambah(a,b) {
    return a + b;
}

function kali(a,b) {
    return a * b;
}

var a = parseInt(prompt("masukan nilai 1: "));
var b = parseInt(prompt("Masukkan nilai 2 : "));
var hasil = tambah(a*2, b*2);

var hasil2 = kali(tambah(5,5), tambah(5,5));
console.log(hasil2);
console.log(hasil);

console.log(jumlahVolumeDuaKubus(10, 5));