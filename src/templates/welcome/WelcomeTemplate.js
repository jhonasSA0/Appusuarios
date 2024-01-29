import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from "lottie-react-native";
import ReusableBanner from '../../atoms/banner/ReusableBanner';
import ReusableText from '../../atoms/text/ReusableText';
import ReusableButton from '../../atoms/button/ReusableButton';

export default function WelcomeTemplate() {
    const animation = useRef(null);
    return (
        <View style={styles.container}>
            <ReusableBanner color='#E0CE2F' size={60} />
            <View style={styles.lottieView}>
                <LottieView
                    autoPlay
                    ref={animation}
                    style={{
                        width: 300,
                        height: 300,
                    }}
                    source={require('../../../assets/animations/welcome.json')}
                />

                <View style={styles.text}>
                    <ReusableText children={"AROBOTIC"} color='white' fontSize={40} fontWeight='bold' />
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: "70%" }}>
                <ReusableButton title={"Iniciar Sesion"} buttonStyle={{ width: "100%", borderRadius: 50, backgroundColor: '#C35120', height:60, justifyContent:"center", }} textStyle={{fontSize:20}} />
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    lottieView: {
        justifyContent: "center",
        alignItems:"center",
        top: 10,
        paddingBottom:80,
        //backgroundColor: "blue",
    },
    text: {
        Top: 70,
    }
});