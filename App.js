import React, { useRef } from 'react';
import WebviewContainer from './components/WebviewContainer';
const App = () => {
  let webviewRef = useRef();

  const handleSetRef = _ref => {
    webviewRef = _ref;
  };

  const handleEndLoading = e => {
    console.log("handleEndLoading");

    webviewRef.postMessage("로딩 완료시 webview로 정보를 보내는 곳");
  };

  return (
    <WebviewContainer
      webviewRef={webviewRef}
      handleSetRef={handleSetRef}
      handleEndLoading={handleEndLoading}
    />
  );
};

export default App;
