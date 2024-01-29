import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import LottieView from "lottie-react-native";
import ReusableBanner from '../../../atoms/banner/ReusableBanner';
import ReusableText from '../../../atoms/text/ReusableText';
import ReusableButton from '../../../atoms/button/ReusableButton';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation


export default function ProfileUserDirectTemplate() {
    const animation = useRef(null);

    return (
        <View style={styles.container}>
            <View style={styles.contprofile}>
                <View style={styles.lottieView}>
                    <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                            width: 200,
                            height: 200,
                        }}
                        source={require('../../../../assets/animations/profile.json')}
                    />
                </View>
                <ReusableText children={"INFORMACION DEL PERFIL"} color='#FFFFFF' fontSize={20} fontWeight='bold' />
            </View >

            <View style={styles.line}>
            </View>
            <View style={styles.conttext}>
                <View style={styles.text}>
                    <ReusableText children={"Nombre"} fontSize={20} color='#C35120' fontWeight='bold' style={{ width: 100 }} />
                    <ReusableText children={"Jhonatan Jhonas"} fontSize={20} color='#7E8084' fontWeight='bold' style={{ paddingTop: 20 }} />
                </View>
                <View style={styles.text}>
                    <ReusableText children={"Nombre"} fontSize={20} color='#C35120' fontWeight='bold' style={{ width: 100 }} />
                    <ReusableText children={"Jhonatan Jhonas"} fontSize={20} color='#7E8084' fontWeight='bold' style={{ paddingTop: 20 }} />
                </View>
                <View style={styles.text}>
                    <ReusableText children={"Rol"} fontSize={20} color='#C35120' fontWeight='bold' style={{ width: 100 }} />
                    <ReusableText children={"Administrador"} fontSize={20} color='#7E8084' fontWeight='bold' style={{ paddingTop: 20 }} />
                </View>
                <View style={styles.inputcont}>
                    <TextInput style={styles.textinput} placeholder='Cambiar Contraseña' />
                </View>
                <View style={styles.Btn}>
                    <ReusableButton title={"Guardar"} buttonStyle={{ backgroundColor: "#C35120", borderRadius: 20, height: 50, justifyContent: "center" }} textStyle={{ fontSize: 25, fontWeight: "bold" }} />
                </View>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //padding: 10,
        backgroundColor: "#F5EEA9",

    },
    contprofile: {
        backgroundColor: "#C35120",
        height: "40%",
        justifyContent: "center",
        alignItems: "center",
    },
    line: {
        backgroundColor: "#E0CE2F",
        height: 20,
    },
    conttext: {
        //backgroundColor:"red",
        height: "100%",
        padding: 20,
        alignItems: "center",

    },
    text: {
        flexDirection: "row",
        padding: 10,
    },
    inputcont: {
        width: "90%",
        paddingTop: 30,
        justifyContent: "center",
        alignItems: "center",
        //top :100,

    },
    textinput: {
        justifyContent:"center",
        backgroundColor: "white",
        height: 50,
        borderColor: "#C35120",
        padding: 10,
        borderRadius: 10,
        borderWidth: 3,
        fontSize: 20,
        fontWeight: "bold",
    },
    Btn:{
        width:"65%",
    }

});