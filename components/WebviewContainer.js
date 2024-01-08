import { Linking, Platform } from "react-native";
import SendIntentAndroid from 'react-native-send-intent';
import { WebView } from "react-native-webview";

const WebviewContainer = ({ handleSetRef, handleEndLoading }) => {
  const uri = "https://test.readyvery.com";

  const onShouldStartLoadWithRequest = (event) => {
    // URL
    if (event.url.startsWith("http://") || event.url.startsWith("https://") || event.url.startsWith("about:blank")){
        return true;
      }
          // android
          if (Platform.OS === "android") {
            // Android: SendIntentAndroid 사용하여 앱 열기
            SendIntentAndroid.openAppWithUri(event.url)
              .then((isOpened) => {
                if (!isOpened) {
                  alert("앱을 열 수 없습니다.");
                }
              }).catch((err) => {
                console.log(err);
              });
          } else if (Platform.OS === "ios") {
            // iOS: Linking 사용하여 앱 열기
            Linking.openURL(event.url).catch((err) => {
              alert("앱을 열 수 없습니다.");
            });
          }
          return false; 
        }

  return (
    <WebView
      onLoadEnd={handleEndLoading}
      onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
      ref={handleSetRef}
      source={{ uri }}
      javaScriptEnabled={true}
    />
  );
};

export default WebviewContainer;