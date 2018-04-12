import React,{Component} from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
      <view style={styles.formContainer}>
      <TextInput
       placeholder="username or email"
       placeholderTextColor="rgba(255,255,255,0.7)"
       style={styles.input}
       />
       <TextInput
       placeholder="password"
       placeholderTextColor="rgba(255,255,255,0.7)"
       style={styles.input}
       />
       </view>
       <Text>Am Busy on App.js working on This Exercise!</Text>
      </View>
       );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 20
    },
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  const styles = StyleSheet.create({
    container: {
      padding: 20
    },
  input: {
    height: 40,
      backgroundColor: "rgba(255,255,255,0.2)",
     marginBottom: 20,
     color: "#FFF", 
     paddingHorizontal: 10
    }
});