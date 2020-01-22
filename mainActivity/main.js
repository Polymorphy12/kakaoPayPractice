import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ToastAndroid,Linking} from 'react-native';
import axios from 'axios';

export default class Main extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=> { 
          
          axios.get('http://13.124.193.165:3000/Oauth/approval')
          .then(response => {
            ToastAndroid.show("와 결제한다 !" + response.data.scheme + " " + response.data.redirect, ToastAndroid.SHORT);
            navigation.navigate("redirect", {scheme : response.data.scheme, redirect: response.data.redirect});
            //Linking.openURL(response.data.scheme).catch((err) => console.error('An error occurred', err));
          })
          .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
          // ADD THIS THROW error
           throw error;
         });
          
        }}>
        <View style={styles.button}>
          <Text style={styles.content}>카카오페이로 결제하기</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fef01b',
  },
  button: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: '#556677',
    borderRadius: 5,
  },
  content: {
    fontSize: 24,
    color: 'white',
  }
});