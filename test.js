// spasi terminal
for (let i = 0; i < 20; i++) {
    console.log("")
}

// Library
const path = require("path"),
    axios = require("axios");
// My Module
const Database = require("../database/connection");

// ==========================================================
// KETERANGAN (README)
/**
 * ==========================================================

Assalamu'alaikum...

file test ini akan mempresentasikan sebuah module dari Advance JSON Database.
jika bertemu dengan berikut ini maka lakukan sesuai perintah tester :
    "switch" = (comment / uncomment) + jalankan ulang

key system :
    _id = primary key
    _create_at = kapan dibuat (timestamp)
    _modified_at = kapan terakhir dirubah (timestamp)
    _modified_history = history modifikasi data (array)
    _deleted_at = menghapus sementara (tidak permanen) data dari list
    _SEO = untuk keperluan SEO

 * ==========================================================
 */

// for debug, jangan di uncomment
const defaule_array = [
    {
        nama: "Jefri Herdi Triyanto",
        kelas: "webdev",
        hobi: "ngoding",
    },
    {
        nama: "Jack Unch Paijo",
        kelas: "mlongo",
        hobi: "mancing",
    },
];

// ==========================================================
// ==========================================================
/**
 * Database
    database dengan single file json
 */
// ==========================================================
// ==========================================================
/**
 * Database init
 * di bagian ini adalah inisiasi dari database didalam parameter : 
        file_db = nama file (dir_path + name) dan variabel database
        default_value = nilai awal jika file database belum ada
        generate = membuat _id baru di setiap add data (default : true), true ? generateRandomString : integer auto increments
 */

const file_path_db = path.join(__dirname, "test.txt"); // test.txt akan otomatis menjadi test.json , jangan di uncomment

/**
    jalankan untuk mendapatkan file baru (otomatis create file)
    uncomment init (default)
    pilih salah satu saja
 */

// Standar init (default)
const database = new Database(file_path_db); // "switch"

/**
    untuk mencoba di bawah, harus selalu delete file test.json agar bisa terlihat perbedaannya
 */

// Standar init + default value (only array)
// const database = new Database(file_path_db, defaule_array); // "switch"

// Standar init + default value (only array) + generate
// const database = new Database(file_path_db, defaule_array, true); // "switch"

/**
    setelah mencoba semua, rubahlah init menjadi default dan hapus file test.json
    karena kita akan menggunakan data baru dari https://fakestoreapi.com
 */




// ==========================================================
/**
 * Basic
 */
// ==========================================================
/**
    melihat isi list data yang ada didalam file (yang tidak terhapus / data yang tidak mempunyai key _deleted_at)
 */

// console.log(database.read()); // "switch"

/**
    total data yang tersimpan
 */

// console.log(database.length()); // "switch"

// ==========================================================
/**
    menghapus semua data dengan mewajibkan memberi argumen true minimal 3x
 *  ~v "switch" v~
 */

// database.clearAllData(true, true, true, result => {
//     console.log(result);
// })

// ==========================================================
/**
 * menambah data (dengan test data dari fakestoreapi.com )
 * request argument :
        new_data = (array)

    menjalankan ini cukup 1x aja, kalo 2x data nya bakal duplicate

 *  ~v "switch" v~
 */

// axios.get('https://fakestoreapi.com/products')
//     .then(json => {
//         database.add(json.data, result => {
//             console.log(result);
//         });
//     })

// ==========================================================
/**
 * memanggil hanya satu data saja
 * request argument :
        select_data = single _id ? (string|int) : (object) # key => match value
 *  ~v "switch" v~
 */

/**
    single _id
 */

// console.log(database.one("wIjRqzdVi6zikL3pL53j")); // "switch"

/**
    multi select with object key
 *  ~v "switch" v~
 */

// console.log(database.one({
//     id: 19,
// }));

// ==========================================================
/**
 * merubah data
 * request argument :
        select _id = _id (string|int) 
        new_data_object = new data => key => new value
 * keterangan :
        ketika merubah maka akan menambahkan 2 meta :
            _modified_at = waktu merubah (timestamp)
            _modified_history = data sebelumnya (array)
 * ~v "switch" v~
 */

// database.update("wIjRqzdVi6zikL3pL53j", {
//     description: Database.generateRandomString(30),
// }, result => {
//     console.log(result);
// });

/**
    untuk melihat jelas _modified_history bisa buka di test.json
    lalu formatter agar tampilan bisa dilihat
 */

// ==========================================================
/**
 * menghapus data (tidak permanen)
 * request argument :
        select _id = _id (string|int) 
 *  ~v "switch" v~
 */

// database.delete("3yPmB12mcXRjwaHdBXjp", result => {
//     console.log(result);
// });

/**
 * menghapus key dari sebuah data
 * request argument :
        select _id = _id (string|int)
        select key = key yang ada didalam data (array)
 *  ~v "switch" v~
 */

