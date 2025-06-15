const tableData = [
  {
    section: "Driver Vil",
    rows: [
      {
        nomor: 1,
        code: "A. General Traffic Violations",
        keterangan: `a. Mengemudi di jalur jalan yang salah.
b. Putar balik secara ilegal, yaitu melakukan putar balik yang tidak pada tempatnya.
c. Memotong jalur saat mengemudi, dapat menyebabkan banyak kecelakaan berbahaya.
d. Mengemudi diatas bahu jalan/trotoar.
e. Penggunaan klakson yang berlebihan.
f. Tidak mematuhi persyaratan keselamatan berkendara (sepeda motor: helm) (mobil: sabuk pengaman)`,
        fine: 150,
        time: 0
      },
      {
        nomor: 2,
        code: "B. Failed or Refuse to Pay Any Fine Ticket Given",
        keterangan: "Seseorang yang tidak dapat/menolak membayar denda yang diberikan oleh petugas penegak hukum.",
        fine: 65,
        time: 15
      },
      {
        nomor: 3,
        code: "C. Driving Any Type of Vehicle Without an Official Driving License",
        keterangan: `a. Seseorang yang mengemudikan kendaraan bermotor tanpa memiliki SIM resmi.
b. Seseorang yang mengemudikan kendaraan bermotor dengan SIM resmi yang telah kedaluwarsa.
c. Seseorang yang mengemudikan kendaraan bermotor dengan SIM resmi yang ditangguhkan.`,
        fine: 100,
        time: 15
      },
      {
        nomor: 4,
        code: "D. Maneuver any sea vehicles without official sailing licenses",
        keterangan: `A. Seseorang yang menggerakkan perahu bermotor atau kapal layar tanpa mempunyai izin kapal resmi.
B. Seseorang yang menggerakkan kapal bermotor atau kapal layar yang izin kapal dinasnya telah habis masa berlakunya.
C. Seseorang yang menggerakkan perahu bermotor atau kapal layar yang izin kapal dinasnya ditangguhkan`,
        fine: 150,
        time: 20
      },
      {
        nomor: 5,
        code: "E. Speeding",
        keterangan: `Mengoperasikan kendaraan dengan kecepatan melebihi batas kecepatan di jalan umum.
City: 50 mph,
County: 60 mph,
Highway: 80 mph,`,
        fine: 100,
        time: 0
      },
      {
        nomor: 6,
        code: "I. Vehicle Parking Violation",
        keterangan: `a. Seorang pengemudi yang dengan sengaja melanggar tata tertib parkir.
b. Seorang pengemudi yang parkir di properti pribadi seseorang.
c. Seorang pengemudi yang parkir di kompleks gedung Pemerintah.
d. Seorang pengemudi yang parkir di area 10 m yang diberi tanda 'Dilarang Parkir'.
e. Di tanah milik pribadi milik orang lain.
f. Seorang pengemudi yang parkir di jalan raya.
g. Untuk area parkir dengan meteran parkir, diperlukan pembayaran pada saat memarkir kendaraan sesuai waktu/durasi yang ditentukan`,
        fine: 150,
        time: 0
      },
      {
        nomor: 7,
        code: "F. Illegal Modifications On Vehicles",
        keterangan: `Modifikasi ilegal dapat ditemukan di bawah,
A. Injeksi NOS.
B. Berwarna tampilan depan kendaraan (kursi pengemudi).
C. Bingkai piring.
D. Sayap spoiler tinggi yang menghalangi pandangan belakang pengemudi.
e. Penggunaan hidrolik secara ilegal.
F. Stiker tersinggung/mengganggu.`,
        fine: 150,
        time: 0
      },
      {
        nomor: 8,
        code: "G. Unregistered Vehicles",
        keterangan: `a. Mengemudikan kendaraan yang tidak terdaftar.
b. Memarkir kendaraan yang tidak terdaftar.
c. Registrasi kendaraan tidak valid / tidak ada yang ditemukan dari pengemudi.`,
        fine: 100,
        time: 15
      },
      {
        nomor: 9,
        code: "H. Vehicular Endangerment",
        keterangan: `a. Tabrak Lari, seorang pengemudi yang sengaja atau tidak sengaja menabrak seseorang dan meninggalkan orang tersebut terluka atau meninggal tanpa memberikan pertolongan lebih lanjut.
b. Seseorang yang mengemudikan kendaraan apa pun yang dapat membahayakan pejalan kaki atau penumpang.`,
        fine: 250,
        time: 20
      },
      {
        nomor: 10,
        code: "I. Vehicular Manslaughter",
        keterangan: `a. Membunuh seseorang secara sengaja dengan menggunakan kendaraan apa pun yang dapat dioperasikan.
b. Pembunuhan tidak disengaja adalah tindakan membunuh orang lain secara melawan hukum tanpa niat jahat atau niat yang kuat.`,
        fine: 250,
        time: 25
      },
      {
        nomor: 11,
        code: "J. DWI or DUI",
        keterangan: `a. Mengemudi saat sedang terpengaruh narkoba.
b. Mengemudi sambil mabuk.
c. Mengemudi di bawah pengaruh alkohol.`,
        fine: 100,
        time: 15
      },
      {
        nomor: 12,
        code: "K. Illegal Street Racing",
        keterangan: `Setiap acara ilegal yang dapat membahayakan/menimbulkan kerugian kecil atau besar pada seseorang/fasilitas umum tidak diperbolehkan. Acara harus didaftarkan pada pihak berwenang dan semua kendaraan tidak boleh memasang modifikasi ilegal apa pun pada kendaraannya (ikuti peraturan (2) E).`,
        fine: 150,
        time: 25
      },
      {
        nomor: 13,
        code: "L. Evading From Police",
        keterangan: `a. Pengemudi yang sengaja menghindari Polisi.
b. Menghindari penghentian atau pengejaran polisi baik dengan menggunakan sirene dan klakson aktif maupun dengan atau tanpa menggunakan megafon.`,
        fine: 100,
        time: 20
      },
      {
        nomor: 14,
        code: "M. Failure to Yield to A Roadblock",
        keterangan: `Kegagalan untuk mematuhi penghalang jalan apa pun yang didefinisikan sebagai rambu atau perangkat apa pun di lalu lintas yang dimaksudkan untuk membatasi pengemudi mana pun untuk lewat.`,
        fine: 200,
        time: 0
      },
      {
        nomor: 15,
        code: "N. Following An Emergency Vehicle",
        keterangan: `Mengikuti kendaraan darurat yang merespons tanpa alasan yang sah (mengejar/menanggapi suatu lokasi).`,
        fine: 200,
        time: 0
      },
      {
        nomor: 16,
        code: "O. Altering or Changing a Vehicle Identification Number",
        keterangan: `Seseorang yang dengan sengaja mengubah, mengganti, atau menghancurkan nomor identifikasi kendaraan (VIN).`,
        fine: 100,
        time: 20
      },
      {
        nomor: 17,
        code: "P. Driving Without License",
        keterangan: `Mengendarai kendaraan tanpa lisensi yang resmi.`,
        fine: 250,
        time: 5
      }
    ]
  },
  {
    section: "Drug Offenses",
    rows: [
      {
        nomor: 1,
        code: "A. Possessing of Marijuana / Pots (Small Amount)",
        keterangan: `1. Seseorang yang memiliki 1-50 gram Marijuana.
2. Seseorang yang memiliki 1-50 gram Marijuana di rumah/apartemennya.
3. Seseorang yang memiliki 1-50 gram Marijuana di kendaraannya.`,
        fine: 225,
        time: 10
      },
      {
        nomor: 2,
        code: "B. Possessing of Marijuana / Pots (Large Amount)",
        keterangan: `1. Seseorang yang memiliki 51-100 gram Marijuana.
2. Seseorang yang memiliki 51-100 gram Marijuana di rumah/apartemennya.
3. Seseorang yang memiliki 51-100 gram Marijuana di kendaraannya.`,
        fine: 300,
        time: 20
      },
      {
        nomor: 3,
        code: "C. Possessing of Cocaine / Crack (Small Amount)",
        keterangan: `1. Seseorang yang memiliki 1-50 gram Cocaine/Crack.
2. Seseorang yang memiliki 1-50 gram Cocain/Crack di rumah/apartemennya.
3. Seseorang yang memiliki 1-50 gram Cocain/Crack di kendaraannya.`,
        fine: 300,
        time: 20
      },
      {
        nomor: 4,
        code: "D. Possessing of Cocaine / Crack (Large Amount)",
        keterangan: `1. Seseorang yang memiliki 51-100 gram Cocain/Crack.
2. Seseorang yang memiliki 51-100 gram Cocain/Crack di rumah/apartemennya.
3. Seseorang yang memiliki 51-100 gram Cocain/Crack di kendaraannya.`,
        fine: 500,
        time: 25
      },
      {
        nomor: 5,
        code: "E. IUI or IWI",
        keterangan: "Seseorang yang berada di bawah pengaruh obat-obatan terlarang di properti publik/swasta.",
        fine: 150,
        time: 15
      },
      {
        nomor: 6,
        code: "F. Selling or distributing of illegal drugs",
        keterangan: `1. Seseorang yang tertangkap menjual obat-obatan terlarang kepada orang lain.
2. Seseorang yang tertangkap mengedarkan obat-obatan terlarang kepada orang lain.`,
        fine: 500,
        time: 25
      },
      {
        nomor: 7,
        code: "G. Drug Manufacturing",
        keterangan: `1. Individu yang terlibat dalam setiap tahapan proses produksi obat-obatan terlarang.
2. Mereka yang menjual bahan kimia prekursor tertentu, peralatan khusus, atau sekadar menawarkan bantuan untuk memproduksi obat-obatan.`,
        fine: 200,
        time: 35
      },
      {
        nomor: 8,
        code: "H. Being Present for Illegal Drug Use",
        keterangan: "Hadir di tempat terjadinya penggunaan zat terlarang. Hanya jika Anda membantu pengguna, seperti menjadi pengawas, dan membantu mereka mengonsumsi.",
        fine: 100,
        time: 10
      }
    ]
  },
   {
    section: "Pelanggaran Umum",
    rows: [
      {
        nomor: 1,
        code: "A. Initiating A Riot",
        keterangan: `1. Seseorang yang mengumpulkan massa untuk menciptakan kekacauan.
2. Seseorang yang memprovokasi massa untuk menimbulkan kekacauan.`,
        fine: 200,
        time: 15
      },
      {
        nomor: 2,
        code: "B. Failing to Disperse After Lawfully Ordered by The Officials",
        keterangan: "Seseorang yang gagal meninggalkan area tertentu yang diperintahkan oleh Pejabat Pemerintah.",
        fine: 250,
        time: 20
      },
      {
        nomor: 3,
        code: "C. Participating in a Riot",
        keterangan: "Suatu kelompok atau individu yang berpartisipasi dalam suatu kerusuhan karena menyebabkan cedera berat atau ringan atau pelanggaran hukum.",
        fine: 75,
        time: 10
      },
      {
        nomor: 4,
        code: "D. Spitting in Public Space",
        keterangan: "Seseorang yang meludah dengan sembarangan di Tempat Umum.",
        fine: 150,
        time: 0
      },
      {
        nomor: 6,
        code: "E. Pee in Public drugs",
        keterangan: "Seseorang yang membuang kotoran atau air seninya sembarangan di Tempat Umum.",
        fine: 150,
        time: 0
      },
      {
        nomor: 7,
        code: "F. Drunk in Public Space",
        keterangan: `Seseorang yang kehilangan kesadarannya akibat mengonsumsi alkohol di Tempat Umum.
Seseorang yang tidak dapat mengendalikan emosi atau perasaannya sehingga menyebabkan tindakan terlarang sebagai akibat dari mengonsumsi alkohol di Tempat Umum.`,
        fine: 200,
        time: 0
      },
      {
        nomor: 8,
        code: "G. Vilification",
        keterangan: "Tindakan mengatakan atau menulis hal-hal yang tidak mengenakkan tentang seseorang atau sesuatu, dengan tujuan menyebabkan orang lain memiliki pendapat yang buruk tentang mereka.",
        fine: 100,
        time: 15
      },
      {
        nomor: 9,
        code: "H. Hate Speech",
        keterangan: "Menyebarkan opini yang menyebarkan kebencian terhadap seseorang atau suatu kelompok.",
        fine: 150,
        time: 20
      },
      {
        nomor: 10,
        code: "I. Vigilantism",
        keterangan: "Menyebarkan opini yang menyebarkan kebencian terhadap seseorang atau suatu kelompok.",
        fine: 300,
        time: 30
      },
      {
        nomor: 11,
        code: "J. Disturbing Public Peace",
        keterangan: "Tindak pidana yang terjadi apabila seseorang terlibat dalam suatu bentuk perilaku tidak tertib di masyarakat, misalnya berkelahi atau menimbulkan kebisingan yang berlebihan.",
        fine: 100,
        time: 15
      },
      {
        nomor: 12,
        code: "K. Brawl in Public Space",
        keterangan: "Seseorang yang melakukan perkelahian di ruang publik dan menyebabkan gangguan terhadap publik.",
        fine: 150,
        time: 20
      },
      {
        nomor: 13,
        code: "L. Accessories Disturbance",
        keterangan: "Tindak pidana yang terjadi apabila seseorang terlibat dalam suatu bentuk perilaku tidak tertib di masyarakat, misalnya berkelahi atau menimbulkan kebisingan yang berlebihan.",
        fine: 100,
        time: 15
      },
      {
        nomor: 14,
        code: "M. Jaywalk",
        keterangan: "Menyeberang atau berjalan di jalan atau lintasan secara melawan hukum atau tanpa memperhatikan lalu lintas yang datang.",
        fine: 250,
        time: 0
      },
      {
        nomor: 15,
        code: "O. Unlawful Assembly",
        keterangan: "Bilamana dua orang atau lebih berkumpul bersama untuk melakukan suatu perbuatan melawan hukum, atau melakukan perbuatan sah dengan cara yang keras, riuh, atau gaduh, maka perkumpulan tersebut merupakan perkumpulan yang melawan hukum.",
        fine: 100,
        time: 20
      },
      {
        nomor: 16,
        code: "P. Stalking",
        keterangan: "Jenis perilaku ini termasuk mengikuti seseorang, muncul di rumah atau tempat usaha seseorang, melakukan panggilan telepon yang mengganggu, meninggalkan pesan tertulis atau benda, atau merusak properti seseorang.",
        fine: 200,
        time: 20
      },
      {
        nomor: 17,
        code: "Q. Puvkic Intoxication",
        keterangan: "Dalam keadaan mabuk dan tidak dapat berperilaku dan mengendalikan diri, dan atau merugikan/mengganggu orang lain.",
        fine: 250,
        time: 10
      },
      {
        nomor: 18,
        code: "R. Animal Abuse",
        keterangan: "Menyebabkan kerugian kecil/besar terhadap spesies hewan apa pun.",
        fine: 500,
        time: 20
      },
      {
        nomor: 19,
        code: "S. Animal Cruelty",
        keterangan: "Perlakuan yang kejam atau tidak biasa terhadap hewan.",
        fine: 300,
        time: 0
      }
    ]
  },
     {
    section: "Crime Againts Justice",
    rows: [
      {
         nomor: 1,
        code: "A. Obstruction of Justice",
        keterangan: `1). Melakukan gangguan terhadap Petugas Polisi yang sedang bertugas.
2). Berbohong kepada Petugas Polisi selama penyelidikan atau memberikan informasi.
3). Mengganggu atau mengganggu pejabat publik atau petugas penegak hukum yang sedang bertugas.
4). Sengaja mengintimidasi penegak hukum selama bertugas.
5). Menolak dan melawan petugas polisi yang sedang bertugas saat proses penangkapan.`,
        fine: 30,
        time: 15
      },
      {
        nomor: 2,
        code: "B. Abusing Government Hotline",
        keterangan: `1). Seseorang yang menelepon 911 untuk tujuan non darurat.
2). Seseorang yang memprovokasi melalui hotline pemerintah.
3). Penelepon palsu, penelepon iseng.`,
        fine: 100,
        time: 10
      },
      {
        nomor: 3,
        code: "C. Governments Attribute",
        keterangan: `1). Seseorang yang menggunakan atribut pemerintahan apa pun.
2). Topi polisi, kevlar, bintang sheriff, lencana polisi, rompi layanan pemerintah.
3). Dan atribut pemerintahan lainnya.

If a person evidently wearing any kind of the attributes above, it is a verbal warn, and a fine of $100 and 20 months of jail will be given.`,
        fine: 100,
        time: 20
      },
      {
        nomor: 4,
        code: "D. Impersonating Government Staff",
        keterangan: `1). Seseorang yang berpura-pura menjadi Staf Pemerintah untuk kepentingan pribadi atau sesuatu di ruang publik.
2). Seseorang yang menyamar sebagai Staf Pemerintah untuk mendapatkan keuntungan sesuai dengan tindakannya.`,
        fine: 100,
        time: 25
      },
      {
        nomor: 5,
        code: "E. Attempting to Bribe or Corrupt Any Public Officials",
        keterangan: `1). Seseorang yang mencoba menawarkan uang kepada Pejabat Publik sebagai imbalan hukuman yang lebih ringan.
2). Seseorang yang mencoba menawarkan jasa kepada Pejabat Publik sebagai imbalan atas hukuman yang lebih rendah.`,
        fine: 100,
        time: 15
      },
      {
        nomor: 6,
        code: "F. Attempting to bribe, corrupt or prevent any crime’s witnesses to step out and give out information to law enforcers",
        keterangan: `1). Seseorang yang mencoba menawarkan uang kepada orang lain sebagai imbalan karena tidak melaporkan suatu kejahatan.
2). Seseorang yang mencoba menawarkan jasa kepada orang lain sebagai imbalan karena tidak melaporkan suatu kejahatan.`,
        fine: 60,
        time: 10
      },
      {
        nomor: 7,
        code: "G. Making a False Report",
        keterangan: "Membuat laporan palsu kepada petugas polisi dengan tujuan mengganggu penyelidikan kriminal.",
        fine: 200,
        time: 20
      },
      {
        nomor: 8,
        code: "H. Giving False Information to the Police Officials",
        keterangan: "Memberikan informasi palsu atau informasi panggilan palsu berdasarkan tindak pidana atau non tindak pidana melalui Hotline Pejabat Kepolisian.",
        fine: 125,
        time: 20
      },
      {
        nomor: 9,
        code: "I. Perjury",
        keterangan: `1). Tindakan berbohong setelah mengucapkan sumpah atau janji untuk mengatakan kebenaran kepada notaris, panitera pengadilan, atau pejabat lainnya.
a). Kesaksian Lisan (sebagai bagian dari proses pengadilan apa pun)
b). Sesuatu yang telah kamu tulis
c). Menandatangani atau mengakui dokumen hukum, seperti surat pernyataan, yang diketahui mengandung informasi palsu
2). Subornasi sumpah palsu adalah tindakan mendorong atau membantu sumpah palsu, dan juga dianggap sebagai kejahatan`,
        fine: 350,
        time: 20
      },
      {
        nomor: 10,
        code: "J. Assaulting on LEO",
        keterangan: `1). Seseorang yang menyerang petugas polisi dengan atau tanpa senjata.
2). Seseorang yang dengan sengaja menimbulkan kerugian kecil/besar pada LEO mana pun.`,
        fine: 150,
        time: 10
      },
      {
        nomor: 11,
        code: "K. Attempted Murdering A Public Officials",
        keterangan: `1). Setiap orang yang dengan sengaja melakukan perbuatan menyakiti/mengancam orang lain sehingga mengakibatkan orang lain luka-luka, baik ringan maupun berat dan atau mengakibatkan orang lain matinya seseorang pejabat negara, dengan atau tanpa senjata.
2). Menyebabkan kematian atau cedera berat akibat kelalaian seseorang dan bukan karena kesengajaan pribadi.`,
        fine: 250,
        time: 15
      },
      {
        nomor: 12,
        code: "L. Murdering A Public Officials",
        keterangan: "Seseorang yang secara melawan hukum melakukan pembunuhan terhadap orang lain atau pejabat publik dengan sengaja.",
        fine: 300,
        time: 30
      }
    ]
  },
    {
    section: "Control of Deadly Weapons",
    rows: [
      {
        nomor: 1,
        code: "A. Possessing, Showing, And Display Any Usages of Sharp / Blunt Weapons",
        keterangan: "1. Seseorang yang menunjukkan senjata tajam/tumpul untuk mengancam seseorang.\n2. Seseorang yang memamerkan senjata tajam/tumpul di tempat umum.",
        fine: 150,
        time: 15
      },
      {
        nomor: 2,
        code: "B. Possessing of Illegal Firearms",
        keterangan: "1. Seseorang yang memiliki senjata api yang tidak memiliki nomor seri pada kepemilikannya.\n2. Seseorang yang memiliki senjata api yang tidak memiliki nomor seri di rumah/apartemennya.\n3. Seseorang yang memiliki senjata api yang tidak memiliki nomor seri pada kendaraannya.\n4. Seseorang yang membeli senjata api secara ilegal yang tidak mempunyai nomor seri dari seseorang melalui sistem perdagangan mana pun.\n5. Alasan apa pun tidak valid bahkan untuk membela diri.",
        fine: 275,
        time: 20
      },
      {
        nomor: 3,
        code: "C. Possessing of Legal Firearms Without Official Firearms License",
        keterangan: "1. Seseorang yang memiliki senjata api yang mencantumkan nomor seri pada kepemilikannya tanpa Lisensi Senjata Api Resmi yang aktif.\n2. Seseorang yang memiliki senjata api yang memiliki nomor seri di rumah/apartemennya tanpa Lisensi Senjata Api Resmi yang aktif.\n3. Seseorang yang memiliki senjata api yang memiliki nomor seri pada kendaraannya tanpa Lisensi Senjata Api Resmi yang aktif.\n4. Seseorang yang secara ilegal membeli senjata yang memiliki nomor seri dari seseorang melalui salah satu sistem perdagangan.\n5. Alasan apa pun tidak valid bahkan untuk membela diri.",
        fine: 50,
        time: 20
      },
      {
        nomor: 4,
        code: "D. Possessing Any Kind of Weapon Materials or Schematics",
        keterangan: "1. Seseorang yang memiliki atau memegang material atau skema senjata.\n2. Seseorang yang memiliki skema atau bahan senjata (membuatnya secara ilegal dan menjualnya kepada orang lain).",
        fine: 150,
        time: 25
      },
      {
        nomor: 5,
        code: "E. Firearms License Violation",
        keterangan: "1. Orang yang memiliki lisensi senjata api yang gagal mematuhi Perjanjian Lisensi Senjata Api mana pun.\n2. Orang yang memiliki senjata api berlisensi yang dengan sengaja menunjukkan senjata api berlisensi di tempat umum.\n3. Lisensi senjata api akan diambil dan dikenakan hukuman sesuai dengan Perjanjian Lisensi Senjata Api.",
        fine: null,
        time: null,
        note: "The firearms license will be taken and punishable following the Firearms License Agreement."
      },
      {
        nomor: 6,
        code: "E.2. GCU (Gun Control Unit) Weapon Target",
        keterangan: "1. Daftar orang yang disertakan dari GCU Weapon Tracker untuk kebutuhan internal GCU dalam mengonfirmasi seseorang yang menggunakan lisensi senjata api.\n2. Orang yang memiliki izin kepemilikan senjata api yang merupakan laporan dari setiap pengguna senjata api tentang kehilangan yang mereka alami atas senjata api mereka, dalam kondisi kecelakaan apa pun.\n3. Orang yang memiliki izin kepemilikan senjata api yang tidak mengembalikan senjatanya dan termasuk dalam \"Daftar Senjata yang Tidak Dikembalikan\"",
        fine: null,
        time: null
      },
      {
        nomor: 7,
        code: "F. Brandishing a Firearm or Weapon",
        keterangan: "1. Seseorang yang kedapatan membawa senjata api dan juga senjata tajam.",
        fine: 200,
        time: 20
      },
      {
        nomor: 8,
        code: "G. Unlawful Discharge of a Firearm or Weapon",
        keterangan: "1. Setiap orang yang dengan sengaja atau gegabah melepaskan tembakan ke dalam rumah atau bangunan lain atau bangunan yang ditempati, atau ke dalam kendaraan bermotor yang ditempati oleh seseorang, melakukan pelanggaran berupa pelepasan tembakan secara ilegal.",
        fine: 200,
        time: 25
      },
      {
        nomor: 9,
        code: "H. Possession of a Body Armor",
        keterangan: "1. Seseorang yang ketahuan memakai pelindung tubuh pada tubuhnya.",
        fine: 275,
        time: 10
      },
      {
        nomor: 10,
        code: "I. Weapon Trafficking",
        keterangan: "1. Menyelundupkan/menyelundupkan senjata apa pun.",
        fine: 375,
        time: 30
      },
      {
        nomor: 11,
        code: "J. Possessing Destructive Devices or Explosives",
        keterangan: "1. Membawa atau kedapatan menggunakan alat-alat yang dapat merusak, baik berupa bahan pembakar atau alat rakitan yang dapat meledak dan membahayakan orang atau lingkungan di suatu area.",
        fine: 350,
        time: 35
      }
    ]
  },
   {
    section: "License and Permit",
    rows: [
      {
        nomor: 1,
        code: "A. Firearms License",
        keterangan: "`1. Setiap pemegang Lisensi Senjata Api diharuskan untuk mengikuti setiap Peraturan Lisensi Senjata Api.\n2. Setiap warga sipil yang ingin mendapatkan lisensi senjata api diharuskan untuk menyelesaikan Tahapan Perizinan Senjata Api.\n3. Jika pemegang senjata api gagal mematuhi Peraturan Lisensi Senjata Api, mereka akan dihukum seperti yang tertulis di sini.",
        fine: 2000,
        time: 25
      },
      {
        nomor: 2,
        code: "B. Flying License",
        keterangan: "1. Persyaratan dan Buku Pegangan PPL wajib diikuti, dipatuhi dan dipahami.\n2. Setiap warga sipil yang ingin mendapatkan izin terbang diharuskan untuk melengkapi Pedoman & Format Aplikasi.\n3. Orang yang tidak memiliki izin yang mengoperasikan/melepas landas terbang salah satu pesawat udara di negara bagian San Andreas tanpa izin dapat dihukum sebagaimana tertulis pada (1) C. 4. Maneuvering Any Air Vehicles Without Official Flying Licenses.",
        fine: 2000,
        time: 25
      },
      {
        nomor: 3,
        code: "C. Trucking License",
        keterangan: "1. Setiap warga negara yang ingin mendapatkan SIM harus mengikuti dan membuat aplikasi.\n2. Setiap pengemudi truk harus mengikuti Peraturan dan Pedoman.\n3. Bekerja / mengimpor / mengekspor secara ilegal segala jenis barang di seluruh negara bagian San Andreas dapat dihukum sebagaimana tertulis dalam (1) C. 3 Maneuvering Any Truck Without Official Trucking Licenses.",
        fine: 2000,
        time: 25
      },
      {
        nomor: 4,
        code: "D. Lumberjack License",
        keterangan: "1. Setiap warga negara yang ingin mendapatkan SIM harus mengikuti dan membuat aplikasi.\n2. Setiap penebang kayu harus mengikuti Peraturan tanpa ada pengecualian.\n3. Penebangan pohon secara ilegal di negara bagian San Andreas tidak diperbolehkan dan dapat dihukum.",
        fine: 2000,
        time: 25
      },
      {
        nomor: 5,
        code: "E. Event Permit",
        keterangan: "1. Setiap warga sipil yang hendak mendapatkan izin harus mengikuti dan membuat permohonan.\n2. Setiap penyelenggara acara harus mengikuti Peraturan tanpa ada pengecualian.\n3. Acara ilegal di negara bagian San Andreas tidak diizinkan dan dapat dihukum (hanya penyelenggara acara) setelah peringatan pertama tidak dipatuhi.",
        fine: 0,
        time: 0
      },
      {
        nomor: 6,
        code: "F. Organizing a Small Illegal Event",
        keterangan: "1. Acara kecil yang diadakan oleh 10 - 20 orang.\n2. Orang yang ketahuan mengorganisir acara tersebut.\n3. Orang yang tertangkap menerima keuntungan dari peristiwa tersebut.\n4. Orang yang bertanggung jawab atas acara tersebut.",
        fine: 5000,
        time: 25
      },
      {
        nomor: 7,
        code: "G. Organizing a Big Illegal Event",
        keterangan: "1. Sebuah acara besar yang diselenggarakan oleh lebih dari 20 orang.\n2. Orang yang tertangkap sedang mengorganisir acara tersebut.\n3. Orang yang kedapatan menerima keuntungan dari acara tersebut.\n4. Orang yang bertanggung jawab atas acara tersebut.",
        fine: 7500,
        time: 35
      }
    ]
  }
];



