// src/screens/HomeScreen.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header';
import Card from '../components/Card';
import { AppStackParamList } from '../navigation/AppNavigator';

type HomeNavProp = NativeStackNavigationProp<AppStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeNavProp>();

  return (
    <View style={styles.container}>
      <Header title="الصفحة الرئيسية" />

      <Card
        title="لوحة البيانات"
        description="الانتقال إلى لوحة البيانات"
        onPress={() => navigation.navigate('Dashboard')}
      />

      <Card
        title="الإعدادات"
        description="الانتقال إلى صفحة الإعدادات"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16
  },
});

export default HomeScreen;
