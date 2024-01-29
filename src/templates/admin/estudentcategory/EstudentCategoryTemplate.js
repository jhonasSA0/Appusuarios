import React, { useRef } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import LottieView from "lottie-react-native";
import ReusableBanner from '../../../atoms/banner/ReusableBanner';
import ReusableButton from '../../../atoms/button/ReusableButton';
import ReusableText from '../../../atoms/text/ReusableText';
import { useNavigation } from '@react-navigation/native';
export default function EstudentCategoryTemplate() {

    const animation = useRef(null);
    const navigation=useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.welcome}>
                <ReusableText children={"Bienvenido a"} fontSize={15} color='#000000' />
                <ReusableText children={"AROBOTIC"} fontSize={20} color='#C35120' fontWeight='bold' />
            </View>
            <ReusableBanner color="#F5EEA9" size={85} />
            <View style={styles.profile}>
                <ReusableText children={"A que categoria"} fontSize={25} color='#000000' fontWeight='bold' />
                <ReusableText children={"quiere ingresar ?"} fontSize={25} color='#C35120' fontWeight='bold' />
            </View>
            <View style={styles.contBtn}>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: "60%", left: 90 }}>
                    <ReusableButton onPress={() => navigation.navigate("StudentList")} title={"Mini Spot   7-10 años" } buttonStyle={{ width: "100%", borderRadius: 20, backgroundColor: '#FFFFFF', height: 100, justifyContent: "center", }} textStyle={{ fontSize: 25, color: "#C35120" }} />
                </View>
                <View style={styles.lottieView}>
                    <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                            width: 170,
                            height: 170,
                        }}
                        source={require('../../../../assets/animations/mini.json')}
                    />
                </View>
            </View>
            <View style={styles.contBtn}>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: "60%", left: 90 }}>
                    <ReusableButton onPress={() => navigation.navigate("StudentListSpot")} title={"     Spot      11-13 años" } buttonStyle={{ width: "100%", borderRadius: 20, backgroundColor: '#FFFFFF', height: 100, justifyContent: "center", }} textStyle={{ fontSize: 25, color: "#C35120" }} />
                </View>
                <View style={styles.lottieView2}>
                    <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                            width: 180,
                            height: 180,
                        }}
                        source={require('../../../../assets/animations/spot.json')}
                    />
                </View>
            </View>
            <View style={styles.inputcont}>
                <ReusableButton onPress={() => navigation.navigate("StudentRegister")} title={"+ Nuevo"} buttonStyle={{width: "100%", backgroundColor:"#C35120", borderRadius:50, height:40, justifyContent:"center"}} textStyle={{fontSize:18,fontWeight:"bold"}}/>
            </View>
        </View>


    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        padding: 10,
        backgroundColor: "#FFFFFF"
    },
    welcome: {
        paddingTop: 30,
    },
    profile: {
        top: 40,
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor:"red",
        padding:10,
    },
    contBtn: {
        //backgroundColor:"blue",
        flexDirection: "row",
        padding: 10,
        top:80,
    },
    lottieView: {
        //backgroundColor:"red",
        right: 200,
    },
    lottieView2: {
        //backgroundColor:"red",
        right: 240,
    },
    inputcont:{
        width:130,
        //backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center",
        top:60,
        left:200,
    },
});