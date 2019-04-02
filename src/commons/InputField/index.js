import React, {Component} from "react";
import {Text, View, StyleSheet, TextInput} from "react-native";
import TextInputMask from 'react-native-text-input-mask';

const InputField = props => {
    return (
        <View style={[styles.container, props.style? props.style: null]}>
            {props.title ? <Text>{props.title}</Text>: null}
            <TextInputMask
                secureTextEntry={props.secureTextEntry ? props.secureTextEntry: false}
                keyboardType={props.keyboardType ? props.keyboardType : "default"}
                style={[styles.inputContainer,props.inputStyle? props.inputStyle: null ]}
                placeholder={props.placeholder? props.placeholder:"Напишите...."}
                refInput={ref => { this.input = ref }}
                onChangeText={(formatted, extracted) => {
                    console.log(formatted) // +1 (123) 456-78-90
                    console.log(extracted) // 1234567890
                }}
                mask={props.mask? props.mask: null}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:15,
        marginBottom:10,
    },

    inputContainer: {
        backgroundColor: "rgba(0,0,0,0.05)",
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: "#c9c9c9"
    },
    search: {
        paddingRight: 10,

    }
});


export default InputField;