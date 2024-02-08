import { Linking, Platform } from "react-native";
import SendIntentAndroid from 'react-native-send-intent';
import { WebView } from "react-native-webview";

const WebviewContainer = () => {
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
      onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      originWhitelist={["*"]}
      source={{ uri: 'https://test.readyvery.com' }}
      // source={{ uri: 'https://readyvery.com/index.html' }}
    />
  );
};

export default WebviewContainer;