import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import SplashScreen from "react-native-splash-screen";
import WebviewContainer from './components/WebviewContainer';

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('[Background Remote Message]', remoteMessage);
// });

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000); //스플래시 활성화 시간
  }, []);
  // const getFcmToken = async () => {
  //   const fcmToken = await messaging().getToken();
  //   console.log('[FCM Token] ', fcmToken);
  // }

  // useEffect(() => {
  //   getFcmToken();
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     console.log('[Remote Message] ', JSON.stringify(remoteMessage));
  //   });
  //   return unsubscribe;
  // }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <WebviewContainer/> 
      </SafeAreaView>
    </>
    );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});


export default App;