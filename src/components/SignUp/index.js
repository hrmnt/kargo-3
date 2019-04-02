import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView} from "react-native";
import {Header, SearchBar, Item} from "../../commons";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {InputField} from "../../commons";
import {inject} from "mobx-react";

@inject("authStore")
class SignUp extends React.Component {
    state = {
        data: {
            username: "",
            password: ""
        }
    }

    nextPage = () =>{
        const {navigation} = this.props;
        navigation.navigate("SignUpContinue");
    }

    render() {
        return (
            <KeyboardAwareScrollView style={styles.container}>
                <Header title={"Регистрация"}></Header>
                <View style={styles.wrapContainer}>
                    <InputField style={{paddingHorizontal:0}} title={"Имя"} placeholder={"Имя"}/>
                    <InputField style={{paddingHorizontal:0}} title={"Фамилия"} placeholder={"Кажиев"}/>
                </View>
                <View  style={styles.wrapContainer}>
                    <InputField style={{paddingHorizontal:0}} title={"Email"} placeholder={"test@gmail.com"}/>
                </View>
                <View  style={styles.wrapContainer}>
                    <InputField style={{paddingHorizontal:0}}  title={"Пароль"} secureTextEntry={true} placeholder={"*********"}/>
                    <InputField style={{paddingHorizontal:0}}  title={"Повтор пароля"} secureTextEntry={true} placeholder={"*********"}/>
                </View>
                <TouchableOpacity onPress={this.nextPage} style={styles.circleBtn}>
                    <EvilIcons color={"#fff"} size={40} name={"chevron-right"}/>
                </TouchableOpacity>



            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    body:{
        flex: 1,

    },
    forgotTxt: {
        fontSize: 14,
        color:"#5286da"
    },
    circle:{
        height:100,
        width:100,
        borderRadius:50,
        backgroundColor:"rgba(0,0,0,0.05)",
        marginBottom:10
    },
    helloTxt:{
        color:"#Ef741C",
        fontSize: 20,
        fontWeight: "500"
    },

    wrapContainer:{
        borderBottomWidth: 1,
        borderBottomColor: "#EFEFEF",
        paddingVertical: 10,
        marginHorizontal:15
    },
    circleBtn:{
        height:70,
        width:70,
        borderRadius:35,
        backgroundColor: "#Ef741C",
        alignItems: "center",
        justifyContent: "center",
        alignSelf:"center",
        marginTop:80
    }

});

export default SignUp;