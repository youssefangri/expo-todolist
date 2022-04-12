import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import './firebase.js';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigation from './navigation/index.js';

// const Stack = createNativeStackNavigator();


export default function App() {
  return (
       <RootNavigation />
  );
}

const styles = StyleSheet.create({});
