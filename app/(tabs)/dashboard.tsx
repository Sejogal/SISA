import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Content_Area from '@/components/Content_Area';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Content_Area></Content_Area>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  }
});
