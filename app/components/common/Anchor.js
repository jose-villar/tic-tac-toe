import React from 'react';
import { Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

function Anchor({ style, text, url }) {

  const handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync(url);
  };

  return(
    <Text onPress={ handleOpenWithWebBrowser } style={ style }> { text } </Text>
  );
}

export default Anchor;
