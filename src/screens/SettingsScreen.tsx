import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const SettingsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>الإعدادات</Text>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>تغيير كلمة المرور</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>إشعارات التطبيق</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>معلومات الحساب</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>تسجيل الخروج</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0A2647',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    color: '#F7D02C',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  option: {
    backgroundColor: '#fff',
    width: '90%',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  optionText: {
    color: '#0A2647',
    fontSize: 18,
    textAlign: 'right',
  },
});

export default SettingsScreen;
