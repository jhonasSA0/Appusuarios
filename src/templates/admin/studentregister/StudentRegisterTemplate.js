
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import LottieView from "lottie-react-native";
import ReusableBanner from '../../../atoms/banner/ReusableBanner';
import ReusableText from '../../../atoms/text/ReusableText';
import ReusableButton from '../../../atoms/button/ReusableButton';
import RNPickerSelect from 'react-native-picker-select';


export default function StudentRegisterTemplate() {
    const animation = useRef(null);
    return (
        <View style={styles.container}>
            <ReusableBanner size={35} color='#E0CE2F' direction='top' />
            <View style={styles.contprofile}>
                <View style={styles.LottieView}>
                    <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                            width: 220,
                            height: 220,
                        }}
                        source={require('../../../../assets/animations/register.json')}
                    />
                </View>
                <View style={styles.profile}>
                    <ReusableText children={"Registro de"} fontSize={25} color='#FFFFFF' fontWeight='bold' />
                    <ReusableText children={"estudiante"} fontSize={25} color='#C35120' fontWeight='bold' />
                </View>
            </View>

            <View style={styles.containerRegister}>
                <View style={styles.register}>
                    <View style={styles.inputcont}>
                        <TextInput style={styles.textinput} placeholder='Nombre' />
                    </View>
                </View>
                <View style={styles.register}>
                    <View style={styles.inputcont}>
                        <TextInput style={styles.textinput} placeholder='Apellido' />
                    </View>
                </View>
                <View style={styles.edadcat}>
                    <View style={styles.edad}>
                        <View style={styles.inputcont}>
                            <TextInput style={styles.textinput} placeholder='Edad' />
                        </View>
                    </View>
                    <View style={styles.cat}>
                        <View style={styles.inputcont}>
                            <View style={styles.textinput}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{ label: 'Categoria', value: null }}
                                    items={[
                                        { label: 'Mini spot', value: 'Mini spot' },
                                        { label: 'Spot', value: 'Spot' },
                                    ]}
                                />
                            </View>

                        </View>
                    </View>
                </View>

                <View style={styles.register}>
                    <View style={styles.inputcont}>
                        <TextInput style={styles.textinput} placeholder='Usuario' />
                    </View>
                </View>

                <View style={styles.register}>
                    <View style={styles.inputcont}>
                        <TextInput style={styles.textinput} placeholder='Contraseña' />
                    </View>
                </View>
                <View style={styles.register}>
                    <View style={styles.inputcont}>
                        <ReusableButton title={"Guardar"} buttonStyle={{ backgroundColor: "#C35120", borderRadius: 20, height: 50, justifyContent: "center" }} textStyle={{ fontSize: 20, fontWeight: "bold" }} />
                    </View>
                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#F5EEA9",
    },
    contprofile: {
        flexDirection: "row",
        justifyContent: "center",

    },
    profile: {
        top: 110,
        right: 20,
    },
    containerRegister: {
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        top: 60,
        padding: 20,
        borderRadius: 20,
    },
    register: {
        //backgroundColor: "#FFFFFF",
        width: "90%",
        alignItems: "center",
        padding: 2,
        //borderRadius:20,
    },
    inputcont: {
        width: "100%",
        //top :100,

    },
    textinput: {
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor:"red",
        height: 50,
        borderColor: "#C35120",
        padding: 15,
        borderRadius: 10,
        borderWidth: 3,
        fontSize: 15,
        fontWeight: "bold",
    },
    btn: {
        width: "90%",
    },
    edad:{
        width: "25%",
        alignItems: "center",
        padding: 2,
    },
    cat:{
        width: "65%",
        alignItems: "center",
        padding: 2,
    },
    edadcat:{
        flexDirection:"row",
    }
});