// Array untuk menyimpan informasi barang
var daftarBelanja = [];

// Fungsi untuk menambah barang ke dalam array dan menghitung total belanja
function tambahBarang() {
  var kodeBarang = document.getElementById("kodeBarang").value;
  var hargaBarang = parseInt(document.getElementById("harga").value) || 0;

  // Menambahkan barang ke dalam array
  daftarBelanja.push({ kode: kodeBarang, harga: hargaBarang });

  // Menghitung total belanja
  var totalBelanja = 0;
  for (var i = 0; i < daftarBelanja.length; i++) {
    totalBelanja += daftarBelanja[i].harga;
  }

  // Menampilkan hasil dengan pemformatan Rp
  document.getElementById("outputResult").innerText =
    "Total Belanja: Rp " + formatRupiah(totalBelanja);
}

// Fungsi untuk memformat angka ke dalam format mata uang Rupiah
function formatRupiah(angka) {
  var reverse = angka.toString().split("").reverse().join("");
  var ribuan = reverse.match(/\d{1,3}/g);
  var formatted = ribuan.join(".").split("").reverse().join("");
  return formatted;
}
