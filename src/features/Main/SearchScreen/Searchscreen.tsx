import React, { useState } from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import AppSeparator from '@/Component/AppSeparator/AppSeparator'
import SearchBarheader from './Components/SearchBarheader'
import ContinueLearning from './Components/ContinueLearning'
 
export default function HomeSearchScreen() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <View style={styles.container}>    
      <AppSeparator size={40} />
      <SearchBarheader />
      <AppSeparator size={20} />
      <View style={styles.container1}>
      <ContinueLearning/>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  container: {
    flex: 1,},
container1: {
  paddingHorizontal: 5     ,
}
 } )