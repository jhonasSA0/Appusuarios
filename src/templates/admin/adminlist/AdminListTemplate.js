import React, { useRef } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ReusableBannerTwo from '../../../atoms/banner/ReusableBannerTwo';
import ReusableText from '../../../atoms/text/ReusableText';
import ReusableButton from '../../../atoms/button/ReusableButton';
import { useNavigation } from '@react-navigation/native';
export default function AdminListTemplate() {
    const animation = useRef(null);
    const navigation=useNavigation();
    return (
        <View style={styles.container}>
            <ReusableBannerTwo color='#C35120' size={30} direction='top' />
            <View style={styles.welcome}>
                <ReusableText children={"AROBOTIC"} fontSize={20} color='#FFFFFF' fontWeight='bold' />
            </View>
            <View style={styles.contlist}>
                <ReusableText children={"Administradores"} color='#7E8084' fontSize={15} />
                <View style={styles.list}>
                    <View style={styles.list2}>
                        <ReusableText children={"Lista"} color='#E0CE2F' fontSize={17} fontWeight='bold' />
                    </View>
                </View>
            </View>
            <View style={styles.btn}>
                <ReusableButton onPress={() => navigation.navigate("AdminRegister")} title={"+ Nuevo"} buttonStyle={{width: "100%", backgroundColor:"#C35120", borderRadius:50, height:40, justifyContent:"center"}} textStyle={{fontSize:18,fontWeight:"bold"}}/>
            </View>

        </View>


    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        padding: 10,
        backgroundColor: "#FFFFFF"
    },
    welcome: {
        paddingTop: 30,
    },
    contlist: {
        padding: 20,
        //backgroundColor:"blue"
    },
    list: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 30,
    },
    list2: {
        backgroundColor: "#C35120",
        width: "80%",
        height: 30,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    btn:{
        width:130,
        //backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center",
        top:20,
        left:200,
    }
});