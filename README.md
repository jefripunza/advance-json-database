![banner](advance-json-database.png)

---

[![Custom badge](https://img.shields.io/endpoint?style=for-the-badge&url=https%3A%2F%2Fjefripunza-youtube-channel-badge.vercel.app%2Fapi%2Fsubscriber)](https://www.youtube.com/user/jefripunza/videos/)
[![Custom badge](https://img.shields.io/endpoint?style=for-the-badge&url=https%3A%2F%2Fjefripunza-youtube-channel-badge.vercel.app%2Fapi%2Fviews)](https://www.youtube.com/user/jefripunza/videos/)
<!-- [![Custom badge](https://img.shields.io/endpoint?style=for-the-badge&url=https%3A%2F%2Fjefripunza-youtube-channel-badge.vercel.app%2Fapi%2Fcomments)](https://www.youtube.com/user/jefripunza/videos/) -->
[![Custom badge](https://img.shields.io/endpoint?style=for-the-badge&url=https%3A%2F%2Fjefripunza-youtube-channel-badge.vercel.app%2Fapi%2Fvideos)](https://www.youtube.com/user/jefripunza/videos/)

# Donate

[![Donate](https://img.shields.io/badge/paypal-%2300457C.svg?&style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/paypalme/jefripunza)

# Sosial Media

[![Custom badge](https://img.shields.io/badge/youtube-%23FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/user/jefripunza/)
[![Custom badge](https://img.shields.io/badge/instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/jefripunza/)
[![Custom badge](https://img.shields.io/badge/facebook-%231877F2.svg?&style=for-the-badge&logo=facebook&logoColor=white)](https://fb.com/jefripunza/)
[![Custom badge](https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/jefripunza/)
[![Custom badge](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jefri-herdi-triyanto-ba76a8106/)
[![Custom badge](https://img.shields.io/badge/Website-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)](https://jefriherditriyanto.com/)




# Introduction
[![Custom badge](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Custom badge](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![Custom badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)
[![Custom badge](https://img.shields.io/badge/react_js-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Custom badge](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

Database atau basis data adalah kumpulan data yang dikelola sedemikian rupa berdasarkan ketentuan tertentu yang saling berhubungan sehingga mudah dalam pengelolaannya. Melalui pengelolaan tersebut pengguna dapat memperoleh kemudahan dalam mencari informasi, menyimpan informasi dan membuang informasi.
Seiring berjalannya waktu, pengelolaan database memang cukup rumit bagi orang-orang yang baru terjun kedunia pemrograman. Untuk itu saya membuat module ini agar orang-orang bisa mudah mengelola database mereka dengan fungsi yang mutakhir. Mudah-mudahan bermanfaat dan jangan lupa tekan <b>Star</b> untuk membantu saya terus berkembang...

---
<br />
<b></b>

# PERSIAPAN

Tidak terlalu rumit untuk inisial awal, cukup copy saja file <b>connection.js</b> nya kedalam project anda lalu di import dan langsung bisa digunakan
##### key system
```txt
_id               = primary key
_create_at        = kapan dibuat (timestamp)
_modified_at      = kapan terakhir dirubah (timestamp)
_modified_history = history modifikasi data (array)
_deleted_at       = menghapus sementara (tidak permanen) data dari list
_SEO              = untuk keperluan SEO
```

---
<br />


# PENGGUNAAN

### First Time

#### import library require and this module
```javascript
const path = require("path");
const Database = require("path/to/connection");
```

#### set file path & initial database
```javascript
// file path json, if not exist ? auto create file json
const file_path_db = path.join(__dirname, "test.txt"); // test.txt akan otomatis menjadi test.json

// for debug
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

//  request argument :
//      file_path_db  = nama file (dir_path + name) dan variabel database
//      default_value = nilai awal jika file database belum ada
//      generate      = membuat _id baru di setiap add data (default : true), true ? generateRandomString : integer auto increments

// Standar init (default)
const database = new Database(file_path_db);

// Standar init + default value (only array)
const database = new Database(file_path_db, defaule_array);

// Standar init + default value (only array) + generate
const database = new Database(file_path_db, defaule_array, true);
```

### CRUD

#### add data
```javascript
//  request argument :
//      new_data = (array)

database.add(new_data, result => {
    console.log(result);
});
```

#### read all list data (not delete)
```javascript
console.log(database.read());
```

#### read all list data (with delete)
```javascript
console.log(database.readAll());
```

#### read one data
```javascript
//  request argument :
//      select_data = single _id ? (string|int) : (object) # key => match value
        
// single _id (string|int)
console.log(database.one(key_id));

// multi select (object)  # key => match value
console.log(database.one({
    name: value,
}));
```

#### update data
```javascript
//  ketika merubah maka akan menambahkan 2 meta :
//      _modified_at        = waktu merubah (timestamp)
//      _modified_history   = data sebelumnya (array)

//  request argument :
//      select _id      = _id (string|int) 
//      new_data_object = new data => key => new value

database.update(key_id, {
    description: Database.generateRandomString(30), // function extra to rendom string with length
}, result => {
    console.log(result);
});
```

#### delete data (non permanent)
```javascript
//  request argument :
//      select _id = _id (string|int)

database.delete(key_id, result => {
    console.log(result);
});
```

#### delete key from data
```javascript
//  request argument :
//      select _id = _id (string|int)
//      select key = key yang ada didalam data (array)

database.deleteKey(key_id, [
    "_id", // tidak akan terhapus
    "id",
    "price",
], result => {
    console.log(result);
});
```

#### clear all data
```javascript
database.clearAllData(true, true, true, result => {
    console.log(result);
});
```

### Extra

#### Length of data
```javascript
console.log(database.length());
```

### Trash

#### list trash data
```javascript
console.log(database.trash());
```

### Super Function

#### search engine
```javascript
//  request argument :
//      select key (object) = pilih key yang value nya ingin di cari

//  keterangan :
//      nilai paling atas adalah score tertinggi dari pencarian
//      atau jika menggunakan addon SEO maka yang paling atas adalah data SEO
 
//  meta result :
//      time        = waktu mencari data pada database (second)
//      score       = nilai pencarian dari isi data (select key -> value)
//      result      = list data dari score terbaik sampai terendah
//      percentage  = nilai rekap dari setiap key yang di select
//      data        = real data

// for test
const keyword = "and or on for in is woman";

// execute
const result = database.search({
    description: keyword,
    title: keyword,
    category: keyword,
});

// default result
console.log(result);

// normal result
console.log(result.result.map(data => {
    return data.data
}));
```

#### pagination
```javascript
//  request argument :
//      show = berapa data yang ingin ditampilkan (int)
//      page = sekarang dihalaman berapa (int)
//      button_page = jumlah alinyemen button (auto alinyemen jika data diakhir) (int)
//          ex  : jika nilainya 2  =   [1] - [2] - [center] - [1] - [2]
//              : jika nilainya 1  =   [1] - [center] - [1]

//  meta pagination :
//      min         = nilai terkecil yang ditampilkan
//      max         = nilai terbesar yang ditampilkan
//      page        = halaman sekarang
//      button      = tombol pagination (auto generate)
//      totalRow    = total dari semua data
//      row         = list data

console.log(database.pagination(show, page, button_page));
```

### Addon

#### SEO managements
```javascript
//  request argument :
//      select _id = _id (string|int)
//      nilai SEO = (only integer), range ? unlimited integer

// add score SEO
database.addSEO(key_id, score, result => {
    console.log(result);
});

// list SEO only
console.log(database.listSEO());

// update score SEO
database.updateSEO(key_id, score, result => {
    console.log(result);
});

// delete SEO (not data, only SEO)
database.deleteSEO(key_id, result => {
    console.log(result);
});
```

### Combine Function

#### Search + Pagination
```javascript
//  request argument :
//      select key (object) = pilih key yang value nya ingin di cari
//      show = berapa data yang ingin ditampilkan
//      page = sekarang dihalaman berapa
//      button_page = jumlah alinyemen button

// for test
const keyword = "and or on for in is woman";

console.log(database.searchWithPagination({
    description: keyword,
    title: keyword,
    category: keyword,
}, show, page, button_page));
```

<br />

---
<br />












# Support the project

Apakah kamu menyukai project ini? Please support saya dengan menekan subscribe di [Youtube Channel](https://www.youtube.com/user/jefripunza/videos/) saya...

<br />

# Donation Please

Butuh ngopi gans, kasih lah untuk biaya pengembangan agar mudah membeli alat dan buat makan <br />
[![Donate](https://img.shields.io/badge/paypal-%2300457C.svg?&style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/paypalme/jefripunza)
