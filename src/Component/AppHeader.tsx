import React, { memo } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
// import { SvgFromXml } from 'react-native-svg'
  
 
function AppHeader() {
 
  return (
    <View style={styles.container}>
        {/* <SvgFromXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="24.75" height="24.75" viewBox="0 0 24.75 24.75" xml:space="preserve"><path d="M0 3.875a2 2 0 0 1 2-2h20.75a2 2 0 0 1 0 4H2a2 2 0 0 1-2-2m22.75 6.5H2a2 2 0 0 0 0 4h20.75a2 2 0 0 0 0-4m0 8.5H2a2 2 0 0 0 0 4h20.75a2 2 0 0 0 0-4"/></svg>`}/> */}
        <Text>Crypto Tracker </Text>
   {/* <SvgFromXml xml={`<svg width="30" height="30" viewBox="-3 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-bell"><path d="M13.666 11.782 13 11.186V6a4 4 0 1 0-8 0v5.186l-.666.596A7 7 0 0 0 2.29 15h13.42a7 7 0 0 0-2.044-3.218M12 17a3 3 0 0 1-6 0H0a8.98 8.98 0 0 1 3-6.708V6a6 6 0 1 1 12 0v4.292A8.98 8.98 0 0 1 18 17zm-3 1a1 1 0 0 0 1-1H8a1 1 0 0 0 1 1"/></svg>`}/> */}
    </View>
  )
}

export default memo(AppHeader)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    marginHorizontal:20,
    marginTop: 20,
  },
})