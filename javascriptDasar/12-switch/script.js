let angka = prompt('masukkan angka : ');


// alert(`angka yang memasukkan angka ${angka}`);

// if(angka === 1) {
//     alert(`anda memasukkan angka 1`);
// } else if (angka === 2) {
//     alert(`anda memasukkan angka 2`);
// }

switch (angka) {
    case "1" : 
        alert(`anda memasukkan angka 1`);
        break;
    case "2" : 
        alert(`anda memasukknan angka 2`);
        break;
    default : 
        alert(`angka yang dimasukkan anda salah`);
        break;
}
