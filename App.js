import { useEffect } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import SplashScreen from "react-native-splash-screen";
import WebviewContainer from './components/WebviewContainer';

const App = () => {

  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide();
    }, 1000);
  },[]);

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