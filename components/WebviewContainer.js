import { Linking, Platform } from "react-native";
import SendIntentAndroid from 'react-native-send-intent';
import { WebView } from "react-native-webview";

const WebviewContainer = () => {
  const scrollToTop = `
    window.scrollTo(0, 0);
    true; // for iOS to ensure the script runs
  `;

  const onNavigationStateChange = (navState) => {
    if (navState.url && !navState.url.includes('about:blank')) {
      this.webview.injectJavaScript(scrollToTop);
    }
  };
  
  // 여기까지 웹 뷰 내에서 웹페이지 이동시 상단으로 고정되도록 하는 코드

  const onShouldStartLoadWithRequest = (event) => {
    // URL
    if (event.url.startsWith("http://") || event.url.startsWith("https://") ||
              event.url.startsWith("about:blank")){return true;}
          // android
          if (Platform.OS === "android") {
            SendIntentAndroid.openAppWithUri(event.url)
              .then((isOpened) => {
                if (!isOpened) {
                alert(" ");
                }
                return false;
              }).catch((err) => {
                console.log(err);
              });
          // iOS
          }else if(Platform.OS ==="ios"){
              Linking.openURL(event.url).catch((err) => {
                alert("app sil"); 
            });
          return false;
        }
        return false;
      };
  
  return (
    <WebView
      ref={ref => this.webview = ref}
      onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
      onNavigationStateChange={onNavigationStateChange}
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      originWhitelist={["*"]}
      // source={{ uri: 'https://test.readyvery.com' }}
      source={{ uri: 'https://readyvery.com/' }}
      userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
    />
  );
};

export default WebviewContainer;