import { View, Text, Image } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import NewsCard from "../../components/NewsCard";

 const newsDetail = [
    {
      id: 1,
      title: "Integrasi Sapi dan Kelapa Sawit Berhasil Mencapai 2.000 Ekor Sapi",
      image: "https://sawitindonesia.com/wp-content/uploads/2024/11/Sekelompok-sapi-yang-tengah-mencari-rumput-di-kebun-sawit-.png",
      description: "JAKARTA, SAWIT INDONESIA Kepala Dinas Perkebunan dan Peternakan (Disbunnak) Provinsi Kalbar, Heronimus Hero menyebutkan bahwa dalam program sistem integrasi sapi dan kelapa sawit (SISKA) di Kalbar hingga kini sudah melakukan budidaya mencapai 2.000 ekor sapi.Kita sudah mempunyai 13 klaster program SISKA di Kalbar yang populasi sapinya sudah mencapai 2.000-an ekor,” ujarnya di Pontianak, Sabtu. Dia juga menambahkan apabila program SISKA berjalan mulus dan sejauh ini memang tidak masalah maka dapat menambah populasinya 1.000 ekor setiap tahun. Sapi integrasi kelapa sawit ini potensial di Kalbar dan bisa menghasilkan dalam waktu 1 atau 2 tahun kurang lebih 1.000 ekor lagi tahun depan lanjutnya. Ia menjelaskan bahwa program SISKA bertujuan meningkatkan produktifitas dan keberlanjutan sektor pertanian terutama dalam perkebunan dan peternakan, dengan cara mengintegrasikan ternak sapi dengan tanaman kelapa sawit. Ia melanjutkan program SISKA juga bertujuan untuk mengembangkan ternak sapi pada lahan konsesi di Kalbar.",
      category: "Pertenakan",
    },
    {
      id: 9,
      title: "Memperkuat Kerja Sama Guna Berantas Mafia Tanah",
      image: "https://statik.tempo.co/data/2024/11/08/id_1351677/1351677_720.jpg",
      description: "Kepala Kepolisian RI Jenderal Listyo Sigit Prabowo mengungkap rencana pembentukan satuan tugas (satgas) pemberantasan mafia tanah bersama dengan Kementerian Agraria Tata Ruang.",
      category: "Hukum",
    },
    {
      id: 3,
      title: "Ada potensi kehidupan di bulan-bulan Planet Uranus, sebut penelitian terbaru",
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/36c3/live/d7d05950-9c2a-11ef-a65b-4d3707c63685.jpg",
      description: "Planet Uranus dan lima bulan terbesarnya kemungkinan bukan planet yang steril dari kehidupan seperti yang selama ini dianggap para ilmuwan. Sebaliknya, Uranus dan lima bulannya mungkin memiliki lautan. Bahkan, bulan-bulannya boleh jadi mampu mendukung kehidupan, kata para ilmuwan. Selama ini sebagian besar dari apa yang kita ketahui soal Uranus dan lima bulannya dikumpulkan oleh pesawat ruang angkasa Voyager 2 milik NASA yang berkunjung hampir 40 tahun lampau. Namun, analisis terbaru menunjukkan bahwa kunjungan Voyager bertepatan dengan badai matahari yang kuat. Ini menimbulkan gagasan yang menyesatkan tentang seperti apa sebenarnya sistem Planet Uranus. Uranus adalah planet di bagian terluar tata surya kita. Uranus punya cincin es dan merupakan planet paling dingin dari semua planet. Posisinya miring ke samping, seolah-olah telah terguling sehingga bisa dibilang yang paling aneh.",
      category: "Sains",
    },
    {
      id: 4,
      title: "Simak Ucapan Menhub Soal Kabar Terbaru Harga Tiket Pesawat Jadi Murah",
      image: "https://akcdn.detik.net.id/visual/2024/11/06/menteri-perhubungan-dudy-purwagandhi-saat-rapat-kerja-dengan-komisi-v-dpr-ri-1_169.png?w=715&q=90",
      description: "Jurus pemerintah untuk menurunkan harga tiket pesawat belum juga ditemukan hingga kini. Padahal, Kementerian Perhubungan (Kemenhub) sudah menyebut formulanya bakal keluar awal bulan November 2024 ini. Sedang dibahas oleh satgas,kata Menteri Perhubungan Dudy Purwagandhi di Jakarta, Kamis (14/11/2024). Mengenai waktu keluarnya formula dan penurunan harga tiket pesawat, Ia belum bisa berjanji secara rinci. Sebelum Nataru kami harapkan sudah ada rekomendasinya, sebut Dudy. Sayangnya Ia juga tidak bisa menyebut sudah sejauh mana pembahasan yang sudah berjalan. Di sisi lain publik menunggu langkah konkret pemerintah dalam menurunkan harga tiket pesawat. Saya belum monitor ke Satgas, ujarnya.",
      category: "Ekonomi",
    },
    {
      id: 5,
      title: "Shin Tae-yong Memastikan Garuda Tak Akan Menyerah",
      image: "https://img.antaranews.com/cache/1200x800/2024/11/16/Timnas-Indonesia-kalah-15112024-aaa-2.jpg",
      description: "Kekalahan besar 0-4 di Stadion Utama Gelora Bung Karno, Jumat malam tadi, menyingkapkan perbedaan kelas antara Indonesia dan Jepang yang masih jauh dan mesti dipangkas oleh Garuda, yang membutuhkan proses dengan waktu tidak sebentar. Selisih peringkat FIFA yang sangat jauh yang mencapai 115 level --Indonesia berperingkat 130 dan Jepang 15-- terbuktikan di lapangan. Teknik mungkin tak terlalu senjang, tapi ketelitian dan kecerdasan membaca peluang serta ketenangan dalam memainkan pertandingan, menjadi pekerjaan rumah besar bagi pelatih Shin Tae-yong.Andai bermain secemerlang seperti 35 menit pertama pertandingan melawan Samurai Biru, maka situasi Jumat malam kemarin itu mungkin akan lain. Bagaimana tidak, Indonesia tiga kali memiliki peluang mengungguli Jepang. Ragnar Oratmangoen sudah berhadapan satu lawan satu dengan penjaga gawang Zion Suzuki. Kemudian, Rafael Struick terlambat menyambut peluang emas yang disodorkan debutan Kevin Diks, yang bermain cemerlang di sayap kanan permainan Garuda, bahkan mematikan irama main Kaora Mitoma, pemain sayap Jepang yang menjadi andalan Brighton & Hove Albion di Liga Inggris.",
      category: "Olahraga",
    },
    {
      id: 6,
      title: "Ahmad Saroni Temui Ivan Sugianto Si Pelaku Intimidasi Siswa SMA, Mewahnya Ruangan Bikin Curiga",
      image: "https://media.suara.com/pictures/653x366/2024/11/17/14907-penampakan-ivan-sugianto-saat-ditemui-anggota-dpr-ri-ahmad-sahroni.webp",
      description: "Nimbrungnya Ahmad Saroni dalam kasus yang menyeret nama diduga pengusaha Surabaya bernama Ivan Sugianto menuai reaksi yang beragam dari publik.",
      category: "Hukum",
    },
    {
      id: 7,
      title: "Peningkatan SDM guru sebuah keniscahayaan",
      image: "https://img.antaranews.com/cache/1200x800/2024/11/01/1000027128.jpg.webp",
      description: "Di awal masa jabatannya, Menteri Pendidikan Dasar dan Menengah (Mendikdasmen) Prof. Dr. Abdul Mu'ti, M.Ed membuat satu gebrakan dengan meluncurkan bulan November sebagai Bulan Guru Nasional. Langkah menteri baru itu tepat sekali bukan hanya karena rutinitas bangsa Indonesia yang setiap tanggal 25 November merayakan Hari Guru Nasional, tapi juga memberikan makna simbolis bagi penghargaan guru sebagai sumber penting transfer ilmu pengetahuan yang penting bagi kemajuan Indonesia.",
      category: "Pendidikan",
    },
    {
      id: 8,
      title: "Potensi Hasil Hutan Bukan Kayu untuk perekonomian berkelanjutan",
      image: "https://img.antaranews.com/cache/1200x800/2024/11/18/A70487C7-0EBD-4B4F-8008-196C56CBECE3.jpeg.webp",
      description: "Hutan Indonesia adalah salah satu anugerah alam yang tidak ternilai harganya. Di dalamnya tersimpan tidak hanya kekayaan ekologi yang menjaga keseimbangan bumi, tetapi juga potensi ekonomi yang luar biasa. Tak terkecuali di hutan di wilayah Kesatuan Pengelola Hutan Produksi (KPHP) Unit VIII Hilir Sarolangun, Provinsi Jambi, yang mengelola hutan seluas 110.372 hektare. Wilayah ini terdiri dari berbagai jenis tutupan lahan, termasuk hutan sekunder yang sempat mengalami penurunan luas sebesar 8.576 hektare (7,77 persen) antara tahun 2000 hingga 2019. Untuk mengatasi penurunan jumlah tutupan dengan tetap memperhatikan kepentingan ekonomi masyarakat sekitar hutan, dapat dilakukan salah satunya dengan mengoptimalkan keberadaan hasil hutan bukan kayu (HHBK).",
      category: "Alam",
    },
    {
      id: 9,
      title: "Daftar Pembalap MotoGP 2025: Jorge Martin Kini Tunggangi Aprilia, Marc Marquez Gunakan Ducati Terbaru",
      image: "https://cdn1-production-images-kly.akamaized.net/UnjEjU_GifOv--tGdZ49IJxejhs=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4987328/original/062800800_1730434944-20241101-MotoGP_Malaysia-AFP_3.jpg",
      description: "Motor GP 2024 resmi berakhir menyusul gelaran di Sirkuit Barcelona, Minggu (17/11/2024) malam WIB. Namun, para penunggang besi tidak akan lama-lama istirahat. Persaingan sudah hadir beberapa hari kemudian, dengan berlangsungnya tes pasca-musim di lokasi sama, Selasa (19/11/2024). Pada kesempatan ini, pembalap akan menjajal tunggangan terbaru menyambut MotoGP 2025.Salah satunya juara dunia 2024. Meninggalkan tim satelit Ducati Prima Pramac Racing, sosok berusia 26 tahun tersebut bakal mengendarai RS-GP milik Aprilia.",
      category: "Olahraga",
    },
    {
      id: 10,
      title: "Kisah Pembelajaran Pajak untuk UMKM",
      image: "https://img.antaranews.com/cache/1200x800/2024/11/14/kementerian-koperasi-mendorong-KUD-dapat-mengolah-susu-sendiri-141124-ajn-5.jpg.webp",
      description: " Beberapa waktu lalu, media sosial sempat diramaikan dengan kasus tagihan pajak senilai Rp671 juta kepada seorang pengusaha pengepul susu di Boyolali, Jawa Tengah. Pramono, pemilik usaha yang menjadi pengepul susu dengan 1.300 mitra peternak, menyatakan akan menutup usahanya karena dibebani pajak dengan nilai, yg menurutnya tidak masuk akal. Selain itu rekening banknya diblokir oleh Kantor Pelayanan Pajak (KPP) Boyolali, sebagai bagian dari upaya penagihan pajak. Berita tersebut kemudian menjadi viral dan opini publik menuding kantor pajak telah berbuat zalim, membuat pengusaha kecil menutup usahanya serta mengancam kelangsungan hidup 1.300 peternak dan keluarganya.",
      category: "Ekonomi",
    },
    {
      id: 11,
      title: "Masa Depan Ekonomi Indonesia di Era BRICS",
      image: "https://img.antaranews.com/cache/1200x800/2024/10/25/Sugiono-BRICS.jpg.webp",
      description: "Keberadaan aliansi BRICS, yang terdiri dari Brasil, Rusia, India, China, dan Afrika Selatan, menjadi fenomena global yang berpotensi mengubah peta dan tatanan ekonomi dunia secara signifikan. Di tengah dominasi Barat dalam sistem ekonomi dunia, BRICS menawarkan jalan alternatif bagi negara-negara berkembang untuk saling mendukung dan menciptakan sistem yang lebih adil dan inklusif. Dalam sebuah kesempatan, Muhammad Faisal, Ekonom dari CORE Indonesia, menilai bahwa bergabung dengan BRICS dapat memberikan Indonesia peluang akses ke pasar yang lebih luas dan mendiversifikasi relasi ekonomi, khususnya dengan negara-negara BRICS.",
      category: "Ekonomi",
    },
    {
      id: 12,
      title: "Hari Cinta Puspa dan Satwa, Melestarikan Keanekaragaman Hayati",
      image: "https://cdn.rri.co.id/berita/Entikong/o/1730708178344-IMG_9458/dkpg98vy0p2arv0.jpeg",
      description: "Tanggal 5 November diperingati sebagai Hari Cinta Puspa dan Satwa Nasional (HCPSN) di Indonesia. Perayaan ini bertujuan untuk menumbuhkan kesadaran masyarakat akan pentingnya melindungi dan melestarikan flora dan fauna khas Indonesia. Dengan kekayaan alamnya yang melimpah, Indonesia dikenal sebagai salah satu negara dengan keanekaragaman hayati terbesar di dunia. Melalui HCPSN, masyarakat diajak untuk lebih memahami peran penting keanekaragaman hayati dalam kehidupan dan menjaga kelestariannya.",
      category: "Alam",
    },
    {
      id: 13,
      title: "Memelihara Ketangguhan Bangsa Indonesia Lawan Virus Radikalisme",
      image: "https://img.antaranews.com/cache/1200x800/2024/11/07/1000267807.jpg.webp",
      description: "Musim Semi Arab (Arab Spring) telah bergulir sekitar 14 tahun silam, sebagian negara-negara di Timur Tengah dan Afrika Utara mampu melewati fase itu dengan aman, namun beberapa masih menghadapi kekacauan sosial, politik, dan keamanan, sebut saja Suriah, Libia, dan Yaman Kondisi Suriah dan Yaman kini masih kacau, begitu pula Libia. Padahal, dulu, Libia adalah salah satu negara paling makmur di Afrika, kini hancur dan sejak 2014, pemerintahan Libia terpecah menjadi dua, satu di sisi timur serta satu lagi di sisi barat negara itu. Aksi kekerasan masih sering terjadi akibat dua pemerintahan itu memiliki basis dukungan dan para milisi saling serang, karena mengklaim diri sebagai pemerintah yang sah. Beberapa negara terdampak peristiwa itu yang berujung pada perang saudara tak berkesudahan.",
      category: "Kesehatan",
    },
    {
      id: 14,
      title: "Ada Politisi PDIP Effendi Simbolon Saat Jokowi Deklarasi Dukung RK",
      image: "https://akcdn.detik.net.id/visual/2023/07/10/pdip-lanjut-rapat-bahas-klarifikasi-effendi-sambolon-soal-dukung-prabowo-1_169.jpeg?w=650&q=90",
      description: "Politikus PDIP Effendi Simbolon menghadiri pertemuan antara Presiden ke-7 RI Joko Widodo dan calon gubernur Jakarta nomor urut 1 Ridwan Kamil di kawasan Cempaka Putih, Jakarta, Senin (18/11) malam WIB Ketua Tim Pemenangan Ridwan Kamil-Suswono (RIDO) di Pilgub Jakarta 20024, Ahmad Riza Patria sempat menyapa Effendi yang hadir dalam pertemuan tersebut. Riza mengatakan Effendi merupakan kader PDIP yang mendukung RK dan Jokowi. Selain itu, Jokowi sendiri telah menyatakan dukungan kepada RK di Pilgub Jakarta 2024.",
      category: "Politik",
    },
    {
      id: 15,
      title: "Kawal Pilkada Serentak 2024, Kemendagri Komitmen Jaga Netralitas ASN",
      image:"https://asset.kompas.com/crops/vbuznZU6Sfnf6aX-xUBpQzORZCE=/0x0:1599x1066/1200x800/data/photo/2024/11/15/67374780ccb40.jpeg",
      description: "Kawal Pilkada Serentak 2024, Kemendagri Komitmen Jaga Netralitas ASN. Artikel ini telah tayang di Kompas.com dengan judul Kawal Pilkada Serentak 2024, Kemendagri Komitmen Jaga Netralitas ASN",
      category: "Politik",
    },
    {
      id: 16,
      title: "Prabowo Sudah 10 Hari Kunker LN: Saya Ingin Segera Pulang Sebetulnya",
      image: "https://awsimages.detik.net.id/community/media/visual/2024/11/08/momen-presiden-prabowo-memulai-lawatan-perdana-ke-luar-negeri-2_169.jpeg?w=600&q=90",
      description: "Presiden RI Prabowo Subianto ternyata rindu untuk kembali atau pulang ke Indonesia setelah sekitar 10 hari melakukan kunjungan kenegaraan secara maraton ke sejumlah negara. Hal itu disampaikan Prabowo  dalam sesi wawancara dengan wartawan di sela-sela kegiatan menghadiri acara Konferensi Tingkat Tinggi (KTT) G20 di Brasil, Minggu (17/11).",
      category: "",
    },
    {
      id: 17,
      title: "Keppres IKN Belum Diteken Prabowo, Pemerintah Pastikan Ibu Kota Negara Masih di Jakarta",
      image: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/f076/live/18f5e040-54c9-11ed-8978-5f8c5b2a2c9c.jpg.webp",
      description: "Menteri Hukum Supratman Andi Agtas belum bisa memastikan Keppres terkait Ibu Kota Nusantara terbit dalam waktu dekat menurutnya, terbitnya Keppres itu tergantung dari Presiden Prabowo Subianto dan kesiapan infrastruktur di IKN.",
      category: "Politik",
    },
    {
      id: 18,
      title: "KPI Pusat Dorong Revisi UU Penyiaran, Ini Alasannya",
      image: "https://asset-2.tstatic.net/tribunnewswiki/foto/bank/images/logo-kpi.jpg",
      description: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran (UU Penyiaran) saat ini masih menjadi sorotan dari berbagai pihak, termasuk oleh Ketua Komisi Penyiaran Indonesia (KPI) Pusat Ubaidillah.  Bahkan, Ubaidillah mendorong upaya pembaruan atau revisi Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran (UU Penyiaran).i",
      category: "Politik",
    },
    {
      id: 19,
      title: "Daftar Peristiwa Astronomi November 2024: Ada Supermoon-Hujan Meteor Taurid!",
      image: "https://akcdn.detik.net.id/community/media/visual/2023/10/22/ilustrasi-hujan-meteor_169.jpeg?w=700&q=90",
      description: "Selama November 2024, sejumlah peristiwa astronomi bakal terjadi dan tentunya menarik untuk dinanti. Para pegiat astronomi pasti tidak ingin melewatkannya, bukan? Lantas, apa saja peristiwa astronomi November 2024. Perlu dicatat sebelumnya, ada fenomena astronomi yang bisa dilihat dengan mata telanjang. Ada juga yang memerlukan alat tambahan demi keamanan indra penglihatan, baik teleskop maupun kacamata. Selain itu, peristiwa astronomi tidak serta merta semuanya dapat dilihat. Pasalnya, ada faktor-faktor yang mempengaruhi. Sebut saja pemilihan lokasi, kondisi cuaca, dan peristiwa astronomi itu sendiri.",
      category: "Alam",
    },
    {
      id: 20,
      title: "Sidang Praperadilan Tom Lembong Ungkap Impor Gula Diafirmasi Jokowi",
      image: "https://akcdn.detik.net.id/visual/2024/11/02/thomas-lembong-jalani-pemeriksaan-10-jam-2_169.jpeg?w=650&q=90",
      description: "Kuasa hukum mantan Menteri Perdagangan Thomas Trikasih Lembong atau Tom Lembong menyebut Presiden Joko Widodo (Jokowi) telah mengafirmasi kebijakan impor gula pada tahun 2015-2016. Hal itu disampaikan Zaid Mushafi selaku kuasa hukum Tom Lembong dalam sidang praperadilan di Pengadilan Negeri (PN) Jakarta Selatan, Senin (18/11).",
      category: "Politik",
    },
  ]

  const NewsDetail = () => {
    const { news } = useLocalSearchParams();
    const selectedNews = newsDetail.filter(function (item) {
      return item.title === news;
    });
  
    console.log(selectedNews);
  
    return (
      <SafeAreaView
        style={{
          backgroundColor: "white",
          flex: 1,
          // flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NewsCard item={selectedNews[0]} />
      </SafeAreaView>
    );
  };
  

export default NewsDetail;