
const ambilDataDariServer = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, nama: "mamat"},
                { id: 2, nama: "Susi Susanto"}
            ]);
        }, 2000);
    });
};

async function jalankanProses() {
    console.log("Sedang mengambil data");
    const data = await ambilDataDariServer();
    console.log("data berhasil diterim: ", data);
}

jalankanProses();