import { Link } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import NewsCard from "../../components/NewsCard";

const CATEGORIES = [
  {
    id: 1,
    name: "Semua"
  },
  {
    id: 2,
    name: "Peternakan"
  },
  {
    id: 3,
    name: "Olahraga"
  },
  {
    id: 4,
    name: "Sains"
  },
  {
    id: 5,
    name: "Ekonomi"
  },
  {
    id: 6,
    name: "Hukum"
  },
  {
    id: 7,
    name: "Pendidikan"
  },
  {
    id: 8,
    name: "Alam"
  },
  {
    id: 9,
    name: "Politik"
  },
];

const newsData = [
  {
      id: 1,
      title: "Integrasi Sapi dan Kelapa Sawit Berhasil Mencapai 2.000 Ekor Sapi",
      image: "https://sawitindonesia.com/wp-content/uploads/2024/11/Sekelompok-sapi-yang-tengah-mencari-rumput-di-kebun-sawit-.png",
      description: "JAKARTA, SAWIT INDONESIA Kepala Dinas Perkebunan dan Peternakan (Disbunnak) Provinsi Kalbar, Heronimus Hero menyebutkan bahwa dalam program sistem integrasi sapi dan kelapa sawit (SISKA).",
      category: "Peternakan",
    },
    {
      id: 2,
      title: "Daftar Pembalap MotoGP 2025: Jorge Martin Kini Tunggangi Aprilia, Marc Marquez Gunakan Ducati Terbaru",
      image: "https://cdn1-production-images-kly.akamaized.net/UnjEjU_GifOv--tGdZ49IJxejhs=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4987328/original/062800800_1730434944-20241101-MotoGP_Malaysia-AFP_3.jpg",
      description: "Motor GP 2024 resmi berakhir menyusul gelaran di Sirkuit Barcelona, Minggu (17/11/2024) malam WIB. Namun, para penunggang besi tidak akan lama-lama istirahat.",
      category: "Olahraga",
    },
    {
      id: 3,
      title: "Ada potensi kehidupan di bulan-bulan Planet Uranus, sebut penelitian terbaru",
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/36c3/live/d7d05950-9c2a-11ef-a65b-4d3707c63685.jpg",
      description: "Planet Uranus dan lima bulan terbesarnya kemungkinan bukan planet yang steril dari kehidupan seperti yang selama ini dianggap para ilmuwan. Sebaliknya, Uranus dan lima bulannya mungkin memiliki lautan.", 
      category: "Sains",
    },
    {
      id: 4,
      title: "Simak Ucapan Menhub Soal Kabar Terbaru Harga Tiket Pesawat Jadi Murah",
      image: "https://akcdn.detik.net.id/visual/2024/11/06/menteri-perhubungan-dudy-purwagandhi-saat-rapat-kerja-dengan-komisi-v-dpr-ri-1_169.png?w=715&q=90",
      description: "Jurus pemerintah untuk menurunkan harga tiket pesawat belum juga ditemukan hingga kini. Padahal, Kementerian Perhubungan (Kemenhub) sudah menyebut formulanya bakal keluar awal bulan November 2024 ini.",
      category: "Ekonomi",
    },
    {
      id: 5,
      title: "Shin Tae-yong Memastikan Garuda Tak Akan Menyerah",
      image: "https://img.antaranews.com/cache/1200x800/2024/11/16/Timnas-Indonesia-kalah-15112024-aaa-2.jpg",
      description: "Kekalahan besar 0-4 di Stadion Utama Gelora Bung Karno, Jumat malam tadi, menyingkapkan perbedaan kelas antara Indonesia dan Jepang.",
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
      description: "Di awal masa jabatannya, Menteri Pendidikan Dasar dan Menengah (Mendikdasmen) Prof. Dr. Abdul Mu'ti, M.Ed.", 
      category: "Pendidikan",
    },
    {
      id: 8,
      title: "Potensi Hasil Hutan Bukan Kayu untuk perekonomian berkelanjutan",
      image: "https://img.antaranews.com/cache/1200x800/2024/11/18/A70487C7-0EBD-4B4F-8008-196C56CBECE3.jpeg.webp",
      description: "Hutan Indonesia adalah salah satu anugerah alam yang tidak ternilai harganya.",
      category: "Alam",
    },
    {
      id: 9,
      title: "Memperkuat Kerja Sama Guna Berantas Mafia Tanah",
      image: "https://statik.tempo.co/data/2024/11/08/id_1351677/1351677_720.jpg",
      description: "Kepala Kepolisian RI Jenderal Listyo Sigit Prabowo mengungkap rencana pembentukan satuan tugas (satgas) pemberantasan mafia tanah bersama dengan Kementerian Agraria Tata Ruang.",
      category: "Hukum",
    },
    {
      id: 10,
      title: "Kisah Pembelajaran Pajak untuk UMKM",
      image: "https://img.antaranews.com/cache/1200x800/2024/11/14/kementerian-koperasi-mendorong-KUD-dapat-mengolah-susu-sendiri-141124-ajn-5.jpg.webp",
      description: "Beberapa waktu lalu, media sosial sempat diramaikan dengan kasus tagihan pajak senilai Rp671 juta kepada seorang pengusaha pengepul susu di Boyolali, Jawa Tengah.",
      category: "Ekonomi",
    },
    {
      id: 11,
      title: "Masa Depan Ekonomi Indonesia di Era BRICS",
      image: "https://img.antaranews.com/cache/1200x800/2024/10/25/Sugiono-BRICS.jpg.webp",
      description: "Keberadaan aliansi BRICS, yang terdiri dari Brasil, Rusia, India, China, dan Afrika Selatan.", 
      category: "Ekonomi",
    },
    {
      id: 12,
      title: "Hari Cinta Puspa dan Satwa, Melestarikan Keanekaragaman Hayati",
      image: "https://cdn.rri.co.id/berita/Entikong/o/1730708178344-IMG_9458/dkpg98vy0p2arv0.jpeg",
      description: "Tanggal 5 November diperingati sebagai Hari Cinta Puspa dan Satwa Nasional (HCPSN) di Indonesia.",
    },
    {
      id: 13,
      title: "Memelihara Ketangguhan Bangsa Indonesia Lawan Virus Radikalisme",
      image: "https://img.antaranews.com/cache/1200x800/2024/11/07/1000267807.jpg.webp",
      description: "Musim Semi Arab (Arab Spring) telah bergulir sekitar 14 tahun silam, sebagian negara-negara di Timur Tengah dan Afrika Utara mampu melewati fase itu dengan aman.",
      category: "Kesehatan",
    },
    {
      id: 14,
      title: "Ada Politisi PDIP Effendi Simbolon Saat Jokowi Deklarasi Dukung RK",
      image: "https://akcdn.detik.net.id/visual/2023/07/10/pdip-lanjut-rapat-bahas-klarifikasi-effendi-sambolon-soal-dukung-prabowo-1_169.jpeg?w=650&q=90",
      description: "Politikus PDIP Effendi Simbolon menghadiri pertemuan antara Presiden ke-7 RI Joko Widodo dan calon gubernur Jakarta nomor urut 1 Ridwan Kamil.",
      category: "Politik",
    },
    {
      id: 15,
      title: "Kawal Pilkada Serentak 2024, Kemendagri Komitmen Jaga Netralitas ASN",
      image:"https://asset.kompas.com/crops/vbuznZU6Sfnf6aX-xUBpQzORZCE=/0x0:1599x1066/1200x800/data/photo/2024/11/15/67374780ccb40.jpeg",
      description: "Kemendagri sudah membuat mekanisme evaluasi agar ASN di bawah Kementerian Dalam Negeri, termasuk di dalam pemerintah daerah tak ikut cawe-cawe dalam pilkada.",
      category: "Politik",
    },
    {
      id: 16,
      title: "Prabowo Sudah 10 Hari Kunker LN: Saya Ingin Segera Pulang Sebetulnya",
      image: "https://awsimages.detik.net.id/community/media/visual/2024/11/08/momen-presiden-prabowo-memulai-lawatan-perdana-ke-luar-negeri-2_169.jpeg?w=600&q=90",
      description: "Presiden RI Prabowo Subianto ternyata rindu untuk kembali atau pulang ke Indonesia setelah sekitar 10 hari melakukan kunjungan kenegaraan secara maraton ke sejumlah negara.",
      category: "Politik",
    },
    {
      id: 17,
      title: "Keppres IKN Belum Diteken Prabowo, Pemerintah Pastikan Ibu Kota Negara Masih di Jakarta",
      image: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/f076/live/18f5e040-54c9-11ed-8978-5f8c5b2a2c9c.jpg.webp",
      description: "Menteri Hukum Supratman Andi Agtas belum bisa memastikan Keppres terkait Ibu Kota Nusantara terbit dalam waktu dekat menurutnya, terbitnya Keppres itu tergantung dari Presiden Prabowo Subianto.",
      category: "Politik",
    },
    {
      id: 18,
      title: "KPI Pusat Dorong Revisi UU Penyiaran, Ini Alasannya",
      image: "https://asset-2.tstatic.net/tribunnewswiki/foto/bank/images/logo-kpi.jpg",
      description: "Undang-Undang Nomor 32 Tahun 2002 tentang Penyiaran (UU Penyiaran) saat ini masih menjadi sorotan dari berbagai pihak, termasuk oleh Ketua Komisi Penyiaran Indonesia (KPI) Pusat Ubaidillah.",
      category: "Politik",
    },
    {
      id: 19,
      title: "Daftar Peristiwa Astronomi November 2024: Ada Supermoon-Hujan Meteor Taurid!",
      image: "https://akcdn.detik.net.id/community/media/visual/2023/10/22/ilustrasi-hujan-meteor_169.jpeg?w=700&q=90",
      description: "Selama November 2024, sejumlah peristiwa astronomi bakal terjadi dan tentunya menarik untuk dinanti.",
      category: "Alam",
    },
    {
      id: 20,
      title: "Sidang Praperadilan Tom Lembong Ungkap Impor Gula Diafirmasi Jokowi",
      image: "https://akcdn.detik.net.id/visual/2024/11/02/thomas-lembong-jalani-pemeriksaan-10-jam-2_169.jpeg?w=650&q=90",
      description: "Kuasa hukum mantan Menteri Perdagangan Thomas Trikasih Lembong atau Tom Lembong menyebut Presiden Joko Widodo (Jokowi) telah mengafirmasi kebijakan impor gula pada tahun 2015-2016.",
      category: "Politik",
    },
  ]


export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData =
    selectedCategory === "Semua"
      ? newsData
      : newsData.filter((item) => item.category === selectedCategory);

  // Filter data berdasarkan pencarian judul atau deskripsi
  const searchedData = filteredData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      { }
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari berita..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Filter Kategori */}
      <View style={styles.categoryContainer}>
        {CATEGORIES.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.name && styles.selectedCategoryButton,
            ]}
            onPress={() => setSelectedCategory(category.name)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.name && styles.selectedCategoryText,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Daftar Berita */}
      <FlatList
        data={searchedData}
        renderItem={({ item }) => <NewsCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.newsList}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  searchContainer: {
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  searchInput: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    fontSize: 14,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
  selectedCategoryButton: {
    backgroundColor: "#B22222",
  },
  categoryText: {
    fontSize: 12,
    color: "#333",
  },
  selectedCategoryText: {
    color: "white",
  },
  newsList: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
});