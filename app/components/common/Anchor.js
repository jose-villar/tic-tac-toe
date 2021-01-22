import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

function Anchor({ children, style, text, url }) {

  const handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync(url);
  };

  return(
    <TouchableOpacity activeOpacity={ 0.7 } onPress={ handleOpenWithWebBrowser }>
      <Text style={ style }> { children } { text }</Text>
    </TouchableOpacity>
  );
}

export default Anchor;
