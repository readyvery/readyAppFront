import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
//import { Platform, StyleSheet, View } from 'react-native';
import WebviewContainer from './components/WebviewContainer';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('[Background Remote Message]', remoteMessage);
});

const App = () => {
  
  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    console.log('[FCM Token] ', fcmToken);
  }

  useEffect(() => {
    getFcmToken();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('[Remote Message] ', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  return (
    //<SafeAreaView style={styles.container}>
   // <View style={styles.bottomSafeArea}>
      <WebviewContainer/> 
    //</View>
   //</SafeAreaView>
    );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// })

// const styles = StyleSheet.create({
//   bottomSafeArea: {
//     flex: 1,
//     paddingBottom: Platform.OS === 'ios' ? 34 : 0, // iPhone X 이상 모델의 하단 Safe Area 높이를 고려한 값
//   },
// });

export default App;