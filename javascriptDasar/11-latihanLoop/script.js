
const jmlAngkot = 10;

angkotBeroperasi = 5;

for(angkot = 1; angkot <= jmlAngkot; angkot++) {
    if (angkot <= 5) {
        console.log(`angkot ${angkot} beroperasi`)
    } else if (angkot === 7 || angkot === 9) {
        console.log(`angkot ${angkot} mogok`)
    } else {
        console.log(`angkot ${angkot} libur`)
    }
}