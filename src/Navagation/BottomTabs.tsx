import SVGByteCode from '@/Helper/SVGByteCode'
import Colors from '@/Theme/Colors'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import { SvgFromXml } from 'react-native-svg'


 
 
 const Tab = createBottomTabNavigator()
type TabName = 'Home' | 'Myjobs' | 'Profile' | 'Saved'

// const icons: Record<TabName, {active: string; inactive: string}> = {
//   // Home: {
//   //   active: SVGByteCode.active_home,
//   //   inactive: SVGByteCode.home
//   // },
//   // Myjobs: {
//   //   active: SVGByteCode.active_Jobs,
//   //   inactive: SVGByteCode.Jobs
//   // },
//   // Profile: {
//   //   active: SVGByteCode.active_profile,
//   //   inactive: SVGByteCode.Profile
//   // },
//   // Saved: {
//   //   active: SVGByteCode.active_saved,
//   //   inactive: SVGByteCode.saved
//   // }
// }

export default  () =>{
  return (
    // <Tab.Navigator
    //   screenOptions={({route}) => ({
    //     headerShown: false,
    //     tabBarStyle: {
    //       height: 70,
    //       paddingBottom: 10,
    //       paddingTop: 10,
    //       borderTopWidth: 0,
    //       elevation: 10,
    //       shadowColor: Colors.black,
    //       shadowOpacity: 0.06,
    //       shadowRadius: 6
    //     },

    //     tabBarLabelStyle: {
    //       fontSize: 12,
    //       marginTop: 4,
    //       fontWeight: '600'
    //     },

    //     tabBarActiveTintColor: '#FF9228',
    //     tabBarInactiveTintColor: '#787878ff',

    //     tabBarIcon: ({focused}) => {
    //       const tab = route.name as TabName
    //       const xmlIcon = focused ? icons[tab].active : icons[tab].inactive

    //       return <SvgFromXml xml={xmlIcon} width={26} height={26} />
    //     }
    //   })}
    // >

    // </Tab.Navigator>
    <></>
  )
}
