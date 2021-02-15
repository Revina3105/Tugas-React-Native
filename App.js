import React from 'react';
import {StyleSheet, Text, Image, ScrollView} from 'react-native';
import {SocialIcon} from 'react-native-elements';

const AppBio = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.Biodata}>Biodata</Text>
      <Image style={styles.Gambar} source={require('./gambar.jpg')} />
      <Text style={styles.Data}>Nama : </Text>
      <Text style={styles.Isi}>Revina Dwi Utami</Text>
      <Text style={styles.Data}>Tempat Tanggal Lahir :</Text>
      <Text style={styles.Isi}>Jakarta, 31 Mei 1996</Text>
      <Text style={styles.Data}>Agama :</Text>
      <Text style={styles.Isi}>Islam</Text>
      <Text style={styles.Data}>Pendidikan:</Text>
      <Text style={styles.Isi}>S1 Kehutanan IPB</Text>
      <Text style={styles.Data}>Hoby :</Text>
      <Text style={styles.Isi}>Makan, Memasak</Text>
      <Text style={styles.Data}>Pekerjaan :</Text>
      <Text style={styles.Isi}>Customer Service</Text>
      <Text style={styles.Data}>Alamat :</Text>
      <Text style={styles.Isi}>Kemayoran, Jakarta Pusat</Text>

      <SocialIcon title="Sign In With Facebook" button type="facebook" />
      <SocialIcon title="Some Twitter Message" button type="twitter" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  Biodata: {
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 8,
    backgroundColor: '#CD5C5C',
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  Data: {
    color: 'black',
    height: 50,
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
    marginTop: 10,
  },
  Isi: {
    marginTop: -10,
    marginHorizontal: 40,
    paddingVertical: 8,
    borderWidth: 5,
    borderColor: '#20232a',
    borderRadius: 10,
    backgroundColor: '#FFA07A',
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Gambar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    marginHorizontal: 145,
  },
});

export default AppBio;
