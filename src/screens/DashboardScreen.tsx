import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const DashboardScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>لوحة التحكم</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>مرحبًا بك في لوحة التحكم الخاصة بك</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>إجراء جديد</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0A2647', // أزرق غامق
    padding: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: '#F7D02C', // أصفر
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    width: '90%',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  cardText: {
    color: '#0A2647',
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#F7D02C',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#0A2647',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
