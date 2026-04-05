
let nilaiAwal = 1; 

let user = 7;
let counter = 0;

console.log(`nilai yang dimasukkan ${user}`);

for ( nilaiAwal; nilaiAwal <= 10; nilaiAwal++) {
    const random10 = Math.floor(Math.random() * 10) + 1;
    console.log(`putaran ke- ${nilaiAwal}`);
    console.log(`nilai : ${random10}`);

    if (random10 === user) {
        console.log(`nilai benar !`);
        counter++;
    }
}
console.log(`jumlah jawaban benar ${counter}`);
