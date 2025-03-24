import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoScreen from './Screens/TodoScreen'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <>
      <TodoScreen/>
      <StatusBar style='auto'/>
    </>
  )
}
