import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ToastAndroid,Linking} from 'react-native';
import {WebView} from 'react-native-webview';

export default class NextRedirectActivity extends Component {

    openExternalLink= (req) => {
        
        Linking.openURL(req.url).catch((err) => console.error('An error occurred', err));
        
        const isHTTPS = req.url.search('https://') !== -1;
    
            if (isHTTPS) {
              return false;
            } else {
              if (req.url.startsWith("intent://")) {
                return false;
              } 
              return false;
        }
    }

    render() {
        
        const { navigation } = this.props;
        //const url = navigation.getParam('message', 'NO-message').split('kakaotalk://kakaopay/pg?url=')[1];
        Linking.openURL(navigation.getParam('scheme', 'No-message')).catch((err) => console.error('An error occurred', err));
        const url = navigation.getParam('redirect', 'NO-message')
        console.log("와 url이다" + url);
        return (
        <WebView
            source={{uri: url}}
            javaScriptEnabled={true}
        />
        );
  }
}