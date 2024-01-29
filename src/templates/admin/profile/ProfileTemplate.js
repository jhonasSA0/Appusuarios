import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from "lottie-react-native";
import ReusableBanner from '../../../atoms/banner/ReusableBanner';
import ReusableText from '../../../atoms/text/ReusableText';
import ReusableButton from '../../../atoms/button/ReusableButton';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation


export default function ProfileTemplate() {
    const animation = useRef(null);
    const navigation = useNavigation(); // Obtiene la función de navegación

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
                    <ReusableButton onPress={() => navigation.navigate("EstudentCategory")} title={"Estudiante"} buttonStyle={{ width: "100%", borderRadius: 20, backgroundColor: '#F5EEA9', height: 100, justifyContent: "center", }} textStyle={{ fontSize: 25, color:"#000000" }}/>
                </View>
                <View style={styles.lottieView}>
                    <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                            width: 130,
                            height: 130,
                        }}
                        source={require('../../../../assets/animations/est.json')}
                    />
                </View>
            </View>
            <View style={styles.contBtn}>
                
                <View style={{ justifyContent: 'center', alignItems: 'center', width: "60%", left:90}}>
                    <ReusableButton onPress={() => navigation.navigate('AdminList')} title={"Administrador"} buttonStyle={{ width: "100%", borderRadius: 20, backgroundColor: '#F5EEA9', height: 100, justifyContent: "center", }} textStyle={{ fontSize: 24, color:"#000000" }} />
                </View>
                <View style={styles.lottieView}>
                    <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                            width: 130,
                            height: 130,
                        }}
                        source={require('../../../../assets/animations/admin.json')}
                    />
                </View>
            </View>
            <View style={styles.contBtn}>
                
                <View style={{ justifyContent: 'center', alignItems: 'center', width: "60%", left:90,}}>
                    <ReusableButton onPress={() => navigation.navigate("DirectList")} title={"Director"} buttonStyle={{ width: "100%", borderRadius: 20, backgroundColor: '#F5EEA9', height: 100, justifyContent: "center", }} textStyle={{ fontSize: 25, color:"#000000" }} />
                </View>
                <View style={styles.lottieView}>
                    <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                            width: 130,
                            height: 130,
                        }}
                        source={require('../../../../assets/animations/direc.json')}
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
        padding:0,
    },
    lottieView: {
        //backgroundColor:"red",
        position:"relative",
        right:200,
    }

});