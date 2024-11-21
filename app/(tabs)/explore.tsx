import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      { }
      <Image
        source={require("../../assets/images/newslogo.png")}
        style={styles.profileImage}
      />

      { }
      <Text style={styles.username}>BeritaQ</Text>

      { }
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Informasi Terkini, Langsung di Genggaman Anda</Text>
        <Text style={styles.infoText}>
          BeritaQ adalah aplikasi berita yang dirancang untuk memberikan informasi terkini dan terpercaya kepada pengguna. Dengan antarmuka yang sederhana dan intuitif, BeritaQ memungkinkan pengguna untuk mengakses berita dari berbagai kategori, mulai dari politik, ekonomi, hingga teknologi.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  username: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  infoContainer: {
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 8,
  },
});

export default ProfileScreen;