// database.deleteKey("I94Knv8VhkfgrIP9hQ2R", [
//     "_id", // tidak akan terhapus
//     "id",
//     "price",
// ], result => {
//     console.log(result);
// });




// ==========================================================
// ==========================================================
/**
    tempat data terhapus sementara (non permanen)
 */

// console.log(database.trash()); // "switch"

/**
    menampilkan semua data yang tidak terhapus dan sudah terhapus
 */

// console.log(database.readAll()); // "switch"




// ==========================================================
// ==========================================================
/**
 * Super Function (Search Engine)
 * dapat mencari data dari keyword yang kita mau
 * request argument :
        select key (object) = pilih key yang value nya ingin di cari
 * keterangan :
        nilai paling atas adalah score tertinggi dari pencarian
        atau jika menggunakan addon SEO maka yang paling atas adalah data SEO
 * meta result :
        time = waktu mencari data pada database (second)
        score = nilai pencarian dari isi data (select key -> value)
        result = list data dari score terbaik sampai terendah
        percentage = nilai rekap dari setiap key yang di select
        data = real data
 */


/**
    uncomment ini jika ingin eksekusi search
    // dibawah ini jangan di uncomment (dibawah masih pakai)
 */
const keyword = "and or on for in is woman"; 
const result = database.search({
    description: keyword,
    title: keyword,
    category: keyword,
})

/**
    default result
 */

// console.log(result); // "switch"

/**
    jika ingin normal data tanpa meta
 *  ~v "switch" v~
 */

// console.log(result.result.map(data => {
//     return data.data
// }));

// ==========================================================
/**
 * SEO Managements, addon for Super Function (Search Engine)
    digunakan untuk menaikan data yang ingin di optimasi sehingga
    dengan score kecil pun akan tetap berada diatas
 */

/**
    memberikan nilai SEO untuk data yang dipilih
 * request argument :
        select _id = _id (string|int)
        nilai SEO = (only integer), range ? unlimited integer
 *  ~v "switch" v~
 */

// database.addSEO("3yPmB12mcXRjwaHdBXjp", 20, result => {
//     console.log(result);
// })

/**
    melihat list data yang hanya di optimasi SEO saja
 */

// console.log(database.listSEO()); // "switch"

/**
    melihat semua hasil pencarian dan juga SEO
 *  ~v "switch" v~
 */

// console.log(result.result.map(data => {
//     return {
//         percentage: data.percentage,
//         SEO: data.SEO,
//         score: data.data._SEO,
//         id: data.data.id,
//         _id: data.data._id,
//     }
// }));

/**
    merubah nilai SEO
    jika ingin melihat perubahan uncomment atas dari ini
 *  ~v "switch" v~
 */

// database.updateSEO("Df1yCQ8uBJe5CLA5hqMV", 80, result => {
//     console.log(result);
// })

/**
    menghapus optimasi SEO dari data yang dipilih (tidak menghapus datanya, hanya key _SEO)
 *  ~v "switch" v~
 */

// database.deleteSEO("LYIXJhIfoHiPLmCBYL0i", result => {
//     console.log(result);
// })




// ==========================================================
// ==========================================================
/**
 * Super Function (Pagination)
 * digunakan untuk kebutuhan membuat tabel yang advance / powerful
 * request argument :
        show = berapa data yang ingin ditampilkan (int)
        page = sekarang dihalaman berapa (int)
        button_page = jumlah alinyemen button (auto alinyemen jika data diakhir) (int)
            ex  : jika nilainya 2  =   [1] - [2] - [center] - [1] - [2]
                : jika nilainya 1  =   [1] - [center] - [1]
 * meta pagination :
        min = nilai terkecil yang ditampilkan
        max = nilai terbesar yang ditampilkan
        page = halaman sekarang
        button = tombol pagination (auto generate)
        totalRow = total dari semua data
        row = list data
 */

// console.log(database.pagination(4, 4, 2)); // "switch"




// ==========================================================
// ==========================================================
/**
 * Combine Function (Search + Pagination)
 * untuk menampilkan nilai tabel dari sebuah pencarian
 * request argument :
        select key (object) = pilih key yang value nya ingin di cari
        show = berapa data yang ingin ditampilkan
        page = sekarang dihalaman berapa
        button_page = jumlah alinyemen button
 *  ~v "switch" v~
 */

// console.log(database.searchWithPagination({
//     description: keyword,
//     title: keyword,
//     category: keyword,
// }, 4, 4, 2));







/**
 * Mohon bantu tambah bintang / add star di project ini, arigato.....
 */






/**
 * Skip Project
 */
// // ==========================================================
// // ==========================================================
// /**
//  * DataKey
//  * database dengan file json mandiri dari dalam folder terpilih
//  * 
//  * uncomment Database init diatas agar tidak mengganggu CLI
//  */
// // ==========================================================
// // ==========================================================

// // const datakey = new DataKey(path.join(__dirname, "test"));