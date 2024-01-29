import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from "lottie-react-native";
import ReusableBanner from '../../../atoms/banner/ReusableBanner';
import ReusableText from '../../../atoms/text/ReusableText';
import ReusableButton from '../../../atoms/button/ReusableButton';

export default function StudentOptionTemplate() {
    const animation = useRef(null);

    return (
        <View style={styles.container}>
            <ReusableBanner size={35} color='#C35120' direction='top' />
            <View style={styles.welcome}>
                <ReusableText children={"Bienvenido a"} fontSize={15} color='#FFFFFF' />
                <ReusableText children={"AROBOTIC"} fontSize={20} color='#E0CE2F' fontWeight='bold' />
            </View>
            <View style={styles.contprofile}>
                <View style={styles.profile}>
                    <ReusableText children={"Gestion de"} fontSize={25} color='#FFFFFF' fontWeight='bold' />
                    <ReusableText children={"perfiles"} fontSize={25} color='#E0CE2F' fontWeight='bold' />
                </View>
                <View>
                    <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                            width: 220,
                            height: 220,
                        }}
                        source={require('../../../../assets/animations/img3.json')}
                    />
                </View>
            </View>
            <View style={styles.contBtn}>
                
                <View style={{ justifyContent: 'center', alignItems: 'center', width: "60%", left:90}}>
                    <ReusableButton title={"Lista"} buttonStyle={{ width: "100%", borderRadius: 20, backgroundColor: '#F5EEA9', height: 100, justifyContent: "center", }} textStyle={{ fontSize: 25, color:"#000000" }} />
                </View>
                <View style={styles.lottieView}>
                    <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                            width: 150,
                            height: 150,
                        }}
                        source={require('../../../../assets/animations/liststudent.json')}
                    />
                </View>
            </View>
            <View style={styles.contBtn}>
                
                <View style={{ justifyContent: 'center', alignItems: 'center', width: "60%", left:90}}>
                    <ReusableButton title={"Reportes"} buttonStyle={{ width: "100%", borderRadius: 20, backgroundColor: '#F5EEA9', height: 100, justifyContent: "center", }} textStyle={{ fontSize: 25, color:"#000000" }} />
                </View>
                <View style={styles.lottieView}>
                    <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                            width: 130,
                            height: 130,
                        }}
                        source={require('../../../../assets/animations/reporting.json')}
                    />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    welcome: {
        paddingTop: 30,
    },
    contprofile: {
        flexDirection: "row",
        justifyContent: "center",
        //backgroundColor:"blue",
    },
    profile: {
        top: 40,
        left: 20,
    },
    contBtn:{
        //backgroundColor:"red",
        flexDirection:"row",
        padding:5,
    },
    lottieView: {
        //backgroundColor:"red",
        position:"relative",
        right:200,
    }

});