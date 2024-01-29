import React, { useRef } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import LottieView from "lottie-react-native";
import ReusableBanner from '../../atoms/banner/ReusableBanner';
import ReusableButton from '../../atoms/button/ReusableButton';

export default function LoginTemplate() {
    const animation = useRef(null);
    return (
        <View style={styles.container}>
            <ReusableBanner color='#E0CE2F' size={55} direction='top' />
            <View style={styles.lottieView}>
                <LottieView
                    autoPlay
                    ref={animation}
                    style={{
                        width: 300,
                        height: 300,
                    }}
                    source={require('../../../assets/animations/login.json')}
                />
            </View>
            <View style={styles.inputcont}>
                <TextInput style={styles.textinput} placeholder='Usuario'/>
            </View>
            <View style={styles.inputcont}>
                <TextInput style={styles.textinput} placeholder='Contraseña'/>
            </View>
            <View style={styles.inputcont}>
                <ReusableButton title={"Iniciar sesion"} buttonStyle={{backgroundColor:"#E0CE2F", borderRadius:50, height:60, justifyContent:"center"}} textStyle={{fontSize:25,fontWeight:"bold"}}/>
            </View>

        </View>


    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        padding: 10,
        backgroundColor:"#C35120"
    },
    lottieView: {
        top:20,
        padding:10,
    },
    inputcont:{
        width:"80%",
        paddingTop:30,
        top :100,

    },
    textinput:{
        justifyContent:"center",
        backgroundColor:"white",
        height:50,
        borderColor:"#E0CE2F",
        padding:10,
        borderRadius:10,
        borderWidth:3,
        fontSize:20,
        fontWeight:"bold",
    },
});