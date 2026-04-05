var jmlAngkot = 10;
var angkotBeroperasi = 9;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    noAngkot++;
}

// contoh lain 
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++){
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
}


// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++){
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
// }