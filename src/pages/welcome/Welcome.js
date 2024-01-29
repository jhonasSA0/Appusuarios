import { StatusBar } from 'expo-status-bar';
import React, { useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from "lottie-react-native";
import WelcomeTemplate from '../../templates/welcome/WelcomeTemplate';
//import WelcomeTemplate from '../../templates/admin/welcome/WelcomeTemplate';

export default function Welcome() {
  return(
    <WelcomeTemplate/>
  ); 
}
