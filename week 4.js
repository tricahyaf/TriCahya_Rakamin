// Fungsi untuk menghasilkan nilai acak antara 1 dan 50
function getRandomValue() {
  return Math.floor(Math.random() * 50) + 1;
}

// Inisialisasi array dengan 100 nilai acak
const nilaiAcak = [];
for (let i = 0; i < 100; i++) {
    nilaiAcak.push(getRandomValue());
}

// Inisialisasi array untuk nilai genap dan ganjil
const arrayGenap = [];
const arrayGanjil = [];

// Memisahkan nilai genap dan ganjil ke dalam array masing-masing
for (let i = 0; i < nilaiAcak.length; i++) {
    if (i % 2 === 0) {
        arrayGenap.push(nilaiAcak[i]);
    } else {
        arrayGanjil.push(nilaiAcak[i]);
    }
}

// Menghitung min, max, total, dan rata-rata untuk array genap
const minGenap = Math.min(...arrayGenap);
const maxGenap = Math.max(...arrayGenap);
const totalGenap = arrayGenap.reduce((acc, curr) => acc + curr, 0);
const rataRataGenap = totalGenap / arrayGenap.length;

// Menghitung min, max, total, dan rata-rata untuk array ganjil
const minGanjil = Math.min(...arrayGanjil);
const maxGanjil = Math.max(...arrayGanjil);
const totalGanjil = arrayGanjil.reduce((acc, curr) => acc + curr, 0);
const rataRataGanjil = totalGanjil / arrayGanjil.length;

// Menampilkan hasil
console.log("Array dengan jumlah index 100:");
console.log(nilaiAcak);

console.log("\nArray genap dengan jumlah index 50:");
console.log(arrayGenap);

console.log("\nArray ganjil dengan jumlah index 50:");
console.log(arrayGanjil);

console.log("\nMin, Max, Total, Rata-rata pada array Genap:");
console.log(`Min: ${minGenap}`);
console.log(`Max: ${maxGenap}`);
console.log(`Total: ${totalGenap}`);
console.log(`Rata-rata: ${rataRataGenap}`);

console.log("\nMin, Max, Total, Rata-rata pada array Ganjil:");
console.log(`Min: ${minGanjil}`);
console.log(`Max: ${maxGanjil}`);
console.log(`Total: ${totalGanjil}`);
console.log(`Rata-rata: ${rataRataGanjil}`);

// Perbandingan nilai
console.log("\nPerbandingan nilai:");
console.log(`Min lebih besar pada array ${minGenap > minGanjil ? 'genap' : 'ganjil'}`);
console.log(`Max lebih besar pada array ${maxGenap > maxGanjil ? 'genap' : 'ganjil'}`);
console.log(`Total ${totalGenap === totalGanjil ? 'sama pada kedua array' : `berbeda antara array genap dan ganjil`}`);
console.log(`Rata-rata lebih besar pada array ${rataRataGenap > rataRataGanjil ? 'genap' : 'ganjil'}`);