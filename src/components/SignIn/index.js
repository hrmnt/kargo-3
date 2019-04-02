import React from "react";
import {View, Text, StyleSheet, KeyboardAvoidingView, Image, TouchableOpacity} from "react-native";

import {InputField} from "../../commons";
import {inject} from "mobx-react";
import {NavigationActions, StackActions} from "react-navigation";


@inject("authStore")
class SignIn extends React.Component {
    state = {
        data: {
            username: "",
            password: ""
        }
    }

    registerNavigate = () =>{
        console.log("signUp")
        const {navigation} = this.props;
        navigation.navigate("SignUp");
    }

    signIn = () =>{
        const { navigation } = this.props;
        const resetAction = StackActions.reset({
            index: 0,
            key:null,
            actions: [NavigationActions.navigate({ routeName: 'MainTabs' })],
        });
        navigation.dispatch(resetAction);
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.header}>
                    {/*<Image/>*/}
                    <View style={styles.circle}></View>
                    <Text style={styles.helloTxt}>
                        Добро пожаловать
                    </Text>
                </View>
                <View style={styles.body}>
                    <View>
                        <InputField placeholder={"+7 (777) 777 77 77"} keyboardType={"numeric"} mask={"+7 ([000]) [000] [00] [00]"}/>
                        <InputField secureTextEntry={true} placeholder={"*********"}/>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.freeBtn}>
                            <Text style={styles.forgotTxt}>
                                Забыли пароль?
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.signIn()}  style={styles.btn}>
                            <Text style={styles.btnText}>
                                Войти
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => this.registerNavigate()} style={styles.bigBtn}>
                        <Text style={styles.regTxt}>
                            Регистрация
                        </Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
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
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EFEFEF",
        paddingBottom: 10
    },
    freeBtn: {},
    btn: {
        backgroundColor: "#EF741C",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        width: "50%"
    },
    btnText: {
        color: "#fff"
    },
    bigBtn: {
        backgroundColor: "rgba(0,0,0,0.05)",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        marginHorizontal: 15,
        borderRadius: 5,
        marginVertical: 10
    },
    regTxt:{
        color:"#000",
        fontSize:16
    }

});

export default SignIn;