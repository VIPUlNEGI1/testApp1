import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
 
import type {RootStackParamList} from '@/Types/types'

const Stack = createStackNavigator<RootStackParamList>()

export default () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
 <>
 </>
    </Stack.Navigator>
  )
}
