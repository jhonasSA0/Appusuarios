import React, { useRef } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import ReusableBannerTwo from '../../../atoms/banner/ReusableBannerTwo';
import ReusableText from '../../../atoms/text/ReusableText';

export default function StudentListSpotTemplate() {
    const animation = useRef(null);
    return (
        <View style={styles.container}>
            <ReusableBannerTwo color='#FFFFFF' size={30} direction='top' />
            <View style={styles.welcome}>
                <ReusableText children={"AROBOTIC"} fontSize={20} color='#E0CE2F' fontWeight='bold' />
            </View>
            <View style={styles.contlist}>
                <ReusableText children={"Estudiantes spot"} color='#7E8084' fontSize={15}/>
                <View style={styles.list}>
                    <View style={styles.list2}>
                        <ReusableText children={"Lista"} color='#E0CE2F' fontSize={17} fontWeight='bold'/>
                    </View>
                </View>
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
        backgroundColor:"#C35120"
    },
    welcome: {
        paddingTop: 30,
    },
    contlist:{
        padding:20,
        //backgroundColor:"blue"
    },
    list:{
        backgroundColor:"#C35120",
        width:"100%",
        height:60,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        borderRadius:30,
    },
    list2:{
        backgroundColor:"#FFFFFF",
        width:"80%",
        height:30,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center",
    }
});