// State
let selectedCodes = [];
let totalFine = 0;
let totalTime = 0;

// DOM references
const controlsContainer = document.getElementById('controls');
const tableSections = document.getElementById('tableSections');

// Build controls
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search...';
searchInput.id = 'search';

const arrestCommandInput = document.createElement('input');
arrestCommandInput.type = 'text';
arrestCommandInput.readOnly = true;
arrestCommandInput.id = 'arrestCommand';
arrestCommandInput.value = '/arrest';

const resetBtn = document.createElement('button');
resetBtn.id = 'resetBtn';
resetBtn.textContent = 'Reset';

controlsContainer.appendChild(searchInput);
controlsContainer.appendChild(arrestCommandInput);
controlsContainer.appendChild(resetBtn);

// Build table from JS
function buildTables(data) {
  tableSections.innerHTML = ''; // Clear if rebuilding

  data.forEach((sectionData, index) => {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'section';
    sectionDiv.dataset.section = index + 1;

    const title = document.createElement('h3');
    title.textContent = sectionData.section;
    sectionDiv.appendChild(title);

    const table = document.createElement('table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Nomor</th>
          <th>Penal Code</th>
          <th>Keterangan</th>
          <th>Fine</th>
          <th>Time Arrest</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;
    sectionDiv.appendChild(table);

    const tbody = table.querySelector('tbody');

    sectionData.rows.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${row.nomor}</td>
        <td class="copyable">${row.code}</td>
        <td>${row.keterangan}</td>
        <td class="fine">${row.fine}</td>
        <td class="time">${row.time}</td>
        <td><button class="addBtn">Tambah</button></td>
      `;
      tbody.appendChild(tr);
    });

    tableSections.appendChild(sectionDiv);
  });

  // Attach dynamic event listeners
  attachEvents();
}

// Attach click handlers for copy and add
function attachEvents() {
  document.querySelectorAll('.copyable').forEach(el => {
    el.addEventListener('click', () => {
      navigator.clipboard.writeText(el.textContent.trim());
      alert(`Copied: ${el.textContent.trim()}`);
    });
  });

  document.querySelectorAll('.addBtn').forEach(button => {
    button.addEventListener('click', () => {
      const row = button.closest('tr');
      const code = row.querySelector('.copyable').textContent.trim();
      const fine = parseInt(row.querySelector('.fine').textContent.trim(), 10);
      const time = parseInt(row.querySelector('.time').textContent.trim(), 10);

      if (!selectedCodes.includes(code)) {
        selectedCodes.push(code);
        totalFine += fine;
        totalTime += time;
      }

      updateArrestCommand();
    });
  });
}

// Search handler
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    const rows = section.querySelectorAll('tbody tr');
    let matchFound = false;

    rows.forEach(row => {
      const text = row.innerText.toLowerCase();
      const match = text.includes(query);
      row.style.display = match ? '' : 'none';
      if (match) matchFound = true;
    });

    section.style.display = matchFound ? '' : 'none';
  });
});

// Reset button
resetBtn.addEventListener('click', () => {
  selectedCodes = [];
  totalFine = 0;
  totalTime = 0;
  updateArrestCommand();
});

// Update arrest command
function updateArrestCommand() {
  const command = `/arrest ${selectedCodes.join(', ')} ${totalFine} ${totalTime}`;
  arrestCommandInput.value = selectedCodes.length ? command : '/arrest';
    const arrestElement = document.getElementById('arrestCommand');
  arrestElement.textContent = command;

  arrestElement.onclick = () => {
    navigator.clipboard.writeText(command);
    alert(`Copied: ${command}`);
  };
  
}

// Build initial UI
buildTables(tableData);
